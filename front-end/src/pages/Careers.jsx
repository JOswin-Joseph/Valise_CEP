import { useState, useRef } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/layout/PageTransition";
import styles from "./Careers.module.css";
import { Inbox, Paperclip, UploadCloud, CheckCircle } from "lucide-react";

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});
  const fileRef = useRef();

  const courses = [
    "Web Development",
    "Data Science",
    "UI/UX Design",
    "Cloud Computing",
    "Cyber Security",
    "Mobile Development",
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = "Valid email required";
    if (!form.course) e.course = "Select a course";
    if (!form.phone.match(/^\+?\d{7,15}$/)) e.phone = "Valid phone required";
    if (!file) e.file = "Upload CV";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleFile = (f) => {
    if (!f) return;
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(f.type)) {
      setErrors((prev) => ({ ...prev, file: "Please upload PDF / DOC / DOCX" }));
      return;
    }
    setFile(f);
    setErrors((prev) => ({ ...prev, file: null }));
  };

  const onDrop = (ev) => {
    ev.preventDefault();
    handleFile(ev.dataTransfer.files[0]);
  };

  const onSelectFile = (ev) => {
    handleFile(ev.target.files[0]);
  };

  const removeFile = () => setFile(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));

    setSuccess({
      title: "Application submitted",
      message: "We will review your details and contact you soon.",
    });

    setForm({ name: "", email: "", course: "", phone: "" });
    setFile(null);
    setErrors({});
    setSubmitting(false);
  };

  return (
    <PageTransition>
      <div className={styles.wrapper}>

        {/* HERO SECTION */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <h1>Teach. Grow. Impact — Join Coursify as an Instructor</h1>
            <p className={styles.lead}>
              Share your expertise with thousands of learners. Flexible engagement, 
              fair revenue sharing, and a platform designed to amplify your teaching career.
            </p>
            <div className={styles.heroActions}>
              <a href="#apply" className={styles.primaryBtn}>Apply now</a>
              <a href="#why-us" className={styles.ghostBtn}>Why teach with us</a>
            </div>
          </div>
        </header>

        {/* WHY TEACH WITH US – CLEAN, SPACED, CLEAR */}
        <section id="why-us" className={styles.whyUs}>
          <h2>Why Teach With Coursify?</h2>
          <p className={styles.sub}>
            A platform built to empower educators and democratize world-class learning.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}><Inbox size={20} /></div>
              <h3>Global Reach</h3>
              <p>Teach learners worldwide and expand your professional influence.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}><UploadCloud size={20} /></div>
              <h3>Flexible Delivery</h3>
              <p>Choose between live sessions or recorded content.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}><Paperclip size={20} /></div>
              <h3>Fair Revenue</h3>
              <p>Competitive revenue models and additional instructor bonuses.</p>
            </div>
          </div>
        </section>

        {/* APPLY SECTION */}
        <section id="apply" className={styles.applySection}>
          <div className={styles.left}>
            <h2>Ready to share your expertise?</h2>
            <p>
              Fill in your details and attach your CV. Our team will reach out to 
              discuss collaboration opportunities.
            </p>

            <ul className={styles.steps}>
              <li><strong>1. Sign up:</strong> Submit your details and CV.</li>
              <li><strong>2. Review:</strong> Our team reviews your application.</li>
              <li><strong>3. Onboard:</strong> Publish and promote your course.</li>
            </ul>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <h3>Application</h3>

            <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
            {errors.name && <span className={styles.error}>{errors.name}</span>}

            <input name="email" placeholder="Email address" value={form.email} onChange={handleChange} />
            {errors.email && <span className={styles.error}>{errors.email}</span>}

            <select name="course" value={form.course} onChange={handleChange}>
              <option value="">Select Course</option>
              {courses.map((c) => <option key={c}>{c}</option>)}
            </select>
            {errors.course && <span className={styles.error}>{errors.course}</span>}

            <input name="phone" placeholder="+91 XXXXXXXXXX" value={form.phone} onChange={handleChange} />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}

            <div
              className={styles.dropzone}
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
              onClick={() => fileRef.current?.click()}
            >
              <input type="file" ref={fileRef} onChange={onSelectFile} hidden />
              <UploadCloud size={20} />
              <span>{file ? file.name : "Upload CV (PDF / DOC / DOCX)"}</span>
            </div>
            {errors.file && <span className={styles.error}>{errors.file}</span>}

            {file && (
              <div className={styles.filePreview}>
                <CheckCircle size={16} /> <span>{file.name}</span>
                <button type="button" onClick={() => setFile(null)}>Remove</button>
              </div>
            )}

            <button type="submit" className={styles.submit} disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Application"}
            </button>

            {success && (
              <div className={styles.success}>
                <strong>{success.title}</strong>
                <p>{success.message}</p>
              </div>
            )}
          </form>
        </section>
      </div>
    </PageTransition>
  );
}
