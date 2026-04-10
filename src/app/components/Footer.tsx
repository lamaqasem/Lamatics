import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-rose-50 to-pink-50 border-t border-rose-100 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-3">
              Lamatics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A central hub for Computer Science summaries, notes, and study materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#core-courses" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Core Courses
                </a>
              </li>
              <li>
                <a href="#cs-electives" className="text-gray-600 hover:text-rose-600 transition-colors">
                  CS Electives
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4 text-rose-500" />
                <span>+972 56-804-8890</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4 text-rose-500" />
                <span>Built for CS students</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-rose-100 text-center">
          <p className="text-gray-600">
            © 2026 CS Study Hub. Built for Computer Science students.
          </p>
        </div>
      </div>
    </footer>
  );
}
