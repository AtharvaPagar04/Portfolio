"use client";
import { useEffect, useState } from "react";
import { personal } from "@/lib/data";

const roles = personal.tagline;

export default function Hero() {
    const [text, setText] = useState("");
    const [roleIdx, setRoleIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const role = roles[roleIdx];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && charIdx < role.length) {
            timeout = setTimeout(() => {
                setText(role.slice(0, charIdx + 1));
                setCharIdx((c) => c + 1);
            }, 80);
        } else if (!deleting && charIdx === role.length) {
            timeout = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && charIdx > 0) {
            timeout = setTimeout(() => {
                setText(role.slice(0, charIdx - 1));
                setCharIdx((c) => c - 1);
            }, 40);
        } else if (deleting && charIdx === 0) {
            setDeleting(false);
            setRoleIdx((r) => (r + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [charIdx, deleting, roleIdx]);

    return (
        <section
            id="home"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 2rem",
                position: "relative",
                zIndex: 1,
                maxWidth: "960px",
                margin: "0 auto",
                textAlign: "center",
            }}
        >
            <p style={{ color: "var(--text-muted)", marginBottom: "1rem", fontSize: "1.15rem", letterSpacing: "0.05em" }}>
                Hi there! 👋 I&apos;m
            </p>
            <h1
                style={{
                    fontSize: "clamp(3rem,7vw,5.5rem)",
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1.1,
                    marginBottom: "1rem",
                }}
            >
                {personal.name}
            </h1>
            <div style={{ fontSize: "clamp(1.3rem,3vw,2rem)", marginBottom: "1.75rem", minHeight: "2.5rem" }}>
                <span style={{ color: "var(--text-muted)" }}>I&apos;m a </span>
                <span style={{ color: "var(--purple)", fontWeight: 700 }}>{text}</span>
                <span className="cursor" />
            </div>
            <p
                style={{
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                    maxWidth: "640px",
                    marginBottom: "2.5rem",
                    fontSize: "1.1rem",
                }}
            >
                Passionate about building scalable, beautiful, and intelligent web applications. I love turning ideas into real-world products with clean code and great user experience.
            </p>
            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2.5rem" }}>
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
                {Object.entries(personal.socials).map(([key, url]) => (
                    <a key={key} href={url} target="_blank" rel="noreferrer" className="social-icon" aria-label={key}>
                        <i className={`fab fa-${key === "github" ? "github" : "linkedin-in"}`} />
                    </a>
                ))}
            </div>
        </section>
    );
}
