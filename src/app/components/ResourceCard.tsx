import { motion } from 'motion/react';
import { FileText, Presentation, ClipboardCheck, LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  href: string;
  type: 'summary' | 'slides' | 'exams';
  delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
  summary: FileText,
  slides: Presentation,
  exams: ClipboardCheck,
};

export function ResourceCard({ title, href, type, delay = 0 }: ResourceCardProps) {
  const Icon = iconMap[type];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group flex flex-col items-center justify-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-rose-100 transition-all duration-300 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center mb-4 group-hover:from-rose-200 group-hover:to-pink-200 transition-all duration-300">
        <Icon className="h-8 w-8 text-rose-600" />
      </div>
      <p className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
        {title}
      </p>
    </motion.a>
  );
}
