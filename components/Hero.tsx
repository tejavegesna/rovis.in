import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-20 section-padding bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business with{' '}
              <span className="text-primary">Custom Android Apps</span> and{' '}
              <span className="text-accent">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              We enable businesses to harness technology without complexity through seamless,
              scalable, and secure IT solutions that streamline operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#contact" className="btn-primary">
                Schedule Consultation
                <ArrowRight size={20} />
              </a>
              <a href="#portfolio" className="btn-secondary">
                <Play size={20} />
                View Our Work
              </a>
            </div>
            <div className="flex items-center gap-8 mt-12 text-sm text-gray-600">
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div>Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div>Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div>Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
              <div className="space-y-4">
                <div className="h-4 bg-white/20 rounded w-3/4"></div>
                <div className="h-4 bg-white/20 rounded w-1/2"></div>
                <div className="h-4 bg-white/20 rounded w-5/6"></div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="h-8 w-8 bg-white/20 rounded mb-2"></div>
                    <div className="h-3 bg-white/20 rounded"></div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="h-8 w-8 bg-white/20 rounded mb-2"></div>
                    <div className="h-3 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
