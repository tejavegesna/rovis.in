import {
  Smartphone,
  Brain,
  Cloud,
  Settings,
  Shield,
  Zap,
  Users,
  TrendingUp,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Android Development',
    description: 'Custom mobile applications built with experienced developers using latest Android technologies and best practices.',
    features: ['Native Android Apps', 'Cross-Platform Solutions', 'UI/UX Design', 'App Store Optimization']
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Cutting-edge AI solutions that automate processes and provide intelligent insights for your business.',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Scalable cloud solutions enabling secure remote access and flexible infrastructure management.',
    features: ['Cloud Migration', 'DevOps', 'Infrastructure as Code', '24/7 Monitoring']
  },
  {
    icon: Settings,
    title: 'IT Consulting',
    description: 'Comprehensive IT consulting from strategy to implementation, tailored to your specific business needs.',
    features: ['Technology Strategy', 'System Integration', 'Process Optimization', 'Digital Roadmap']
  },
  {
    icon: Shield,
    title: 'IT Support',
    description: 'Proactive monitoring and comprehensive support ensuring your systems run smoothly and securely.',
    features: ['24/7 Support', 'Proactive Monitoring', 'Security Management', 'Backup Solutions']
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Innovative solutions that modernize your business processes and enhance operational efficiency.',
    features: ['Process Automation', 'Legacy Modernization', 'Data Analytics', 'Change Management']
  },
  {
    icon: Users,
    title: 'Asset Management',
    description: 'Enhanced productivity through intelligent asset tracking and management solutions.',
    features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Reporting & Analytics']
  },
  {
    icon: TrendingUp,
    title: 'Technology Enablement',
    description: 'Customization and growth support to help your business leverage technology effectively.',
    features: ['Custom Development', 'Integration Services', 'Training & Support', 'Scalability Planning']
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business through
            innovative technology and expert implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Discuss Your Project
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
