"use client";
import { skillCategories } from "@/lib/data";

export default function Skills() {
    return (
        <section id="skills" className="section section-alt" style={{ position: "relative", zIndex: 1 }}>
            <div className="container">
                <h2 className="section-title">
                    <i className="fas fa-code" /> Skills
                </h2>
                <div className="section-divider" />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.title}
                            style={{
                                background: "var(--card)",
                                border: "1px solid var(--border)",
                                borderRadius: "1rem",
                                padding: "1.5rem",
                                transition: "border-color 0.3s, transform 0.3s",
                            }}
                            className="skill-cat-card reveal"
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.borderColor = "var(--purple)";
                                el.style.transform = "translateY(-4px)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.borderColor = "var(--border)";
                                el.style.transform = "translateY(0)";
                            }}
                        >
                            <h3
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    fontSize: "0.95rem",
                                    fontWeight: 700,
                                    color: "var(--text)",
                                    marginBottom: "1rem",
                                }}
                            >
                                <i className={cat.icon} style={{ color: "var(--purple)" }} />
                                {cat.title}
                            </h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                {cat.skills.map((s) => (
                                    <span key={s} className="skill-tag">{s}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
