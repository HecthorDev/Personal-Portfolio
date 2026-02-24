import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
    as,
    className = '',
    color = 'var(--primary, #00e676)',
    speed = '6s',
    thickness = 1,
    children,
    ...rest
}: StarBorderProps<T>) => {
    const Component = as || 'button';

    return (
        <Component
            className={`relative inline-block overflow-hidden rounded-[20px] group ${className}`}
            {...(rest as any)}
            style={{
                padding: `${thickness}px 0`,
                ...(rest as any).style
            }}
        >
            <div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div className="relative z-1 h-full w-full bg-white dark:bg-zinc-950/90 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white group-hover:text-[var(--primary,#00e676)] dark:group-hover:text-[var(--primary,#00e676)] group-hover:[text-shadow:0px_1px_3px_rgba(0,0,0,0.35)] dark:group-hover:[text-shadow:none] transition-all duration-300 flex items-center justify-center text-[16px] py-[16px] px-[26px] rounded-[20px] hover:bg-zinc-100 dark:hover:bg-zinc-900/50">
                {children}
            </div>
        </Component>
    );
};

export default StarBorder;
