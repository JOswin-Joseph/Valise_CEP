import { useState } from "react";
import blogCourses from "../mock/blogData";
import "./Blog.css"; // CSS file for styling

function Blog() {
  // useState helps track which course is clicked
  const [selectedCourse, setSelectedCourse] = useState(null);

  // When a course is clicked — show details page
  if (selectedCourse) {
    return (
      <div className="blog-detail">
        <button className="back-btn" onClick={() => setSelectedCourse(null)}>
          ← Back to Blogs
        </button>

        <div className="blog-detail-content">
          <h1 className="detail-title">{selectedCourse.title}</h1>
          <img
            className="detail-image"
            src={selectedCourse.image}
            alt={selectedCourse.title}
          />

          <p className="detail-category">
            <b>Category:</b> {selectedCourse.category}
          </p>

          {/* ✅ This renders formatted HTML (headings, lists, emojis, etc.) */}
          <div
            className="blog-text"
            dangerouslySetInnerHTML={{ __html: selectedCourse.details }}
          ></div>
        </div>
      </div>
    );
  }

  // Otherwise — show list of all blogs (blog cards)
  return (
    <div className="blog-page">
      {/* ✅ Minimal Hero Section / Header Banner */}
      <section className="blog-hero">
        <h1>Insights & Learning from Coursify</h1>
        <p>
          Explore our blogs to gain knowledge, learn career tips, and stay ahead
          in the tech world.
        </p>
      </section>

      {/* ✅ Blog Cards Grid */}
      <div className="blog-grid">
        {blogCourses.map((course) => (
          <div
            className="blog-card"
            key={course.id}
            onClick={() => setSelectedCourse(course)}
          >
            <img className="blog-img" src={course.image} alt={course.title} />
            <div className="blog-body">
              <h3 className="blog-title">{course.title}</h3>
              <p className="blog-summary">{course.summary}</p>
              <span className="blog-category">{course.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;