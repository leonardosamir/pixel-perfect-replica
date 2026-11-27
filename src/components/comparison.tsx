import { useState } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export function Comparison({ before, after, label }: { before: string; after: string; label: string }) {
  const [position, setPosition] = useState(50);
  return (
    <div className="comparison-item">
      <div className="comparison-image">
        <img src={after} alt={`${label} — depois, simulação ilustrativa`} loading="lazy" />
        <img src={before} alt={`${label} — antes, simulação ilustrativa`} loading="lazy" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} />
        <span className="comparison-label before-label">Antes</span>
        <span className="comparison-label after-label">Depois</span>
        <div className="comparison-line" style={{ left: `${position}%` }}><span><ChevronsLeftRight size={20} /></span></div>
        <input type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label={`Comparar antes e depois: ${label}`} />
      </div>
      <div className="comparison-caption"><h3>{label}</h3><span>Simulação ilustrativa</span></div>
    </div>
  );
}