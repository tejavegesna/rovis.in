import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'TechFlow Solutions',
    content: 'ROVIS Technologies transformed our mobile strategy with their expert Android development. The app they delivered exceeded our expectations and significantly improved our customer engagement.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    position: 'Operations Manager',
    company: 'DataSync Corp',
    content: 'Their AI solutions have revolutionized our data processing capabilities. We now make decisions 50% faster with their intelligent analytics platform.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    position: 'Founder',
    company: 'CloudFirst Startup',
    content: 'The cloud migration project was seamless and professionally executed. ROVIS delivered on time and under budget while ensuring zero downtime.',
    rating: 5,
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about
            working with ROVIS Technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-600">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
