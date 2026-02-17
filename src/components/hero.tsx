import { FaGithub } from "react-icons/fa"
import { MdArrowForward } from "react-icons/md"


export const Hero = () => {
    return (
        <div className="py-12 flex flex-col gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-bg-subtle self-start">
                <div className="size-2 rounded-full bg-primary" />
                <p className="text-xs font-bold uppercase text-text-muted">STABLE RELEASE v2.4.0</p>
            </div>
            <p className="text-4xl md:text-6xl font-bold text-text-main">Build faster with <br />
                <span className="text-primary">Lumina UI</span></p>
            <p className="text-lg md:text-xl text-text-muted w-full md:w-[40%] lg:w-[50%] xl:w-[60%] 2xl:w-[70%]">A professional React design system crafted for high-performance
                enterprise applications. Accessible, customizable, and ready for
                production.</p>
            <div className="flex gap-4 pt-4 flex-col md:flex-row">
                <button className="bg-primary px-8 py-4 rounded-lg text-white font-bold flex items-center gap-2 justify-center">Get Started <MdArrowForward /></button>
                <button className=" px-8 py-4 rounded-lg text-text-main font-bold flex items-center gap-2 border border-border-main justify-center"><FaGithub />Github</button>
            </div>

        </div>
    )
}