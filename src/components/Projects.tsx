"use client";
import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section id="projects" className="section section-alt" style={{ position: "relative", zIndex: 1 }}>
            <div className="container">
                <h2 className="section-title">
                    <i className="fas fa-project-diagram" /> Projects
                </h2>
                <div className="section-divider" />

                <div className="projects-grid">
                    {projects.map((p) => (
                        <div key={p.title} className="proj-card reveal">
                            <div className="proj-body">
                                {/* Badge */}
                                <span className="proj-badge">
                                    {p.badge}
                                </span>

                                <h3 className="proj-title">{p.title}</h3>
                                <p className="proj-desc">{p.desc}</p>

                                <div className="proj-tags">
                                    {p.tags.map((t) => (
                                        <span key={t} className="proj-tag">{t}</span>
                                    ))}
                                </div>

                                <div className="proj-links">
                                    {p.code && p.code !== "#" && (
                                        <a href={p.code} className="proj-link" target="_blank" rel="noreferrer">
                                            <i className="fab fa-github" /> Code
                                        </a>
                                    )}
                                    {p.live && p.live !== "#" && (
                                        <a href={p.live} className="proj-link" target="_blank" rel="noreferrer">
                                            <i className="fas fa-external-link-alt" /> Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }
                @media (max-width: 768px) {
                    .projects-grid { grid-template-columns: 1fr; }
                }

                .proj-card {
                    background: #111111;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 1rem;
                    transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
                }
                .proj-card:hover {
                    border-color: rgba(255, 255, 255, 0.25);
                    transform: translateY(-4px);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
                }

                .proj-body {
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                }

                .proj-badge {
                    align-self: flex-start;
                    font-size: 0.65rem;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    padding: 0.22rem 0.65rem;
                    border-radius: 9999px;
                    text-transform: uppercase;
                    margin-bottom: 1rem;
                    background: rgba(255, 255, 255, 0.08);
                    color: #cccccc;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                }

                .proj-title {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 0.6rem;
                    line-height: 1.35;
                }

                .proj-desc {
                    font-size: 0.82rem;
                    color: #999999;
                    line-height: 1.7;
                    margin-bottom: 1rem;
                    flex: 1;
                }

                .proj-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.4rem;
                    margin-bottom: 1rem;
                }
                .proj-tag {
                    font-size: 0.7rem;
                    padding: 0.22rem 0.6rem;
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 9999px;
                    color: #cccccc;
                    transition: border-color 0.2s, background 0.2s;
                }
                .proj-card:hover .proj-tag {
                    border-color: rgba(255, 255, 255, 0.18);
                    background: rgba(255, 255, 255, 0.08);
                }

                .proj-links {
                    display: flex;
                    gap: 1rem;
                    padding-top: 0.75rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                }
                .proj-link {
                    font-size: 0.8rem;
                    color: #888888;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    font-weight: 500;
                    transition: color 0.2s;
                }
                .proj-link:hover {
                    color: #ffffff;
                }
            `}</style>
        </section>
    );
}
