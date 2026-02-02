import { profileData } from '../data/profile';
import './Experience.css';

export const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">
                        My professional journey in the creative industry
                    </p>
                </div>

                <div className="experience__timeline timeline">
                    {profileData.experience.map((exp) => (
                        <div key={exp.id} className="timeline-item glass-card">
                            <span className="timeline-item__period">{exp.period}</span>
                            <h3 className="timeline-item__title">{exp.title}</h3>
                            <p className="timeline-item__subtitle">
                                {exp.company}
                                {exp.location && ` • ${exp.location}`}
                            </p>
                            <p className="timeline-item__description">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
