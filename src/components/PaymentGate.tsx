import './PaymentGate.css';

export const PaymentGate = () => {
  const handlePayment = () => {
  const upiLink =
    'upi://pay?pa=piyushsagarofficial-1@oksbi&pn=Piyush%20Sagar&am=2999&cu=INR&tn=Payment';

  window.location.href = upiLink;
};

    return (
        <section className="payment-gate">
            <div className="payment-gate__background">
                <div className="payment-gate__orb payment-gate__orb--1"></div>
                <div className="payment-gate__orb payment-gate__orb--2"></div>
            </div>

            <div className="payment-gate__container">
                <div className="payment-gate__card">
                    <div className="payment-gate__icon">
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                            <line x1="1" y1="10" x2="23" y2="10" />
                        </svg>
                    </div>

                    <h1 className="payment-gate__title">
                        Unlock Full Portfolio
                    </h1>

                    <p className="payment-gate__subtitle">
                        This premium portfolio website is ready for deployment. Complete the payment to unlock all features and get the complete source code.
                    </p>

                    <div className="payment-gate__features">
                        <div className="payment-gate__feature">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>All 7 Sections (Hero, About, Skills, Experience, Education, Contact, Footer)</span>
                        </div>
                        <div className="payment-gate__feature">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Responsive Design for All Devices</span>
                        </div>
                        <div className="payment-gate__feature">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Modern Animations & Effects</span>
                        </div>
                        <div className="payment-gate__feature">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>SEO Optimized</span>
                        </div>
                        <div className="payment-gate__feature">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Full Source Code Access</span>
                        </div>
                    </div>

                    <div className="payment-gate__price">
                        <span className="payment-gate__currency">₹</span>
                        <span className="payment-gate__amount">2,999</span>
                        <span className="payment-gate__period">one-time</span>
                    </div>

                    <button className="payment-gate__button" onClick={handlePayment}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Pay Now & Unlock
                    </button>

                    <p className="payment-gate__contact">
                        Questions? Contact: <a href="mailto:adarshxsrivastav@gmail.com">piyushsagarofficial@gmail.com</a>
                    </p>
                </div>

                <div className="payment-gate__preview">
                    <h3>Preview Included</h3>
                    <div className="payment-gate__preview-list">
                        <div className="payment-gate__preview-item">
                            <span className="payment-gate__preview-dot"></span>
                            Hero Section with Animated Background
                        </div>
                        <div className="payment-gate__preview-item">
                            <span className="payment-gate__preview-dot"></span>
                            About Section with Skills & Award
                        </div>
                        <div className="payment-gate__preview-item">
                            <span className="payment-gate__preview-dot"></span>
                            Animated Skill Bars & Tools Grid
                        </div>
                        <div className="payment-gate__preview-item">
                            <span className="payment-gate__preview-dot"></span>
                            Experience & Education Timelines
                        </div>
                        <div className="payment-gate__preview-item">
                            <span className="payment-gate__preview-dot"></span>
                            Contact Cards & CTA
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
