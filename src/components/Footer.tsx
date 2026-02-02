import './Footer.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                            <span className="footer__logo-text">AS</span>
                            <span className="footer__logo-dot"></span>
                        </a>
                        <p className="footer__tagline">
                            Crafting visual stories that inspire and engage
                        </p>
                    </div>

                    <div className="footer__links">
                        <h4>Quick Links</h4>
                        <nav>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#experience">Experience</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>

                    <div className="footer__social">
                        <h4>Connect</h4>
                        <div className="footer__social-links">
                            <a
                                href="mailto:adarshxsrivastav@gmail.com"
                                aria-label="Email"
                                className="footer__social-link"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                            <a
                                href="tel:+917270871614"
                                aria-label="Phone"
                                className="footer__social-link"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {currentYear} Adarsh Srivastav. All rights reserved.</p>
                    <button className="footer__back-to-top" onClick={scrollToTop} aria-label="Back to top">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="18 15 12 9 6 15" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};
