import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import GlassInput from "./ui/GlassInput";
import GlassButton from "./ui/GlassButton";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-black relative">
            <div className="max-w-4xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                        Let's work <span className="text-primary">together</span>
                    </h2>
                    <p className="text-zinc-400">
                        Have a project in mind? Fill out the form below or send me an email.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <GlassCard className="p-8 md:p-12" variant="clear" isInteractive={false}>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <GlassInput
                                    label="Name"
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                />
                                <GlassInput
                                    label="Email"
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-zinc-400 text-sm font-medium ml-2">Subject</label>
                                <div className="relative rounded-2xl overflow-hidden group">
                                    <select
                                        id="subject"
                                        className="w-full bg-zinc-950/20 backdrop-blur-md border border-zinc-700/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:bg-zinc-900/40 transition-all appearance-none cursor-pointer shadow-inner"
                                    >
                                        <option value="" className="bg-zinc-900">Select a subject</option>
                                        <option value="project" className="bg-zinc-900">Project Proposal</option>
                                        <option value="freelance" className="bg-zinc-900">Freelance Work</option>
                                        <option value="other" className="bg-zinc-900">Other</option>
                                    </select>
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none group-focus-within:ring-primary/50 transition-colors duration-300" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-zinc-400 text-sm font-medium ml-2">Message</label>
                                <div className="relative rounded-2xl overflow-hidden group">
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-zinc-950/20 backdrop-blur-md border border-zinc-700/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:bg-zinc-900/40 transition-all placeholder-zinc-600 resize-none shadow-inner"
                                        placeholder="Tell me about your project..."
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none group-focus-within:ring-primary/50 transition-colors duration-300" />
                                </div>
                            </div>

                            <GlassButton type="submit" variant="primary" className="w-full justify-center mt-4">
                                Send Message
                            </GlassButton>
                        </form>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
