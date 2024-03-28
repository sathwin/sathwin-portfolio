interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-3">
      <div className="w-[18px] h-[0.5px] bg-text-faint" />
      <span className="text-[10px] font-mono text-text-faint uppercase tracking-mono">{children}</span>
    </div>
  );
}
