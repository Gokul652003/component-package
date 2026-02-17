type ColorCardProps = {
  title: string;
  variable: string;
  hex: string;
};

export default function ColorCard({
  title,
  variable,
  hex,
}: ColorCardProps) {
  return (
    <div className="p-4 bg-white border border-[#F1F5F9] rounded-xl w-full md:w-[220px] flex flex-col gap-4">
      
      {/* Color Preview */}
      <div
        className="h-24 rounded-md"
        style={{ backgroundColor: hex }}
      />

      {/* Info */}
      <div>
        <p className="text-text-main font-bold">{title}</p>
        <p className="text-text-muted text-xs">{variable}</p>
        <p
          className="pt-2 text-xs text-primary"
        >
          {hex}
        </p>
      </div>
    </div>
  );
}
