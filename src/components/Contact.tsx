import { motion } from "framer-motion";

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
                    className="bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-800 backdrop-blur-sm"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-zinc-400 text-sm font-medium ml-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-zinc-950/50 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-zinc-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-zinc-400 text-sm font-medium ml-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-zinc-950/50 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-zinc-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-zinc-400 text-sm font-medium ml-2">Subject</label>
                            <select
                                id="subject"
                                className="w-full bg-zinc-950/50 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer"
                            >
                                <option value="" className="bg-zinc-900">Select a subject</option>
                                <option value="project" className="bg-zinc-900">Project Proposal</option>
                                <option value="freelance" className="bg-zinc-900">Freelance Work</option>
                                <option value="other" className="bg-zinc-900">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-zinc-400 text-sm font-medium ml-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-zinc-950/50 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-zinc-600 resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-black font-bold py-4 rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-[0_0_20px_rgba(0,230,118,0.3)] hover:shadow-[0_0_30px_rgba(0,230,118,0.5)] mt-4"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
