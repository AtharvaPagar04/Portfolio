"use client";
import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section id="projects" className="section section-alt" style={{ position: "relative", zIndex: 1 }}>
            <div className="container">
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "clamp(1.8rem,4vw,2.5rem)",
                        fontWeight: 800,
                        color: "var(--purple)",
                        marginBottom: "0.5rem",
                    }}
                >
                    Projects
                </h2>
                <p
                    style={{
                        textAlign: "center",
                        color: "var(--text-muted)",
                        maxWidth: "480px",
                        margin: "0 auto 2.5rem",
                    }}
                >
                    A curated selection of my work spanning AI, full-stack development, and data analytics.
                </p>

                {/* Cards grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {projects.map((p) => (
                        <div key={p.title} className="project-card reveal">
                            {/* Image area */}
                            <div className="project-img" style={{ background: p.bg }}>
                                <span
                                    style={{
                                        position: "absolute",
                                        top: "0.75rem",
                                        left: "0.75rem",
                                        fontSize: "0.7rem",
                                        fontWeight: 700,
                                        padding: "0.2rem 0.6rem",
                                        borderRadius: "9999px",
                                        background: p.badgeColor || "var(--purple)",
                                        color: p.badgeTextColor || "#fff",
                                    }}
                                >
                                    {p.badge}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="project-body">
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="project-tags">
                                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                                </div>
                                <div className="project-links">
                                    <a href={p.code} className="project-link" target="_blank" rel="noreferrer">
                                        <i className="fab fa-github" /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
