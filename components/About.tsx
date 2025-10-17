import { CheckCircle, Target, Eye, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              About ROVIS Technologies
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a forward-thinking IT solutions provider specializing in Android development
              and artificial intelligence. Our mission is to enable businesses to harness technology
              without complexity through seamless, scalable, and secure solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To enable businesses to harness technology without complexity, providing
                    seamless, scalable, and secure IT solutions that streamline operations,
                    reduce costs, and achieve digital transformation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Eye className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be a trusted partner known for forward-thinking, sustainable, and
                    adaptable solutions, making technology a bridge to opportunity,
                    innovation, and growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-600">
                    Innovation, reliability, and client success drive everything we do.
                    We believe in building long-term partnerships and delivering solutions
                    that create lasting value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose ROVIS?</h3>
              <div className="space-y-4">
                {[
                  'Expert team with 5+ years of experience',
                  'Proven track record with 50+ successful projects',
                  'Cutting-edge technology and best practices',
                  'Comprehensive support and maintenance',
                  'Custom solutions tailored to your needs',
                  'Transparent communication and process'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-primary-100">Projects Delivered</div>
              </div>
              <div className="bg-accent text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-accent-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
