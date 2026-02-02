import { profileData } from '../data/profile';
import './Contact.css';

export const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a project in mind? Let's create something amazing together
                    </p>
                </div>

                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__card glass-card">
                            <div className="contact__card-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div className="contact__card-content">
                                <h4>Email</h4>
                                <a href={`mailto:${profileData.contact.email}`}>
                                    {profileData.contact.email}
                                </a>
                            </div>
                        </div>

                        <div className="contact__card glass-card">
                            <div className="contact__card-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div className="contact__card-content">
                                <h4>Phone</h4>
                                <a href={`tel:${profileData.contact.phone.replace(/-/g, '')}`}>
                                    {profileData.contact.phone}
                                </a>
                            </div>
                        </div>

                        <div className="contact__card glass-card">
                            <div className="contact__card-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div className="contact__card-content">
                                <h4>Location</h4>
                                <p>{profileData.contact.address}</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact__cta glass-card">
                        <h3>Let's Work Together</h3>
                        <p>
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you need a stunning brand identity, engaging social media content,
                            or captivating video content, I'd love to help bring your vision to life.
                        </p>
                        <a
                            href={`mailto:${profileData.contact.email}?subject=Project Inquiry`}
                            className="btn btn-primary"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Send Me a Message
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
