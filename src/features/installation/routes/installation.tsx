import CodeBlock from "../../../components/code-block";
import { Header } from "../../../components/header"
import { LeftAside } from "../../../components/left-aside"
import { SideBar } from "../../../components/sidebar"

export const InstallationRoute = () => {
    const menu = [
        "Install Package",
        "Basic Usage"
    ];
    const code = `import { LuminaProvider } from "@lumina-ui/core";

function App() {
  return (
    <LuminaProvider>
      <YourApp />
    </LuminaProvider>
  );
}`;

    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">

                <SideBar />
                <div className="flex-1 px-6 py-12 min-w-0">
                    <div className="flex flex-col gap-2">
                        <p className="text-primary font-semibold text-sm uppercase">Getting Started</p>
                        <p className="text-text-main text-4xl font-bold">Installation</p>
                        <p className="text-text-muted text-lg w-full md:w-[40%] lg:w-[50%] xl:w-[60%] 2xl:w-[70%]">Learn how to set up Lumina UI in your project and start building beautiful React interfaces.</p>
                    </div>
                    <div className="pt-12 flex flex-col gap-6">
                        <p className="text-2xl font-bold text-text-main">Install Package</p>
                        <p className="text-text-muted">Run the following command in your terminal to install the Lumina UI core package.</p>
                        <CodeBlock variant="tabs" commands={{
                            npm: "npm install @lumina-ui/core",
                            yarn: "yarn add @lumina-ui/core",
                            pnpm: "pnpm add @lumina-ui/core",
                        }} />
                    </div>
                    <div className="pt-12 flex flex-col gap-6">
                        <p className="text-2xl font-bold text-text-main">Basic Usage</p>
                        <p className="text-text-muted">Wrap your application root with the <code className="text-primary bg-bg-highlight h-[22px]">LuminaProvider</code>  to enable global styling and theme tokens.</p>
                        <CodeBlock variant="plain" code={code} />
                    </div>
                    <div>

                    </div>
                </div>
                <div className="w-[256px] hidden md:block">
                    <LeftAside menu={menu} />
                </div>
            </div>
        </div>
    )
}