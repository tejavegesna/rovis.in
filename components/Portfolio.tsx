import { ExternalLink, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Mobile App',
    description: 'Custom Android application with AI-powered product recommendations and seamless payment integration.',
    category: 'Android Development',
    technologies: ['Android', 'Kotlin', 'Firebase', 'AI/ML'],
    results: ['40% increase in user engagement', '25% boost in sales conversion'],
  },
  {
    title: 'Cloud Infrastructure Modernization',
    description: 'Complete cloud migration and infrastructure optimization for manufacturing company.',
    category: 'Cloud Computing',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    results: ['60% reduction in infrastructure costs', '99.9% uptime achievement'],
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Intelligent business intelligence platform with predictive analytics and real-time insights.',
    category: 'Artificial Intelligence',
    technologies: ['Python', 'TensorFlow', 'React', 'API Integration'],
    results: ['50% faster decision making', '30% improvement in forecast accuracy'],
  },
  {
    title: 'Digital Transformation Initiative',
    description: 'Comprehensive digitization of legacy processes for healthcare organization.',
    category: 'Digital Transformation',
    technologies: ['Custom Software', 'API Development', 'Database Design', 'Security'],
    results: ['70% reduction in processing time', '90% decrease in manual errors'],
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses
            transform through innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">{project.category.split(' ')[0]}</div>
                  <div className="text-lg opacity-90">Project Showcase</div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Start Your Project
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
