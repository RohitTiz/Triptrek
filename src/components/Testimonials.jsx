import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            What Our Travelers Say
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base lg:text-lg">
            Real experiences from Indian travelers who explored with us
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="card-hover relative rounded-2xl bg-white p-4 shadow-lg sm:p-6"
            >
              <Quote className="absolute right-4 top-4 h-6 w-6 text-blue-100 sm:right-6 sm:top-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
              
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-900 sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600 sm:text-sm">{testimonial.role}</p>
                  <div className="mt-0.5 flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mb-3 text-sm italic text-gray-700 sm:mb-4 sm:text-base">"{testimonial.content}"</p>
              
              <div className="border-t pt-3 sm:pt-4">
                <span className="text-xs font-semibold text-blue-600 sm:text-sm">
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