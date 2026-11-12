import Image from "next/image";
import melodyPortrait from "./okoye_melody.png";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
} from "lucide-react";

const experience = [
  {
    role: "Medical Laboratory Technician",
    organisation: "Goodness Medical Centre",
    location: "Agege, Lagos, Nigeria",
    period: "October 2025 — Present",
    current: true,
    points: [
      "Collect patient samples safely, confirming patient identity, specimen labelling and preparation for analysis.",
      "Perform and support malaria parasite testing, genotype testing, blood grouping, compatibility testing and crossmatching, lipid profile, Widal testing and ESR.",
      "Receive, identify, label, process and handle clinical specimens while maintaining specimen integrity and laboratory safety.",
      "Operate and maintain laboratory equipment and work areas to support reliable, timely results.",
      "Record, verify and communicate results accurately while maintaining patient confidentiality.",
      "Apply infection prevention, biosafety and quality-control procedures; collaborate with clinical staff in patient care.",
    ],
  },
  {
    role: "Medical Laboratory Technician",
    organisation: "Harkkore Diagnostic Laboratory",
    location: "Delta, Nigeria",
    period: "March 2025 — July 2025",
    points: [
      "Collected, received and processed patient specimens using appropriate safety and quality-control procedures.",
      "Performed genotype analysis (electrophoresis), Widal testing and ESR.",
      "Prepared and maintained laboratory equipment, supporting proper functionality and routine use.",
      "Recorded, analysed and reported test results accurately and promptly.",
      "Maintained organised laboratory records and followed applicable laboratory standards and procedures.",
    ],
  },
  {
    role: "Medical Laboratory Technician",
    organisation: "St Charles Medics Diagnosis",
    location: "Anambra, Nigeria",
    period: "January 2023 — January 2025",
    points: [
      "Collected and handled patient specimens, ensuring accurate identification, labelling and processing.",
      "Performed routine laboratory investigations and prepared biological specimens for analysis.",
      "Operated and maintained diagnostic laboratory equipment to support accurate results.",
      "Assisted with laboratory stock and supplies management.",
      "Collaborated with colleagues to maintain smooth laboratory operations and timely service delivery.",
    ],
  },
];

const capabilities = [
  "Patient & specimen collection",
  "Specimen labelling, processing & handling",
  "Malaria parasite testing",
  "Genotype testing / electrophoresis",
  "Blood grouping & crossmatching",
  "Lipid profile testing",
  "Widal testing",
  "ESR testing",
  "Quality control & assurance",
  "Laboratory equipment operation & maintenance",
  "Infection prevention & biosafety",
  "Result documentation & interpretation",
  "Regulatory compliance",
  "Microsoft Word, Excel & PowerPoint",
  "Team collaboration & communication",
  "Time management & multitasking",
];

const investigations = [
  "Malaria parasite",
  "Genotype / electrophoresis",
  "Blood grouping",
  "Compatibility testing / crossmatching",
  "Lipid profile",
  "Widal",
  "ESR",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Melody Chinecherem home">
          <span className="wordmark-mark"><Image src={melodyPortrait} alt="" fill priority sizes="36px" /></span>
          <span className="wordmark-name">MELODY CHINECHEREM</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </nav>
        <a className="header-contact" href="#contact">
          Get in touch <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> MEDICAL LABORATORY TECHNICIAN</div>
          <h1>Careful work.<br /><em>Reliable results.</em></h1>
          <p className="hero-intro">
            I’m Okoye Melody Chinecherem, a Medical Laboratory Technician with
            hands-on experience in clinical specimen handling, routine diagnostic
            investigations and laboratory quality practices.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">Explore experience <ArrowRight size={16} /></a>
            <a className="text-link" href="mailto:melodynechy4319@gmail.com">Contact me <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Lagos, Nigeria</span>
            <span className="meta-divider" />
            <span><ShieldCheck size={15} /> Patient safety & specimen integrity</span>
          </div>
        </div>

        <div className="portrait-column">
          <div className="portrait-frame">
            <div className="portrait-topline"><span>PROFILE</span><span>01 / 01</span></div>
            <div className="portrait-image-wrap">
              <Image src={melodyPortrait} alt="Okoye Melody Chinecherem, Medical Laboratory Technician" fill priority sizes="(max-width: 680px) 90vw, 390px" className="portrait-image" />
            </div>
            <div className="portrait-caption">
              <span>OKOYE MELODY CHINECHEREM</span>
              <span>MEDICAL LABORATORY TECHNICIAN</span>
            </div>
          </div>
          <div className="portrait-note"><span className="note-line" /> PROFESSIONAL PROFILE</div>
        </div>
        <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-band" id="about">
        <div className="section-shell intro-grid">
          <div>
            <p className="eyebrow eyebrow-light">01 — PROFESSIONAL PROFILE</p>
            <h2>Precision is part<br />of patient care.</h2>
          </div>
          <div className="intro-text">
            <p>
              Dedicated to accurate results, patient safety, proper specimen
              integrity and timely laboratory service delivery. My work spans
              the patient-facing process of sample collection through specimen
              preparation, routine testing, documentation and quality control.
            </p>
            <p>
              I value disciplined laboratory practice, clear communication and
              careful handling at every stage of an investigation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell expertise-section" id="expertise">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 — AREAS OF PRACTICE</p>
            <h2>Laboratory expertise</h2>
          </div>
          <p className="section-aside">Practical capabilities developed through clinical and diagnostic laboratory experience.</p>
        </div>
        <div className="expertise-layout">
          <div className="expertise-feature">
            <div className="feature-icon"><Microscope size={23} strokeWidth={1.5} /></div>
            <span className="feature-index">CORE PRACTICE</span>
            <h3>From specimen<br />to documented result.</h3>
            <p>Consistent attention to identification, handling, testing, equipment care and result records.</p>
            <div className="feature-rule" />
            <span className="feature-foot">LABORATORY WORKFLOW</span>
          </div>
          <div className="investigations-panel">
            <div className="panel-heading"><FlaskConical size={18} /><span>DIAGNOSTIC INVESTIGATIONS</span></div>
            <div className="investigation-list">
              {investigations.map((item, index) => (
                <div className="investigation-item" key={item}>
                  <span className="investigation-number">0{index + 1}</span>
                  <span>{item}</span>
                  <Check size={15} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills-block">
          <div className="skills-title"><ClipboardList size={18} /><h3>Technical & professional skills</h3></div>
          <div className="skills-grid">
            {capabilities.map((skill) => <span className="skill-item" key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-shell">
          <div className="section-heading experience-heading">
            <div>
              <p className="eyebrow eyebrow-light">03 — CAREER HISTORY</p>
              <h2>Professional experience</h2>
            </div>
            <p className="section-aside section-aside-light">Hands-on roles across medical centres and diagnostic laboratories.</p>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <article className="timeline-entry" key={job.organisation}>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-content">
                  <div className="job-topline">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="organisation">{job.organisation}</p>
                    </div>
                    <div className="job-period">
                      {job.current && <span className="current-label">CURRENT ROLE</span>}
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <p className="job-location"><MapPin size={14} /> {job.location}</p>
                  <ul className="job-points">
                    {job.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell education-section" id="education">
        <div className="education-icon"><GraduationCap size={25} strokeWidth={1.5} /></div>
        <div className="education-copy">
          <p className="eyebrow">04 — EDUCATION</p>
          <h2>National Diploma (ND)</h2>
          <p className="education-course">Medical Laboratory Technician</p>
          <p className="education-school">College of Health, Ezzangbo</p>
        </div>
        <div className="education-side">
          <span>ACADEMIC QUALIFICATION</span>
          <span className="education-line" />
          <BriefcaseBusiness size={20} />
        </div>
      </section>

      <section className="details-band">
        <div className="section-shell details-grid">
          <div>
            <p className="eyebrow eyebrow-light">ADDITIONAL INFORMATION</p>
            <h2>Clear communication.<br />Responsible practice.</h2>
          </div>
          <div className="detail-column">
            <span className="detail-label">LANGUAGES</span>
            <div className="language-row"><strong>English</strong><span>Full Professional Proficiency</span></div>
            <div className="language-row"><strong>Igbo</strong><span>Native or Bilingual Proficiency</span></div>
          </div>
          <div className="detail-column">
            <span className="detail-label">LABORATORY TECHNIQUES</span>
            <p>Patient/sample collection · Specimen processing · Electrophoresis for genotype testing · Widal testing · ESR testing · Routine laboratory equipment handling</p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="section-shell">
          <div className="footer-top">
            <div>
              <p className="eyebrow">05 — CONTACT</p>
              <h2>Let’s connect.</h2>
              <p className="footer-intro">For professional enquiries and opportunities, reach out directly.</p>
            </div>
            <a className="footer-cta" href="mailto:melodynechy4319@gmail.com">Send an email <ArrowUpRight size={18} /></a>
          </div>
          <div className="contact-details">
            <a href="mailto:melodynechy4319@gmail.com"><Mail size={17} /> melodynechy4319@gmail.com</a>
            <a href="tel:+2347071420728"><Phone size={17} /> +234 707 142 0728</a>
            <span><MapPin size={17} /> Lagos, Nigeria</span>
          </div>
          <div className="footer-bottom">
            <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark"><Image src={melodyPortrait} alt="" fill sizes="32px" /></span><span className="wordmark-name">MELODY CHINECHEREM</span></a>
            <span>© {new Date().getFullYear()} Okoye Melody Chinecherem</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
