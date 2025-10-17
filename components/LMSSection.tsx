import Link from 'next/link';
import { BookOpen, Users, Video, Award, ArrowRight } from 'lucide-react';

export default function LMSSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
              Coming Soon
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Introducing Our Learning Management System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A powerful, comprehensive platform designed to revolutionize online education and training.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Course Management</h3>
              <p className="text-sm text-gray-600">Comprehensive curriculum planning and organization</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Role-Based Access</h3>
              <p className="text-sm text-gray-600">Distinct permissions for students and teachers</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Video Lessons</h3>
              <p className="text-sm text-gray-600">Interactive multimedia content delivery</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certificates</h3>
              <p className="text-sm text-gray-600">Automated certificate generation and verification</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/lms"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl group"
            >
              Explore LMS Features
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Register your interest for early access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}