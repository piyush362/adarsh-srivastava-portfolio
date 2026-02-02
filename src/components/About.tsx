import { profileData } from '../data/profile';
import './About.css';

export const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Get to know more about my journey and passion for design
                    </p>
                </div>

                <div className="about__content">
                    <div className="about__text glass-card">
                        <h3 className="about__heading">Who I Am</h3>
                        <p className="about__bio">{profileData.bio}</p>

                        <div className="about__highlights">
                            <div className="about__highlight">
                                <div className="about__highlight-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                        <path d="M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <div className="about__highlight-content">
                                    <h4>Creative Vision</h4>
                                    <p>Transforming ideas into impactful visual stories</p>
                                </div>
                            </div>

                            <div className="about__highlight">
                                <div className="about__highlight-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <div className="about__highlight-content">
                                    <h4>Team Leadership</h4>
                                    <p>Guiding and mentoring fellow designers</p>
                                </div>
                            </div>

                            <div className="about__highlight">
                                <div className="about__highlight-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                        <line x1="12" y1="22.08" x2="12" y2="12" />
                                    </svg>
                                </div>
                                <div className="about__highlight-content">
                                    <h4>AI-Enhanced Workflow</h4>
                                    <p>Leveraging modern tools for efficiency</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about__languages glass-card">
                        <h3 className="about__heading">Languages</h3>
                        <div className="about__language-list">
                            {profileData.languages.map((lang) => (
                                <div key={lang.name} className="skill-bar">
                                    <div className="skill-bar__header">
                                        <span className="skill-bar__name">{lang.name}</span>
                                        <span className="skill-bar__percentage">{lang.percentage}%</span>
                                    </div>
                                    <div className="skill-bar__track">
                                        <div
                                            className="skill-bar__fill"
                                            style={{ width: `${lang.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="about__award">
                            <div className="about__award-badge">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L9 9H2l6 5-2 7 6-4 6 4-2-7 6-5h-7l-3-7z" />
                                </svg>
                            </div>
                            <div className="about__award-content">
                                <span className="about__award-year">{profileData.awards[0].year}</span>
                                <h4 className="about__award-title">{profileData.awards[0].title}</h4>
                                <p className="about__award-org">{profileData.awards[0].organization}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
