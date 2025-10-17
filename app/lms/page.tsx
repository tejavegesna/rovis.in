import type { Metadata } from 'next';
import {
  BookOpen,
  Users,
  ClipboardCheck,
  Video,
  TrendingUp,
  MessageSquare,
  Award,
  FileText
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Upcoming LMS Platform | ROVIS Technologies',
  description: 'Discover our comprehensive Learning Management System coming soon - featuring course management, interactive learning, and robust assessment tools.',
};

const features = [
  {
    icon: BookOpen,
    title: 'Course Management & Curriculum',
    description: 'Create, organize, and manage comprehensive courses with structured curriculum planning and content organization.'
  },
  {
    icon: Users,
    title: 'Student/Teacher Roles',
    description: 'Role-based access control with distinct permissions for students, teachers, and administrators for seamless learning experiences.'
  },
  {
    icon: ClipboardCheck,
    title: 'Assignment Submission & Grading',
    description: 'Streamlined assignment workflows with automated grading options, rubrics, and detailed feedback mechanisms.'
  },
  {
    icon: Video,
    title: 'Video Lessons & Content Delivery',
    description: 'Host and deliver video content, interactive multimedia lessons, and diverse learning materials in multiple formats.'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Comprehensive analytics and reporting to monitor student progress, engagement, and learning outcomes in real-time.'
  },
  {
    icon: MessageSquare,
    title: 'Discussion Forums',
    description: 'Foster collaboration and knowledge sharing through threaded discussions, Q&A forums, and peer-to-peer learning.'
  },
  {
    icon: FileText,
    title: 'Quizzes & Assessments',
    description: 'Create diverse assessment types including multiple choice, essays, and interactive quizzes with instant feedback.'
  },
  {
    icon: Award,
    title: 'Certificates',
    description: 'Automated certificate generation upon course completion with customizable templates and verification systems.'
  }
];

export default function LMSPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold">Coming Soon</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Next-Generation Learning Management System
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Empowering educators and learners with a comprehensive, intuitive platform designed for modern education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                Get Notified
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Features for Modern Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our LMS platform is designed to provide everything you need for effective online education and training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our LMS */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our LMS?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Lightning Fast
                </h3>
                <p className="text-gray-600">
                  Built with cutting-edge technology for optimal performance and user experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Secure & Reliable
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade security with data encryption and regular backups.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mobile Friendly
                </h3>
                <p className="text-gray-600">
                  Fully responsive design that works seamlessly across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be Among the First to Experience Our LMS
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Register your interest now and get exclusive early access when we launch.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
            </form>
            <p className="text-sm text-blue-200 mt-4">
              No spam, just updates on our LMS launch and exclusive offers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
