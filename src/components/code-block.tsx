import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type PackageManager = "npm" | "yarn" | "pnpm";

type CodeMap = {
  npm: string;
  yarn: string;
  pnpm: string;
};

type CodeBlockProps = {
  /** For normal code block */
  code?: string;

  /** For npm/yarn/pnpm tabs */
  commands?: CodeMap;

  /** UI Variant */
  variant?: "tabs" | "plain";

  /** Language for highlighting */
  language?: string;

  title?: string;
};

export default function CodeBlock({
  code,
  commands,
  variant = "plain",
  language = "tsx",
  title,
}: CodeBlockProps) {
  const [active, setActive] = useState<PackageManager>("npm");
  const [copied, setCopied] = useState(false);

  const content =
    variant === "tabs" && commands
      ? commands[active]
      : code || "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden bg-bg-code shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">

        {/* Tabs (Only if variant = tabs) */}
        {variant === "tabs" && commands ? (
          <div className="flex gap-2">
            {(["npm", "yarn", "pnpm"] as PackageManager[]).map((pm) => (
              <button
                key={pm}
                onClick={() => setActive(pm)}
                className={`
                  px-3 py-1 text-sm rounded-md transition font-semibold
                  ${active === pm
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {pm}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-xs text-gray-400 font-mono">
            {title}
          </div>
        )}

        {/* Copy */}
        <button
          onClick={handleCopy}
          className="text-xs text-gray-300 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-md transition"
        >
          {copied ? "Copied ✅" : "Copy 📋"}
        </button>
      </div>

          <div className="overflow-x-auto overscroll-x-contain">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          wrapLongLines={false}
          customStyle={{
            margin: 0,
            padding: "16px",
            fontSize: "13px",
            lineHeight: "1.6",
            whiteSpace: "pre",
            minWidth: "max-content",
          }}
        >
          {content}
        </SyntaxHighlighter>
      </div>

    </div>
  );
}

