import { specPanelData } from "@/lib/data";

export default function SpecPanel() {
  return (
    <div className="bg-white/[0.03] border border-[rgba(255,255,255,0.09)] rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <span className="text-[10px] font-mono text-text-faint uppercase tracking-mono">ENGINEER SPEC</span>
        <span className="text-[9px] font-mono px-2 py-1 rounded bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
          srj-v1.0
        </span>
      </div>

      {/* Body */}
      <div className="p-4 space-y-5">
        {/* IDENTITY */}
        <div>
          <div className="text-[9px] font-mono text-text-faint uppercase tracking-mono mb-3">IDENTITY</div>
          <div className="space-y-2">
            {specPanelData.identity.map((item) => (
              <div key={item.key} className="flex items-start gap-3 font-mono text-[11px]">
                <span className="text-text-faint min-w-[56px]">{item.key}:</span>
                <span style={{ color: item.color }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[0.5px] bg-border" />

        {/* CAPABILITIES */}
        <div>
          <div className="text-[9px] font-mono text-text-faint uppercase tracking-mono mb-3">CAPABILITIES</div>
          <div className="space-y-2">
            {specPanelData.capabilities.map((item) => (
              <div key={item.key} className="flex items-start gap-3 font-mono text-[11px]">
                <span className="text-text-faint min-w-[56px]">{item.key}:</span>
                <span style={{ color: item.color }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[0.5px] bg-border" />

        {/* CERTIFICATIONS */}
        <div>
          <div className="text-[9px] font-mono text-text-faint uppercase tracking-mono mb-3">CERTIFICATIONS</div>
          <div className="flex flex-wrap gap-2">
            {specPanelData.certifications.map((cert) => (
              <span
                key={cert}
                className="text-[9px] font-mono px-2 py-1 rounded bg-white/[0.05] text-text-muted border border-border"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
