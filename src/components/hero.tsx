import { FaGithub } from "react-icons/fa"
import { MdArrowForward } from "react-icons/md"


export const Hero = () => {
    return (
        <div className="py-12 flex flex-col gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] self-start">
                <div className="size-2 rounded-full bg-[#137FEC]" />
                <p className="text-xs font-bold uppercase text-[#64748B]">STABLE RELEASE v2.4.0</p>
            </div>
            <p className="text-6xl font-bold">Build faster with <br />
                <span className="text-[#137FEC]">Lumina UI</span></p>
            <p className="text-lg text-[#64748B] w-[40%]">A professional React design system crafted for high-performance
                enterprise applications. Accessible, customizable, and ready for
                production.</p>
            <div className="flex gap-4 pt-4">
                <button className="bg-[#137FEC] px-8 py-4 rounded-lg text-white font-bold flex items-center gap-2">Get Started <MdArrowForward /></button>
                <button className=" px-8 py-4 rounded-lg text-[#0F172A] font-bold flex items-center gap-2 border border-[#E2E8F0] "><FaGithub />Github</button>
            </div>

        </div>
    )
}