import { Header } from "../../../components/header"
import { SideBar } from "../../../components/sidebar"
import { CodeBlock } from "../../../components/code-block"
import { Hero } from "../../../components/hero"
import { LeftAside } from "../../../components/left-aside"

const HomePage = () => {
    const code = `npm install @lumina-ui/core 

# or using yarn
yarn add @lumina-ui/core `;
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">

                <SideBar />
                <div className="flex-1 px-6 py-12">
                    <Hero />
                    <div>
                        <CodeBlock code={code} title="Quick Start" />
                    </div>
                </div>
                <div className="w-[256px]">
                    <LeftAside />
                </div>
            </div>
        </div>
    )
}

export default HomePage