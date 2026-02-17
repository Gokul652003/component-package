import { Header } from "../../../components/header"
import { LeftAside } from "../../../components/left-aside"
import { SideBar } from "../../../components/sidebar"
import CodeBlock from "../../../components/code-block"
import ColorCard from "../../../components/colour-card";

const themeProviderCode = `import { ThemeProvider } from "@lumina-ui/core";

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}`;

const customThemeCode = `// Define your brand colors
const customTheme = {
  colors: {
    primary: '#7C3AED', // Changing blue to purple
    success: '#059669',
  },
  borderRadius: {
    lg: '1rem',
  }
};
// Apply in your root file
<LuminaProvider theme={customTheme}>
  <App />
</LuminaProvider>`;

export const ThemingRoute = () => {
    const menu = [
        "Overview",
        "ThemeProvider",
        "Design Tokens",
        "Custom Theme"
    ];
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">

                <SideBar />
                <div className="flex-1 px-6 py-12 min-w-0 flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <p className="text-primary font-semibold text-sm uppercase">Customization</p>
                        <p className="text-text-main text-4xl font-bold">Theming & Customization</p>
                        <p className="text-text-muted text-lg w-full md:w-[40%] lg:w-[50%] xl:w-[60%] 2xl:w-[70%] text-justify">Lumina UI is built from the ground up to be highly customizable. Learn
                            how to wrap your application with our ThemeProvider and override default
                            design tokens to match your brand identity.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl font-bold text-text-main">ThemeProvider</p>
                        <p className="text-text-muted">To use Lumina UI components, you need to wrap your root application with the <code className="text-primary bg-bg-highlight h-[22px]">ThemeProvider</code>.This context provider handles theme distribution and component styling logic</p>
                        <CodeBlock variant="plain" code={themeProviderCode} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl font-bold text-text-main">Design Tokens</p>
                        <p className="text-text-muted">Our design tokens are the visual atoms of our design system. We use a set of predefined
                            CSS variables for colors, spacing, and typography that you can easily reference or override.</p>
                        <div className="flex gap-6 flex-wrap">
                            <ColorCard
                                title="Primary"
                                variable="--lumina-blue-500"
                                hex="#3B82F6"
                            />

                            <ColorCard
                                title="Success"
                                variable="--lumina-green-500"
                                hex="#22C55E"
                            />

                            <ColorCard
                                title="Warning"
                                variable="--lumina-yellow-500"
                                hex="#EAB308"
                            />

                            <ColorCard
                                title="Error"
                                variable="--lumina-red-500"
                                hex="#EF4444"
                            />

                            <ColorCard
                                title="Gray"
                                variable="--lumina-gray-500"
                                hex="#64748B"
                            />
                        </div>
                        <div className="flex flex-col gap-4 py-4">
                            <p className="text-2xl font-bold text-text-main">Customizing the Theme</p>
                            <p className="text-text-muted">To override default tokens, pass a <code className="text-primary bg-bg-highlight h-[22px]">theme</code>  object to the provider. Lumina UI will automatically merge your overrides with the default design system.</p>
                            <CodeBlock variant="plain" code={customThemeCode} title="theme.config.ts" />
                        </div>
                    </div>
                </div>
                <div className="w-[256px] hidden md:block">
                    <LeftAside menu={menu} />
                </div>
            </div>
        </div>
    )
}