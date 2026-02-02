import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container">
                <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
                    <span className="navbar__logo-text">AS</span>
                    <span className="navbar__logo-dot"></span>
                </a>

                <div className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <button
                    className={`navbar__toggle ${isMobileMenuOpen ? 'navbar__toggle--active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};
