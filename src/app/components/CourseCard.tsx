import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface CourseCardProps {
  title: string;
  subtitle?: string;
  href: string;
  delay?: number;
}

export function CourseCard({ title, subtitle, href, delay = 0 }: CourseCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-rose-100 transition-all duration-300 overflow-hidden block"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-200 pr-2">
            {title}
          </h3>
          <ExternalLink className="h-4 w-4 text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
        </div>

        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}

        <div className="mt-4 flex items-center text-rose-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          View Course
          <motion.span
            className="ml-1"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
}
