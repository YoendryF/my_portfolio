"use client";

import Image from "next/image";
import "../styles/globals.css";
import { useState } from "react";

type Project = {
  title: string;
  subtitle: string;
  image: string;
  desc: string;
  link?: string;
  image2?: string;
  fit?: "contain" | "cover";
};


function ProjectCard({ project } : { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-card dropdown-card">
      <img
      src={project.image}
      alt={project.title}
      className={
        project.title === "HealthCarpenter Primary Care Notification System" || project.title === "ShadeSmith" || project.title === "Gashapon Robot"
          ? "img-contain img-zoomout"
          : project.fit === "contain"
          ? "img-contain"
          : "img-cover"
      }
    />


      <div className="project-header" onClick={() => setOpen(!open)}>
        <div className="project-text">
          <h4 className="project-title">{project.title}</h4>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        {/* Dropdown Arrow */}
        <span className={`arrow ${open ? "open" : ""}`}>▼</span>
      </div>

      {/* Hidden Panel */}
      <div className={`dropdown-content ${open ? "show" : ""}`}>
        {project.image2 && (
          <div
            className="sprite-anim"
            style={{
              width: "64px",
              height: "64px",
              backgroundImage: `url(${project.image2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 0",
              animation: "goblinWalk 0.8s steps(5) infinite",
              margin: "1rem auto",
            }}
          />
        )}

        <p>{project.desc}</p>

        {project.link && (
          <a
            href={project.link}
            className="btn green"
            style={{ display: "inline-block", marginTop: "1rem" }}
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  //Projects List
  const projects: Project[] = [
      {
        title: "HealthCarpenter",
        subtitle: "Primary Care Notification System",
        image: "/HealthCarpenterLogo.png",
        fit: "contain",
        desc: "IN DEVELOPMENT: The HealthCarpenter Primary Care Notification System is a role-based communication platform designed to streamline patient outreach and modernize clinical workflow. Built with a FastAPI backend, PostgreSQL, and SQLAlchemy ORM, the system enables secure creation, management, and delivery of automated patient notifications—such as appointment reminders, follow-up alerts, and provider-specific updates. A React/Next.js frontend provides a clean and intuitive dashboard for administrators, providers, and receptionists, each with tailored access permissions through a robust RBAC model. The system supports HIPAA-aligned data handling, JWT-based authentication, and Dockerized deployment for reliable development and scaling. Once complete, it will serve as a foundational tool for improving care continuity, reducing no-show rates, and giving clinics a more efficient digital communication pipeline.",
      },
      {
        title: "StrongSight",
        subtitle: "AI-Powered Fitness Form Coach",
        image: "/StrongSightLogo.png",
        fit: "contain",
        desc: "IN DEVELOPMENT: StrongSight is an intelligent fitness companion designed to enhance how users train by combining computer vision, real-time feedback, and AI-powered form analysis. Built with Flutter for cross-platform performance and TensorFlow Lite for on-device inference, StrongSight uses pose estimation models to detect and evaluate user movements during exercises such as squats, push-ups, and bicep curls. The app provides instant posture correction cues, rep tracking, and visual insights into performance, helping users improve consistency and reduce injury risk. Through a clean UI and smooth animation system, it delivers a gym-ready experience while showcasing responsive motion design and embedded Lottie-based feedback elements.",
      },
      {
        title: "ShadeSmith",
        subtitle: "AI-Powered Paint Mixing Recipe App",
        image: "/ShadeSmithLogo.png",
        fit: "contain",
        desc: "An AI-powered mobile app that scans real-world colors and generates paint mixing recipes from a user’s inventory, built with Flutter, Python, and Google Cloud in just 36 hours at ShellHacks",
        link: "https://devpost.com/software/shadesmith"
      },
      {
        title: "ChristellePhotography",
        subtitle: "Photography Portfolio Website",
        image: "/ChristellePhoto.png",
        fit: "contain",
        desc: "A portfolio website for a photographer, featuring a responsive gallery.",
        link: "https://Christellephotography.com"
      },
      {
        title: "Kingdom of Greed",
        subtitle: "2D Unity Dungeon Crawler Game",
        image: "/TitleScreen.png",
        image2: "/KOGAnimation.png",
        fit: "cover",
        desc: "A fantasy-themed dungeon crawler built in Unity featuring procedurally generated dungeons, original character sprites and animations, and branching gameplay.",
        link: "/projects/KingdomOfGreed"
      },
      {
        title: "Fix My City",
        subtitle: "Local Infrastructure Reporting App",
        image: "/FixMyCityDash.png",
        fit: "cover",
        desc: "A full-stack MERN app that lets users report and search for local infrastructure issues with auto generated maps and image upload functionality.",
        link: "/FixMyCity"
      },
      {
        title: "Gashapon Robot",
        subtitle: "Interactive Arduino-Based Vending Machine",
        image: "/Gashapon.png",
        fit: "contain",
        desc: "An Arduino-based vending machine that dispenses random capsules, displays different facial expressions, and calls out for user engagement at peak interaction times.",
        link: "/projects/Gashapon"
      },
      {
        title: "Future Fund",
        subtitle: "Compound Interest Education Web App",
        image: "/FutureFundImage.png",
        fit: "cover",
        desc: "An interactive website built at Florida’s largest hackathon that uses a chatbot and investment simulator to teach users the power of compound interest.",
        link: "/Hackathon/index.html"
      },
    ];
  return (
    <div id="top" className="portfolio-layout">
      {/* Main content wrapper */}
      <main className="main-content">
        <section className="intro-card">
          <h1>Yoendry Ferro Santizo</h1>
          <h2>Software Engineer</h2>
          <p>
          I specialize in building full-stack web apps with clean code, performance,
            and great UX. Check out my <a href="#projects">projects</a> or view my{" "}
            <a href="#resume">resume</a>.
          </p>
          <div className="actions">
            <a className="btn green" href="#projects">View Portfolio</a>
          </div>
        </section>
        <section id="resume" className="intro-card">
          <h3>Resume</h3>
          <p>You can view or download my resume for an overview of my experience, skills, and projects.</p>
          <div className="actions" style={{ justifyContent: "center", marginTop: "1rem" }}>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn dark">
              View Resume
            </a>
            <a href="/Resume.pdf" download className="btn green">
              Download Resume
            </a>
          </div>
        </section>

        <section id="Education" className="intro-card">
  <h3>Education</h3>
  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
    
    {/* School Logo */}
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
    <div className="education-row">
  <img src="/UCFLogo.png" alt="UCF Logo" className="education-logo" />
  <div className="education-details">
    <h4>University of Central Florida</h4>
    <p>Graduation: May 2026</p>
    <p>BS: Computer Science</p>
    <p>Minor: Intelligent Robotic Systems</p>
  </div>
</div>

    </div>

    {/* Relevant Courses */}
    <div className="course-list">
      <h4>Relevant Courses</h4>
      <div className="courses-grid">
  {[
    "Data Structures and Algorithms",
    "Operating Systems",
    "AI for Game Programming",
    "Computer Architecture",
    "Machine Learning",
    "Programming languages",
    "Object Oriented Software Development",
    "Web Based Information Technology",
    "Introduction to Robotics"
  ].map((course, index) => (
    <span key={index} className="course-tag">{course}</span>
  ))}
  </div>
</div>



  </div>
</section>

<section id="Skills" className="intro-card">
  <h3>Skills</h3>
  <div className="skills-grid">
    {[
      //Languages
      "Python",
      "C",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "Haskell",
      "HTML",
      "CSS",
      "Dart",

      //Databases
      "MongoDB",
      "FireBase",
      "PostgreSQL",

      //Backend Technologies
      "RESTful API",
      "SQLAlchemy ORM",
      "Pydantic",

      //Frameworks
      "Linux/Unix",
      "React.js",
      "Next.js",
      "Node.js",
      "Flutter",
      "Unity",
    

      //Tools and DevOps
      "Git & GitHub",
      "Docker",
      "Docker Compose",
      "Axios",
      "RabbitMQ",
      "Figma",
      "Arduino",
      "Aseprite",
      "JWT Authentication",
      "Role-Based Access Control(RBAC)",
    ].map((skill, idx) => (
      <span key={idx} className="skill-chip">
        {skill}
      </span>
    ))}
  </div>
</section>

<section id="Experiences/Extracurriculars" className="intro-card section-card">
  <h3>Experiences & Extracurriculars</h3>
  <div className="experience-grid">
    {[
      {
        title: "SHPE 2025 Conference",
        role: "Participant",
        image: "/SHPEConference2025.png",
        desc: "Participated in technical workshops, professional panels, and networking events. Engaged with recruiters and engineers from top technology and finance companies, gaining perspective on emerging industry trends and best practices in career development. Strengthened connections within the Hispanic and STEM communities while continuing to grow professionally through mentorship and leadership opportunities.",
        link: "https://www.shpe.org/events/national-convention"
      },
      {
        title: "Shellhacks 2025",
        role: "Competitor",
        image: "/ShellHacksImage.png",
        desc: "Developed ShadeSmith, an AI-powered color recipe app, over the course of 36 hours with a team of fellow students. Leveraged Flutter, Dart, Python, Firebase, and Google Cloud to create a functional prototype that scans real-world colors and generates paint mixing recipes from a user’s inventory. Gained experience in cloud-based AI services, backend integration, and fast-paced collaboration under hackathon conditions.",
        link: "https://shellhacks.net/"
      },
      {
        title: "SHPE Pro Dev Committee",
        role: "Active Member",
        image: "/ProDev.png",
        desc: "Participated in the Professional Development Committee, supporting career development by critiquing resumes, interview responses, and elevator pitches."
      },
      {
        title: "SHPE Tech Committee",
        role: "Active Member",
        image: "/TechCom.png",
        desc: "Contributed to the Tech Committee, providing guidance and support in various technical projects."
      },
      {
        title: "MentorSHPE",
        role: "Mentor",
        image: "/MentorSHPE.png",
        desc: "Served as a Mentor in the MentorSHPE program, providing guidance and support to five undergraduate students in computer science, focusing on academic achievement and career development."
      },
      {
        title: "Bloomberg Tech Lab",
        role: "Participant",
        image: "/TechLab.jpg",
        desc: "One of 40 students selected to collaborate with Bloomberg engineers in a small group setting to build an application using RabbitMQ and Docker."
      },
      {
        title: "SHPE 2024 Conference",
        role: "Participant",
        image: "/Region7.JPG",
        desc: "Engaged in professional development through business networking events, hospitality suites, and the national career fair. Gained insight into industry trends, connected with recruiters from leading tech companies, and expanded my network within the STEM and Hispanic engineering communities.",
        link: "https://www.shpe.org/events/national-convention"
      },
      {
        title: "Shellhacks 2024",
        role: "Competitor",
        image: "/ShellHacksImage.png",
        desc: "Collaborated with my SHPE mentees to develop Future Fund, a personal finance web app. Attended presentations and tech talks from leading companies on industry tools, technologies, and success strategies. The weekend-long hackathon strengthened my skills in time management, leadership, and cross-functional teamwork.",
        link: "https://shellhacks.net/"
      },
    
    ].map((exp, idx) => (
      <div className="experience-card section-card" key={idx}>
        <img src={exp.image} alt={exp.title} />
        <div>
          <h4>{exp.title}</h4>
          <p><strong>{exp.role}</strong></p>
          <p>{exp.desc}</p>
          {exp.link && (
            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="btn green" style={{ marginTop: "0.5rem", display: "inline-block" }}>
              Visit Site
            </a>
          )}
        </div>
      </div>
    ))}
    
  </div>
</section>



<section id="contact" className="contact-card section-card">
  <h3>Contact Me</h3>
  <p>Want to reach out? Feel free to copy my email or follow me on LinkedIn:</p>
  <div className="contact-links">
    <button
      className="btn green icon-btn"
      onClick={() => {
        navigator.clipboard.writeText("yoendryferros@gmail.com");
        alert("Email copied to clipboard!");
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ marginRight: "8px" }}
      >
        <path d="M12 13.5l8-6v11h-16v-11l8 6zm0-10.5l10 7.5-10 7.5-10-7.5 10-7.5z" />
      </svg>
      Copy Email
    </button>

    <a
      href="https://linkedin.com/in/yoendryferro"
      target="_blank"
      rel="noopener noreferrer"
      className="btn dark icon-btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ marginRight: "8px" }}
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.79-1.75-1.766 0-.977.784-1.767 1.75-1.767s1.75.79 1.75 1.767c0 .976-.784 1.766-1.75 1.766zm13.5 10.271h-3v-4.604c0-1.101-.021-2.516-1.536-2.516-1.537 0-1.773 1.201-1.773 2.438v4.682h-3v-9h2.884v1.228h.041c.402-.761 1.38-1.562 2.841-1.562 3.039 0 3.6 2.001 3.6 4.604v4.73z" />
      </svg>
      LinkedIn
    </a>
  </div>
</section>



<section id="projects" className="projects-section">
  <h3>Projects</h3>
  <div className="projects-grid">
    {projects.map((project, idx) => (
      <ProjectCard key={idx} project={project} />
    ))}
  </div>
</section>



      


<section id="bio" className="bio-section">
  <h3>About Me</h3>
  <div className="bio-grid">
    <div className="bio-text">
      <p>I was born in Cuba and moved to the Florida Keys when I was four years old. I grew up in Key Largo, where the vibrant local ecosystem sparked my deep appreciation for nature and animals. From a young age, I’ve also had a strong interest in art, whether it was drawing, painting, or even clay sculpting during high school.
      </p>
      <p>In my sophomore year, I joined the weightlifting team, which introduced me to fitness and inspired a lasting passion for health and strength. I’m currently attending the University of Central Florida. I originally started as an electrical engineering major, but after discovering computer science and the endless creative ways it allows you to solve problems, I made the switch.
      </p>
      <p>I'm also pursuing a minor in robotics to stay connected with my engineering interests and to explore the synergy between hardware and software. I'm excited about the future and look forward to using both the experiences I’ve gained and the ones to come to grow personally and professionally. 
      </p>
    </div>
    <div className="bio-photos">
      <img src="/Iguana.jpg" alt="picture" />
      <p>My favorite painting i've made.</p>
      <img src="/KneeBoarding.jpg" alt="picture" />
      <p>Knee boarding in Key Largo</p>
      <img src="/Grad.JPG" alt="picture" />
      <p>Im a first generation college student!</p>
    </div>
  </div>
</section>



      </main>
    </div>
  );
}
