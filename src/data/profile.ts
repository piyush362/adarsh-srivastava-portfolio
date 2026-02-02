import type { ProfileData } from '../types';

export const profileData: ProfileData = {
    name: "Adarsh Srivastav",
    title: "Graphic Designer | Video Editor",
    tagline: "Transforming Ideas into Impactful Visual Stories",
    bio: "I have 2 years of deep experience in social creatives, brand identity systems, digital marketing visuals, and storytelling-driven design - with a strong focus on audience behavior, color hierarchy, and modern design trends to craft clear, high-impact visuals. Along with advanced knowledge of AI tools, my creative vision helps me transform ideas and dreams into visible, meaningful, and polished designs that add value, strengthen brand presence, and leave a lasting impression.",

    contact: {
        email: "adarshxsrivastav@gmail.com",
        phone: "+91-7270871614",
        address: "B-33 Ravindra Palli Near Purana Post Office, Lucknow, Uttar Pradesh"
    },

    languages: [
        { name: "Hindi", percentage: 90 },
        { name: "English", percentage: 75 }
    ],

    hardSkills: [
        { name: "Adobe Photoshop", percentage: 90 },
        { name: "Adobe Illustrator", percentage: 70 },
        { name: "Corel Draw", percentage: 70 },
        { name: "Adobe Premiere Pro", percentage: 80 },
        { name: "Adobe After Effects", percentage: 70 }
    ],

    softSkills: [
        { name: "Teamwork", percentage: 90 },
        { name: "Leadership", percentage: 70 },
        { name: "Problem Solving", percentage: 50 }
    ],

    experience: [
        {
            id: "exp-1",
            period: "2025 - Present",
            title: "Senior Graphic Designer | Team Lead",
            company: "Centurion Defence Academy",
            description: "As a Senior Graphic Designer and Team Leader, I manage key creative projects including metro pillar graphics, hoardings, standees, books, brochures, and social media designs, while guiding my team with clarity and collaboration. I have enhanced my own workflow and supported designers under me in improving their skills, confidence, and overall design quality."
        },
        {
            id: "exp-2",
            period: "2024 - 2025",
            title: "Junior Graphic Designer",
            company: "Centurion Defence Academy",
            location: "Lucknow",
            description: "In my 11 months as a Junior Graphic Designer, I worked on thumbnails, social media posts, product creatives, website banners, and a few motion graphics projects. During this time, I learned a lot on the job, improving my speed, sharpening my design sense, and understanding how to deliver exactly what the team needed."
        }
    ],

    education: [
        {
            id: "edu-1",
            period: "2023 - 2024",
            degree: "Graphic Designing and Multimedia",
            institution: "Wisdom College of Creativity & Design",
            description: "Completed a Diploma in Graphic Designing and Multimedia, where I built a strong foundation in visual design principles and gained practical experience in basic video editing. This course helped me understand the core tools, techniques, and creative approach that shaped my early journey as a designer."
        },
        {
            id: "edu-2",
            period: "2020 - 2023",
            degree: "B.A Honours (Arts)",
            institution: "B.M Memorial College",
            description: "Completed a 3-year BA Honours (Arts) degree, where I connected deeply with creativity, explored visual expression in my own way, and built the artistic confidence that now shapes how I think and work as a designer."
        },
        {
            id: "edu-3",
            period: "2018 - 2020",
            degree: "Intermediate",
            institution: "KPSSPP Inter College",
            description: "Completed a 2-Year Intermediate course in the PCB stream, while building a genuine interest in Arts - something that naturally shaped my creativity and supported my growth as a designer."
        }
    ],

    awards: [
        {
            id: "award-1",
            year: "2019",
            title: "MR.UP-UK 2K19",
            organization: "V.V.N Enterprises, Kanpur"
        }
    ]
};
