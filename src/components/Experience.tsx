"use client";
import { experiences } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="section" style={{ position: "relative", zIndex: 1 }}>
            <div className="container">
                <div>
                    <h2 className="section-title">
                        <i className="fas fa-briefcase" /> Work Experience
                    </h2>
                    <div className="section-divider" />
                </div>

                <div className="timeline">
                    {experiences.map((exp, i) => (
                        <div key={i} className="timeline-item reveal">
                            <div className="timeline-date">
                                <span><i className="fas fa-calendar-alt" style={{ color: "var(--purple-light)", marginRight: "0.3rem" }} />{exp.period}</span>
                                <span className="timeline-location">
                                    <i className="fas fa-map-marker-alt" style={{ marginRight: "0.3rem" }} />{exp.location}
                                </span>
                            </div>
                            <div
                                style={{
                                    background: "var(--card)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "1rem",
                                    padding: "1.5rem",
                                }}
                                className="timeline-content"
                            >
                                <h3>
                                    {exp.role} <span>at</span>{" "}
                                    <span className={`company-name ${exp.companyClass}`}>{exp.company}</span>
                                </h3>
                                <ul>
                                    {exp.points.map((p, j) => (
                                        <li key={j}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
