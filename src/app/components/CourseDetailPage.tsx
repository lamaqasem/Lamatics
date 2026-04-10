import { motion } from 'motion/react';
import { Youtube, ChevronRight } from 'lucide-react';
import { ResourceCard } from './ResourceCard';
import type { Course } from '../data/coursesData';

interface CourseDetailPageProps {
  course: Course;
  onBack: () => void;
  backLabel?: string;
}

export function CourseDetailPage({ course, onBack, backLabel = 'Back to Courses' }: CourseDetailPageProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back Button */}
        <button
          onClick={() => {
            onBack();
            scrollToTop();
          }}
          className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-8 group"
        >
          <ChevronRight className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          {backLabel}
        </button>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">{course.titleEn}</h1>
        {course.titleAr && (
          <p className="text-xl text-gray-500 mb-4">{course.titleAr}</p>
        )}
        {course.professor && (
          <p className="text-xl text-gray-600 mb-12">{course.professor}</p>
        )}

        {/* Resources */}
        {course.resources.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {course.resources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={
                    resource.type === 'summary'
                      ? 'Download Summary'
                      : resource.type === 'slides'
                      ? 'Lecture Slides'
                      : 'Previous Exams'
                  }
                  href={resource.url}
                  type={resource.type}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        )}

        {/* YouTube Resources */}
        {course.youtubeLinks.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                <Youtube className="h-6 w-6 text-rose-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">YouTube Resources</h2>
            </div>

            <ul className="space-y-4">
              {course.youtubeLinks.map((link, index) => {
                // Extract video/playlist name from URL if possible
                const getVideoTitle = (url: string) => {
                  if (url.includes('playlist')) {
                    return `Playlist ${index + 1}`;
                  } else {
                    return `Video ${index + 1}`;
                  }
                };

                return (
                  <li key={index}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 p-4 rounded-xl hover:bg-rose-50 transition-colors"
                    >
                      <Youtube className="h-5 w-5 text-rose-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 group-hover:text-rose-600 mb-1">
                          {getVideoTitle(link)}
                        </p>
                        <p className="text-sm text-gray-500 truncate">{link}</p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Empty State */}
        {course.resources.length === 0 && course.youtubeLinks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No resources available for this course yet.</p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
