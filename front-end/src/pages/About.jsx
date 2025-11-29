import "./About.css";
import {
  Target,
  Globe,
  Users,
  Award,
  CheckCircle,
  Rocket,
  Lightbulb,
  BookOpen,
  Layers
} from "lucide-react";

export default function About() {
  return (
    <div className="about-wrapper">

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Empowering Minds. Shaping Futures.</h1>
          <p>
            We are redefining learning through innovation, experience, and technology — 
            helping learners become globally competitive professionals.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="stat-item">
          <h3>50K+</h3>
          <p>Learners</p>
        </div>
        <div className="stat-item">
          <h3>400+</h3>
          <p>Courses</p>
        </div>
        <div className="stat-item">
          <h3>120+</h3>
          <p>Hiring Partners</p>
        </div>
        <div className="stat-item">
          <h3>300+</h3>
          <p>Industry Projects</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <h2 className="section-title">Who We Are</h2>

        <p className="section-desc">
          We are a next-gen EdTech organization building industry-ready professionals 
          through expert-led training, real-world projects, and a future-focused curriculum.
        </p>

        <div className="premium-grid">
          <div className="premium-card">
            <Target size={40} />
            <h3>Our Mission</h3>
            <p>Empowering learners with practical and job-ready skills.</p>
          </div>

          <div className="premium-card">
            <Globe size={40} />
            <h3>Our Vision</h3>
            <p>To create a global community of world-class professionals.</p>
          </div>

          <div className="premium-card">
            <Rocket size={40} />
            <h3>Our Goal</h3>
            <p>To make high-quality learning accessible to everyone.</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section alt">
        <h2 className="section-title">Our Core Values</h2>

        <div className="values-flex">
          <div className="value-card">
            <Lightbulb size={32} />
            <h3>Innovation</h3>
            <p>We bring modern, creative, and unique learning experiences.</p>
          </div>

          <div className="value-card">
            <Layers size={32} />
            <h3>Quality</h3>
            <p>We deliver meticulously crafted courses with real-world relevance.</p>
          </div>

          <div className="value-card">
            <CheckCircle size={32} />
            <h3>Integrity</h3>
            <p>We follow honest, transparent, and ethical learning principles.</p>
          </div>

          <div className="value-card">
            <Users size={32} />
            <h3>Community</h3>
            <p>We nurture growth through collaboration and support.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <h2 className="section-title">Why Learners Choose Us</h2>

        <div className="choose-grid">
          <div className="choose-card">
            <CheckCircle size={32} />
            <h3>Project-Based Learning</h3>
            <p>Build real-world skills through practical projects.</p>
          </div>

          <div className="choose-card">
            <Award size={32} />
            <h3>Industry Mentors</h3>
            <p>Learn from leading experts and professionals.</p>
          </div>

          <div className="choose-card">
            <Globe size={32} />
            <h3>Global Learning Access</h3>
            <p>Access from anywhere with lifetime learning support.</p>
          </div>

          <div className="choose-card">
            <Users size={32} />
            <h3>24/7 Assistance</h3>
            <p>Our team ensures smooth learning with instant support.</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="impact-section">
        <h2 className="section-title">Our Impact</h2>
        <p className="impact-subtitle">
          We are not just building careers — we are shaping the future workforce.
        </p>

        <div className="impact-grid">

          <div className="impact-box">
            <h3>95%</h3>
            <p>Skill Improvement</p>
          </div>

          <div className="impact-box">
            <h3>40,000+</h3>
            <p>Hours of Training Delivered</p>
          </div>

          <div className="impact-box">
            <h3>300+</h3>
            <p>Real Projects Completed</p>
          </div>

          <div className="impact-box">
            <h3>120+</h3>
            <p>Hiring Partners Added</p>
          </div>

        </div>
      </section>

    </div>
  );
}
