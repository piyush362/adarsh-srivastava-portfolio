import { profileData } from '../data/profile';
import './Hero.css';

export const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToWork = () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <div className="hero__background">
                <div className="hero__gradient-orb hero__gradient-orb--1"></div>
                <div className="hero__gradient-orb hero__gradient-orb--2"></div>
                <div className="hero__grid"></div>
            </div>

            <div className="hero__container">
                <div className="hero__content">
                    <div className="hero__badge animate-fade-in-up">
                        <span className="hero__badge-dot"></span>
                        Available for Freelance Work
                    </div>

                    <h1 className="hero__title animate-fade-in-up delay-100">
                        Hi, I'm <span className="hero__title-accent">{profileData.name}</span>
                    </h1>

                    <p className="hero__subtitle animate-fade-in-up delay-200">
                        {profileData.title}
                    </p>

                    <p className="hero__tagline animate-fade-in-up delay-300">
                        {profileData.tagline}
                    </p>

                    <div className="hero__actions animate-fade-in-up delay-400">
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Get In Touch
                        </button>
                        <button className="btn btn-secondary" onClick={scrollToWork}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                            View My Work
                        </button>
                    </div>

                    <div className="hero__stats animate-fade-in-up delay-500">
                        <div className="hero__stat">
                            <span className="hero__stat-value">2+</span>
                            <span className="hero__stat-label">Years Experience</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">100+</span>
                            <span className="hero__stat-label">Projects Delivered</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">5+</span>
                            <span className="hero__stat-label">Design Tools</span>
                        </div>
                    </div>
                </div>

                <div className="hero__visual animate-fade-in delay-200">
                    <div className="hero__image-wrapper">
                        <div className="hero__image-glow"></div>
                        <div className="hero__image-border"></div>
                        <div className="hero__image-placeholder">
                            <span className="hero__image-initials">AS</span>
                        </div>
                    </div>

                    <div className="hero__floating-cards">
                        <div className="hero__floating-card hero__floating-card--1 animate-float">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>Photoshop</span>
                        </div>
                        <div className="hero__floating-card hero__floating-card--2 animate-float delay-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                <polyline points="2 17 12 22 22 17" />
                                <polyline points="2 12 12 17 22 12" />
                            </svg>
                            <span>Illustrator</span>
                        </div>
                        <div className="hero__floating-card hero__floating-card--3 animate-float delay-400">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="23 7 16 12 23 17 23 7" />
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                            </svg>
                            <span>Premiere Pro</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};
