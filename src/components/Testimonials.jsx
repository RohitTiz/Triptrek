import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            What Our Travelers Say
          </h2>
          <p className="section-subtitle">
            Real experiences from Indian travelers who explored with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100" />
              
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              
              <div className="pt-4 border-t">
                <span className="text-sm text-blue-600 font-semibold">
                  Trip: {testimonial.trip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials