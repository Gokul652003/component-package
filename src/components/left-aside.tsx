export const LeftAside = ({ menu }: { menu: string[] }) => {
  return (
    <aside className="p-5 font-sans hidden md:block">

      {/* Title */}
      <p className="mb-3 text-xs font-semibold tracking-wide text-gray-500">
        ON THIS PAGE
      </p>

      {/* Menu */}
      <div className="relative border-l-2 border-border-main pl-3 flex flex-col gap-4">

        {menu.map((item, index) => (
          <div
            key={item}
            className={`
              relative text-sm cursor-pointer transition
              ${index === 0
                ? "font-semibold text-primary"
                : "text-text-muted hover:text-primary"
              }
            `}
          >

            {/* Active Line */}
            {index === 0 && (
              <span className="absolute -left-[14px] top-0 h-full w-[2px] bg-primary" />
            )}

            {item}
          </div>
        ))}
      </div>

      {/* Pro Tip */}
      <div className="mt-6 flex gap-3 rounded-xl border border-border-main bg-bg-subtle p-4">

        {/* Icon */}
        <div className="text-lg">💡</div>

        {/* Text */}
        <div>
          <h4 className="text-xs font-semibold tracking-wide text-primary">
            PRO TIP
          </h4>

          <p className="mt-1 text-sm text-text-muted leading-relaxed">
            Use the <b>ThemeEditor</b> component in dev mode
            to live-edit your library tokens.
          </p>
        </div>

      </div>

    </aside>
  );
}
