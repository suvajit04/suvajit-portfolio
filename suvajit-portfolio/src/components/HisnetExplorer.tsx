"use client";

import { useState } from "react";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { hisnet } from "@/lib/data";

const descriptions = [
  "The model uses digitized osteosarcoma whole-slide histology images as its source material.",
  "Images are prepared and augmented using rotation, horizontal flipping, contrast adjustment, and scaling to increase variation.",
  "Large slide imagery is tiled and smaller image patches are prepared for patch-level learning.",
  "Patches are converted into embeddings and positional information is added so the model retains patch-order context.",
  "The report describes 12 consecutive Transformer encoder layers for representation learning.",
  "Multi-Head Self-Attention and feed-forward MLP modules learn relationships and features from the embedded patches.",
  "Encoded patch features are processed and represented for the final classifier.",
  "The final output classifies a patch as Viable Tumor, Necrotic Tumor, or Non-Tumor.",
];

export function HisnetExplorer() {
  const [active, setActive] = useState(0);
  return (
    <div className="two-col">
      <div className="architecture">
        {hisnet.architecture.map((step, index) => (
          <div key={step}>
            <button className={`architecture-step ${active === index ? "selected" : ""}`} onClick={() => setActive(index)}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <span>{step}</span>
              {active === index ? <CheckCircle2 size={15} color="var(--accent-2)" /> : <small>VIEW</small>}
            </button>
            {index !== hisnet.architecture.length - 1 ? <div className="architecture-arrow"><ArrowDown size={15} /></div> : null}
          </div>
        ))}
      </div>
      <div className="content-block" style={{ alignSelf: "start", position: "sticky", top: 105 }}>
        <span className="eyebrow"><span className="eyebrow-line" />STAGE {String(active + 1).padStart(2, "0")}</span>
        <h3 style={{ marginTop: 13 }}>{hisnet.architecture[active]}</h3>
        <p>{descriptions[active]}</p>
        <div className="notice-box" style={{ marginTop: 22 }}><strong>Implementation note:</strong> The report describes the model implementation with TensorFlow Functional API. PyTorch remains a separately listed AI/ML skill in the resume and is not attributed to this project implementation.</div>
      </div>
    </div>
  );
}
