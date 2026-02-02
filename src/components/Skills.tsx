import { useEffect, useRef, useState } from 'react';
import { profileData } from '../data/profile';
import './Skills.css';

export const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-subtitle">
                        Mastering the tools that bring creative visions to life
                    </p>
                </div>

                <div className="skills__content">
                    <div className="skills__group glass-card">
                        <div className="skills__group-header">
                            <div className="skills__group-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3 className="skills__group-title">Hard Skills</h3>
                        </div>
                        <div className="skills__list">
                            {profileData.hardSkills.map((skill, index) => (
                                <div key={skill.name} className="skill-bar">
                                    <div className="skill-bar__header">
                                        <span className="skill-bar__name">{skill.name}</span>
                                        <span className="skill-bar__percentage">{skill.percentage}%</span>
                                    </div>
                                    <div className="skill-bar__track">
                                        <div
                                            className="skill-bar__fill"
                                            style={{
                                                width: isVisible ? `${skill.percentage}%` : '0%',
                                                transitionDelay: `${index * 150}ms`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills__group glass-card">
                        <div className="skills__group-header">
                            <div className="skills__group-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className="skills__group-title">Soft Skills</h3>
                        </div>
                        <div className="skills__list">
                            {profileData.softSkills.map((skill, index) => (
                                <div key={skill.name} className="skill-bar">
                                    <div className="skill-bar__header">
                                        <span className="skill-bar__name">{skill.name}</span>
                                        <span className="skill-bar__percentage">{skill.percentage}%</span>
                                    </div>
                                    <div className="skill-bar__track">
                                        <div
                                            className="skill-bar__fill"
                                            style={{
                                                width: isVisible ? `${skill.percentage}%` : '0%',
                                                transitionDelay: `${index * 150}ms`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="skills__tools">
                    <h3 className="skills__tools-title">Tools I Work With</h3>
                    <div className="skills__tools-grid">
                        {[
                            { name: 'Photoshop', abbr: 'Ps' },
                            { name: 'Illustrator', abbr: 'Ai' },
                            { name: 'Premiere Pro', abbr: 'Pr' },
                            { name: 'After Effects', abbr: 'Ae' },
                            { name: 'CorelDRAW', abbr: 'Cd' },
                        ].map((tool) => (
                            <div key={tool.name} className="skills__tool">
                                <span className="skills__tool-abbr">{tool.abbr}</span>
                                <span className="skills__tool-name">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
