import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Loader from './components/common/Loader';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogArticle = lazy(() => import('./pages/BlogArticle'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const AboutUs = lazy(() => import('./pages/About'));  // ⭐ ADD THIS


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1, marginTop: '80px' }}>
              <Suspense fallback={<Loader fullScreen />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/courses/:slug" element={<CourseDetail />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogArticle />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/about" element={<AboutUs />} />
                    
                    {/* Fallback route */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </main>
            <Footer />
          </div>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;