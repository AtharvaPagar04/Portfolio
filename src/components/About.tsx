"use client";
import { personal } from "@/lib/data";

export default function About() {
    return (
        <section id="about" className="section" style={{ position: "relative", zIndex: 1 }}>
            <div className="container">
                <h2 className="section-title">
                    <i className="fas fa-user-circle" /> About Me
                </h2>
                <div className="section-divider" />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 320px",
                        gap: "3rem",
                        alignItems: "start",
                    }}
                    className="about-grid"
                >
                    {/* Text */}
                    <div>
                        <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
                            {personal.about}
                        </p>
                        <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                            {personal.about2}
                        </p>

                        {/* Stats */}
                        <div
                            style={{
                                display: "flex",
                                gap: "2rem",
                                marginBottom: "2rem",
                                flexWrap: "wrap",
                            }}
                        >

                        </div>

                        <a href={personal.resumeUrl} className="btn btn-primary" download>
                            <i className="fas fa-download" /> Download Resume
                        </a>
                    </div>

                    {/* Info cards */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {[
                            { icon: "fas fa-graduation-cap", label: "Education", value: "B.Sc. CS (AIML) — VIT University" },
                            { icon: "fas fa-map-marker-alt", label: "Location", value: personal.location },
                            { icon: "fas fa-envelope", label: "Email", value: personal.email },
                            { icon: "fas fa-code", label: "Focus", value: "Full-Stack & AI/ML" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    padding: "0.875rem 1rem",
                                    background: "var(--card)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "0.75rem",
                                    transition: "border-color 0.2s",
                                }}
                                onMouseEnter={(e) =>
                                    ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--purple)")
                                }
                                onMouseLeave={(e) =>
                                    ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)")
                                }
                            >
                                <div
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "0.5rem",
                                        background: "var(--purple-dim)",
                                        border: "1px solid var(--border)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--purple)",
                                        flexShrink: 0,
                                    }}
                                >
                                    <i className={item.icon} />
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>{item.label}</div>
                                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
