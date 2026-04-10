import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, FileText, ArrowRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CourseCard } from './components/CourseCard';
import { CourseDetailPage } from './components/CourseDetailPage';
import { coursesData } from './data/coursesData';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get courses by category
  const coreCourses = coursesData.filter(c => c.category === 'core');
  const csElectives = coursesData.filter(c => c.category === 'electives');
  const scienceElectives = coursesData.filter(c => c.category === 'science');
  const uniRequirements = coursesData.filter(c => c.category === 'university');

  // Find current course if viewing course details
  const currentCourse = coursesData.find(c => c.id === currentSection);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50/30 to-white">
      <Navbar currentPage={currentSection} />

      {/* Course Detail Page */}
      {currentCourse ? (
        <CourseDetailPage
          course={currentCourse}
          onBack={() => {
            const categoryMap = {
              core: 'core-courses',
              electives: 'cs-electives',
              science: 'science',
              university: 'university'
            };
            window.location.hash = categoryMap[currentCourse.category];
          }}
          backLabel={`Back to ${
            currentCourse.category === 'core' ? 'Core Courses' :
            currentCourse.category === 'electives' ? 'CS Electives' :
            currentCourse.category === 'science' ? 'Science Electives' :
            'University Requirements'
          }`}
        />
      ) : currentSection === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(244,114,182,0.1),transparent_50%)]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
                    Computer Science
                  </span>
                  <br />
                  <span className="text-gray-900">Study Hub</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
                >
                  A central place for Computer Science summaries, notes, and study materials.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <a
                    href="#core-courses"
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Browse Courses
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our website organizes Computer Science course summaries, notes, and study resources
                to help students quickly find what they need for their academic success.
              </p>
            </motion.div>
          </section>

          {/* Popular Courses */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Popular Courses</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreCourses
                  .filter(c => ['os', 'software', 'compArch', 'database'].includes(c.id))
                  .map((course, index) => (
                    <CourseCard
                      key={course.id}
                      title={course.titleEn}
                      subtitle={course.titleAr}
                      href={`#${course.id}`}
                      delay={index * 0.1}
                    />
                  ))}
              </div>
            </motion.div>
          </section>

          {/* Statistics */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Resources</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-rose-600" />
                  </div>
                  <p className="text-4xl font-bold text-gray-900 mb-2">25+</p>
                  <p className="text-gray-600">Courses</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-rose-600" />
                  </div>
                  <p className="text-4xl font-bold text-gray-900 mb-2">100+</p>
                  <p className="text-gray-600">Summaries</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-rose-600" />
                  </div>
                  <p className="text-lg font-bold text-gray-900 mb-2">Resources</p>
                  <p className="text-gray-600">For CS Students</p>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </>
      ) : currentSection === 'core-courses' ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Core CS Courses</h1>
              <p className="text-xl text-gray-600">Main Computer Science courses required for the degree.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreCourses.map((course, index) => (
                <CourseCard
                  key={course.id}
                  title={course.titleEn}
                  subtitle={course.titleAr}
                  href={`#${course.id}`}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </motion.div>
        </section>
      ) : currentSection === 'cs-electives' ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">CS Electives</h1>
              <p className="text-xl text-gray-600">Advanced Computer Science elective courses.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {csElectives.map((course, index) => (
                <CourseCard
                  key={course.id}
                  title={course.titleEn}
                  subtitle={course.titleAr}
                  href={`#${course.id}`}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </motion.div>
        </section>
      ) : currentSection === 'science' ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Science Electives</h1>
              <p className="text-xl text-gray-600">Basic Science courses for Computer Science students.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scienceElectives.map((course, index) => (
                <CourseCard
                  key={course.id}
                  title={course.titleEn}
                  subtitle={course.titleAr}
                  href={`#${course.id}`}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </section>
      ) : currentSection === 'university' ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">University Requirements</h1>
              <p className="text-xl text-gray-600">Required courses for all students.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {uniRequirements.map((course, index) => (
                <CourseCard
                  key={course.id}
                  title={course.titleEn}
                  subtitle={course.titleAr}
                  href={`#${course.id}`}
                  delay={index * 0.15}
                />
              ))}
            </div>
          </motion.div>
        </section>
      ) : null}

      <Footer />
    </div>
  );
}