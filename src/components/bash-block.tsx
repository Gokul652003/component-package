import { useState } from "react";

export const CodeBlock = ({ code, title }: { code: string, title: string }) => {
    const [copied, setCopied] = useState(false);



    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="max-w-4xl font-mono">

            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-text-main">
                    {title}
                </h3>

            </div>

            {/* Terminal Box */}
            <div className="rounded-xl overflow-hidden shadow-2xl bg-slate-900">

                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800">

                    {/* Mac Dots */}
                    <div className="flex gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full" />
                        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <span className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>

                    {/* Copy Button */}
                    <button
                        onClick={copyToClipboard}
                        className="text-xs px-3 py-1 rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
                    >
                        {copied ? "Copied ✓" : "Copy"}
                    </button>
                </div>

                {/* Code Area */}
                <pre className="p-5 text-sm text-slate-200 overflow-x-auto leading-relaxed">
                    <code>{code}</code>
                </pre>

            </div>
        </div>
    );
}
