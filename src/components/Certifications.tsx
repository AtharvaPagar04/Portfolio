"use client";
import { certifications } from "@/lib/data";

export default function Certifications() {
    return (
        <section id="certifications" className="section section-alt" style={{ position: "relative", zIndex: 1 }}>
            <div className="container">
                <h2 className="section-title">
                    <i className="fas fa-certificate" /> Certifications
                </h2>
                <div className="section-divider" />

                <div className="cert-grid">
                    {certifications.map((cert) => (
                        <div
                            key={cert.title}
                            className={`cert-card reveal ${cert.featured ? "cert-featured" : ""}`}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                <i
                                    className="fas fa-certificate"
                                    style={{ color: "var(--purple)", fontSize: "1.2rem" }}
                                />
                                <span
                                    style={{
                                        fontSize: "0.72rem",
                                        color: "var(--text-dim)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.3rem",
                                    }}
                                >
                                    <i className="fas fa-calendar-alt" /> {cert.date}
                                </span>
                            </div>

                            <h3
                                style={{
                                    fontSize: "0.95rem",
                                    fontWeight: 700,
                                    marginBottom: "0.4rem",
                                    color: cert.featured ? "var(--purple)" : "var(--text)",
                                }}
                            >
                                {cert.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    color: "var(--purple-light)",
                                    marginBottom: "0.6rem",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.3rem",
                                    fontWeight: 500,
                                }}
                            >
                                <i className="fas fa-check-circle" style={{ color: "var(--purple)" }} />
                                {cert.issuer}
                            </p>

                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    color: "var(--text-muted)",
                                    lineHeight: 1.6,
                                    marginBottom: "1rem",
                                }}
                            >
                                {cert.desc}
                            </p>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
