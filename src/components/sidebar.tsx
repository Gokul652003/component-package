import { NavLink } from "react-router-dom"

export const SideBar = () => {
    return (
        <div className="p-6 w-[256px] border-r border-border-main h-full hidden md:block">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">

                    <p className="text-xs font-semibold uppercase text-text-muted">Getting Started</p>
                    <div className="flex flex-col gap-2 text-text-muted text-sm">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-3 py-2 ${isActive ? "text-primary bg-primary/5 rounded-lg" : ""}`
                            }
                        >
                            Introduction
                        </NavLink>
                        <NavLink
                            to="/installation"
                            className={({ isActive }) =>
                                `px-3 py-2 ${isActive ? "text-primary bg-primary/5 rounded-lg" : ""}`
                            }
                        >
                            Installation
                        </NavLink>
                        <NavLink
                            to="/theming"
                            className={({ isActive }) =>
                                `px-3 py-2 ${isActive ? "text-primary bg-primary/5 rounded-lg" : ""}`
                            }
                        >
                            Theming
                        </NavLink>
                    </div>
                </div>
                <div className="flex flex-col gap-4">

                    <p className="font-semibold text-xs uppercase text-text-muted">Components</p>
                    <div className="flex flex-col gap-2 text-text-muted text-sm">
                        <p className="px-3 py-2">Button</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
