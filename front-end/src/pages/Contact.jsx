import { useEffect, useState } from "react";
import PageTransition from "../components/layout/PageTransition";
import { setPageTitle } from "../utils/helpers";

const Contact = () => {
  useEffect(() => {
    setPageTitle("Contact");
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const courses = [
    "Web Development",
    "Data Science",
    "UI/UX Design",
    "Cloud Computing",
    "Cyber Security",
    "Mobile App Development",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Enquiry Submitted:", form);
    alert("Your enquiry has been submitted!");
  };

  return (
    <PageTransition>
      <div className="contact-page-section" style={{ padding: "4rem 1rem" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          {/* Page Title */}
          <h1 style={{ fontSize: "2.4rem", marginBottom: "1rem", textAlign: "center" }}>
            Contact Us
          </h1>
          <p 
            style={{
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
              color: "var(--color-text-secondary)",
            }}
          >
            Have a question about a course? Fill out the form below and we’ll get back
            to you shortly.
          </p>

          {/* Form Card */}
          <div
            style={{
              background: "#fff",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <label style={{ display: "block", marginBottom: "1.2rem" }}>
                <span style={{ fontWeight: 600 }}>Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    marginTop: "0.4rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              </label>

              {/* Email */}
              <label style={{ display: "block", marginBottom: "1.2rem" }}>
                <span style={{ fontWeight: 600 }}>Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    marginTop: "0.4rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              </label>

              {/* Phone */}
              <label style={{ display: "block", marginBottom: "1.2rem" }}>
                <span style={{ fontWeight: 600 }}>Phone Number</span>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    marginTop: "0.4rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              </label>

              {/* Course */}
              <label style={{ display: "block", marginBottom: "1.2rem" }}>
                <span style={{ fontWeight: 600 }}>Select Course</span>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    marginTop: "0.4rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="">Choose a course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </label>

              {/* Message */}
              <label style={{ display: "block", marginBottom: "1.5rem" }}>
                <span style={{ fontWeight: 600 }}>Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your enquiry..."
                  required
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    marginTop: "0.4rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                ></textarea>
              </label>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  padding: "0.9rem 0",
                  width: "100%",
                  background: "var(--color-primary)",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
