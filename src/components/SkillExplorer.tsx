"use client";

import { useMemo, useState } from "react";
import { Code2, Database, BrainCircuit, Wrench, Layers, Terminal } from "lucide-react";
import { skillGroups } from "@/lib/data";

const icons = [Code2, Terminal, Database, BrainCircuit, Wrench, Layers];

export function SkillExplorer() {
  const [active, setActive] = useState("All");
  const groups = useMemo(() => active === "All" ? skillGroups : skillGroups.filter((group) => group.name === active), [active]);
  return (
    <div>
      <div className="filter-row" role="group" aria-label="Filter skills">
        {["All", ...skillGroups.map((group) => group.name)].map((name) => (
          <button key={name} className={`filter-pill ${active === name ? "selected" : ""}`} onClick={() => setActive(name)}>{name}</button>
        ))}
      </div>
      <div className="skill-grid">
        {groups.map((group) => {
          const Icon = icons[skillGroups.findIndex((item) => item.name === group.name)] ?? Code2;
          return (
            <article className="skill-card" key={group.name}>
              <div className="skill-card-icon"><Icon size={20} /></div>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <div className="tag-row skill-tags">{group.skills.map((skill) => <span key={skill} className="tech-tag">{skill}</span>)}</div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
