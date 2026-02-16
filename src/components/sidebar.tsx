export const SideBar = () => {
    return (
        <div className="p-6 w-[256px] border-r border-[#E2E8F0] h-full hidden md:block">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">

                    <p className="text-xs font-semibold uppercase text-[#64748B]">Getting Started</p>
                    <div className="flex flex-col gap-2 text-[#64748B] text-sm">
                        <p className="px-3 py-2 text-[#137FEC] bg-[#137FEC]/5 rounded-lg">Introduction</p>
                        <p className="px-3 py-2">Installation</p>
                        <p className="px-3 py-2">Theming</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">

                    <p className="font-semibold text-xs uppercase text-[#64748B]">Components</p>
                    <div className="flex flex-col gap-2 text-[#64748B] text-sm">
                        <p className="px-3 py-2">Button</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
