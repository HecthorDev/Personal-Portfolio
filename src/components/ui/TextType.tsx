import {
    createElement,
    useEffect,
    useMemo,
    useRef,
    useState,
    type ElementType,
    type HTMLAttributes,
    type ReactNode,
} from "react";

interface TextTypeProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    showCursor?: boolean;
    hideCursorWhileTyping?: boolean;
    cursorCharacter?: string | ReactNode;
    cursorClassName?: string;
    text: string | string[];
    as?: ElementType;
    typingSpeed?: number;
    initialDelay?: number;
    pauseDuration?: number;
    deletingSpeed?: number;
    loop?: boolean;
}

export default function TextType({
    text,
    as: Component = "div",
    typingSpeed = 60,
    initialDelay = 0,
    pauseDuration = 1400,
    deletingSpeed = 38,
    loop = true,
    className = "",
    showCursor = true,
    hideCursorWhileTyping = false,
    cursorCharacter = "|",
    cursorClassName = "",
    ...props
}: TextTypeProps) {
    const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
    const [displayedText, setDisplayedText] = useState("");
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const cursorRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor || !showCursor) return;

        let blinkTimer: number | undefined;
        let visible = true;

        const blink = () => {
            visible = !visible;
            cursor.style.opacity = visible ? "1" : "0";
            blinkTimer = window.setTimeout(blink, 460);
        };

        blinkTimer = window.setTimeout(blink, 460);

        return () => {
            if (blinkTimer) {
                window.clearTimeout(blinkTimer);
            }
        };
    }, [showCursor]);

    useEffect(() => {
        if (textArray.length === 0) return;

        const activeText = textArray[currentTextIndex] ?? "";
        let timer: number | undefined;

        if (!isDeleting) {
            if (currentCharIndex < activeText.length) {
                timer = window.setTimeout(() => {
                    setDisplayedText((prev) => prev + activeText[currentCharIndex]);
                    setCurrentCharIndex((prev) => prev + 1);
                }, currentCharIndex === 0 ? initialDelay || typingSpeed : typingSpeed);
            } else if (loop || currentTextIndex < textArray.length - 1) {
                timer = window.setTimeout(() => setIsDeleting(true), pauseDuration);
            }
        } else if (displayedText.length > 0) {
            timer = window.setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
            }, deletingSpeed);
        } else {
            setIsDeleting(false);
            setCurrentCharIndex(0);
            if (loop || currentTextIndex < textArray.length - 1) {
                setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
            }
        }

        return () => {
            if (timer) {
                window.clearTimeout(timer);
            }
        };
    }, [
        textArray,
        currentTextIndex,
        currentCharIndex,
        displayedText,
        isDeleting,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        initialDelay,
        loop,
    ]);

    const shouldHideCursor =
        hideCursorWhileTyping &&
        textArray[currentTextIndex] &&
        (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

    return createElement(
        Component,
        {
            className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
            ...props,
        },
        <span className="inline">{displayedText}</span>,
        showCursor && (
            <span
                ref={cursorRef}
                className={`ml-1 inline-block ${shouldHideCursor ? "hidden" : ""} ${cursorClassName}`}
            >
                {cursorCharacter}
            </span>
        )
    );
}
