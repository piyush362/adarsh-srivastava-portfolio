import { profileData } from '../data/profile';
import './Education.css';

export const Education = () => {
    return (
        <section id="education" className="education section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">
                        The academic foundation that shaped my creative career
                    </p>
                </div>

                <div className="education__timeline timeline">
                    {profileData.education.map((edu) => (
                        <div key={edu.id} className="timeline-item glass-card">
                            <span className="timeline-item__period">{edu.period}</span>
                            <h3 className="timeline-item__title">{edu.degree}</h3>
                            <p className="timeline-item__subtitle">{edu.institution}</p>
                            <p className="timeline-item__description">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
