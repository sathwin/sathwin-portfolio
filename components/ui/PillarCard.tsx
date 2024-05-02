interface PillarCardProps {
  label: string;
  color: "blue" | "teal" | "amber";
  techs: string;
}

const colorClasses = {
  blue: "border-l-accent-blue",
  teal: "border-l-accent-teal",
  amber: "border-l-accent-amber",
};

export default function PillarCard({ label, color, techs }: PillarCardProps) {
  return (
    <div
      className={`bg-white/[0.03] border border-border ${colorClasses[color]} border-l-2 rounded-lg p-4 flex flex-col gap-2`}
    >
      <div className="text-[9px] font-mono text-text-faint uppercase tracking-mono">{label}</div>
      <div className="text-[13px] text-text-muted leading-relaxed">{techs}</div>
    </div>
  );
}
