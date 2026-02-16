import logo from "../assets/logo.svg"
import serachIcon from '../assets/search-icon.svg'

export const Header = () => {
    return (
        <div className="p-4 border-b border-[#E2E8F0] flex justify-between">
            <div className="flex gap-8 items-center">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" />
                    <p className="text-xl font-bold">LuminaUI</p>
                </div>

                <div className="px-3 py-1.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] w-[256px] flex items-center gap-2 h-[40px]">
                    <div>
                        <img src={serachIcon} alt="search-icon" />
                    </div>
                    <input type="text" placeholder="Search" className="bg-transparent outline-none" />
                </div>
            </div>
            <div className="flex gap-1">
                <div className="flex gap-1 items-center text-[#64748B] text-sm">
                    <div className="flex justify-center items-center">
                        <p className="px-3 py-2">v1.0.0</p>
                        <div className="border border-[#E2E8F0] h-4 w-px">
                        </div>

                    </div>
                    <div className="flex gap-1 items-center">
                        <p className="px-3 py-2">Componets</p>
                        <p className="px-3 py-2">Resources</p>
                    </div>
                </div>
                <button className="bg-[#137FEC] px-4 py-2 rounded-lg text-white text-sm font-semibold">Support</button>
            </div>
        </div>
    )
}

