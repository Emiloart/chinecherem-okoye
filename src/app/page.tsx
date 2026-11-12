import Image from "next/image";
import melodyPortrait from "./okoye_melody.png";
import ContentCarousel from "./content-carousel";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const experience = [
  {
    role: "Medical Laboratory Technician",
    organisation: "Goodness Medical Centre",
    location: "Agege, Lagos, Nigeria",
    period: "October 2025 to Present",
    current: true,
    points: [
      "Collect patient samples, confirm patient identity and prepare specimens for analysis.",
      "Perform or support malaria parasite, genotype, blood grouping, compatibility, lipid profile, Widal and ESR investigations.",
      "Receive, identify, label, process and handle clinical specimens while maintaining specimen integrity.",
      "Operate and maintain laboratory equipment, document results and apply biosafety and quality-control procedures.",
    ],
  },
  {
    role: "Medical Laboratory Technician",
    organisation: "Harkkore Diagnostic Laboratory",
    location: "Delta, Nigeria",
    period: "March 2025 to July 2025",
    points: [
      "Collected, received and processed patient specimens using safety and quality-control procedures.",
      "Performed genotype analysis by electrophoresis, Widal testing and ESR.",
      "Maintained laboratory equipment, records and accurate result reporting.",
    ],
  },
  {
    role: "Medical Laboratory Technician",
    organisation: "St Charles Medics Diagnosis",
    location: "Anambra, Nigeria",
    period: "January 2023 to January 2025",
    points: [
      "Collected, identified, labelled and processed patient specimens.",
      "Performed routine investigations and prepared biological specimens for analysis.",
      "Operated diagnostic equipment and assisted with laboratory stock and supplies.",
    ],
  },
];

const investigations = [
  "Malaria parasite testing",
  "Genotype testing by electrophoresis",
  "Blood grouping",
  "Compatibility testing and crossmatching",
  "Lipid profile",
  "Widal testing",
  "Erythrocyte sedimentation rate (ESR)",
];

const skills = [
  "Patient and specimen collection",
  "Specimen labelling and processing",
  "Quality control and assurance",
  "Laboratory equipment operation",
  "Infection prevention and biosafety",
  "Result documentation and interpretation",
  "Microsoft Word, Excel and PowerPoint",
  "Team collaboration and communication",
  "Time management and multitasking",
  "Regulatory compliance",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Melody Chinecherem home">
          <span className="wordmark-mark">
            <Image src={melodyPortrait} alt="" fill priority sizes="38px" />
          </span>
          <span className="wordmark-name">MELODY CHINECHEREM</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </nav>
        <a className="header-contact" href="#contact">Contact <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="hero-role">Medical Laboratory Technician</p>
          <h1>Careful work.<br /><em>Reliable results.</em></h1>
          <p className="hero-intro">
            I’m Okoye Melody Chinecherem. I work across clinical specimen handling,
            routine diagnostic investigations and laboratory quality practices,
            with a focus on accuracy, patient safety and dependable service.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">View experience <ArrowRight size={16} /></a>
            <a className="text-link" href="mailto:melodynechy4319@gmail.com">Contact me <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Lagos, Nigeria</span>
            <span>Patient safety and specimen integrity</span>
          </div>
        </div>

        <div className="portrait-column">
          <div className="portrait-frame">
            <div className="portrait-image-wrap">
              <Image src={melodyPortrait} alt="Okoye Melody Chinecherem, Medical Laboratory Technician" fill priority sizes="(max-width: 680px) 90vw, 430px" className="portrait-image" />
            </div>
            <div className="portrait-caption">
              <span>OKOYE MELODY CHINECHEREM</span>
              <span>MEDICAL LABORATORY TECHNICIAN</span>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-band" id="about">
        <div className="section-shell intro-grid">
          <h2>Precision is part<br />of patient care.</h2>
          <div className="intro-text">
            <p>
              Dedicated to accurate results, patient safety, proper specimen
              integrity and timely laboratory service delivery. My work spans
              sample collection, specimen preparation, routine testing,
              documentation and quality control.
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
            <h2>Laboratory expertise</h2>
          </div>
        </div>
        <div className="practice-feature">
          <div>
            <h3>From specimen<br />to documented result.</h3>
          </div>
          <p>Attention to identification, handling, testing, equipment care and accurate result records.</p>
        </div>
        <ContentCarousel
          title="Diagnostic investigations"
          description="Routine investigations performed or supported in clinical laboratory settings."
          items={investigations}
        />
        <ContentCarousel
          title="Technical and professional skills"
          items={skills}
        />
      </section>

      <section className="experience-section" id="experience">
        <div className="section-shell">
          <div className="section-heading experience-heading">
            <div>
              <h2>Professional experience</h2>
            </div>
            <p className="section-aside section-aside-light">Experience across medical centres and diagnostic laboratories.</p>
          </div>
          <div className="experience-list">
            {experience.map((job) => (
              <article className="experience-card" key={job.organisation}>
                <div className="job-topline">
                  <div>
                    <h3>{job.organisation}</h3>
                    <p className="organisation-role">{job.role}</p>
                  </div>
                  <div className="job-period">
                    {job.current && <span className="current-label">Current role</span>}
                    <span>{job.period}</span>
                  </div>
                </div>
                <p className="job-location"><MapPin size={14} /> {job.location}</p>
                <ul className="job-points">
                  {job.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell education-section" id="education">
        <div className="education-icon"><GraduationCap size={25} strokeWidth={1.5} /></div>
        <div className="education-copy">
          <h2>National Diploma (ND)</h2>
          <p className="education-course">Medical Laboratory Technician</p>
          <p className="education-school">College of Health, Ezzangbo</p>
        </div>
      </section>

      <section className="details-band">
        <div className="section-shell details-grid">
          <h2>Languages</h2>
          <div className="language-row"><strong>English</strong><span>Full Professional Proficiency</span></div>
          <div className="language-row"><strong>Igbo</strong><span>Native or Bilingual Proficiency</span></div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="section-shell">
          <div className="footer-top">
            <div>
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
            <a className="wordmark footer-wordmark" href="#home">
              <span className="wordmark-mark"><Image src={melodyPortrait} alt="" fill sizes="32px" /></span>
              <span className="wordmark-name">MELODY CHINECHEREM</span>
            </a>
            <span>© {new Date().getFullYear()} Okoye Melody Chinecherem</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
