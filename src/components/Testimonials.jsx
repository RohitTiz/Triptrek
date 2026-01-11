import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Adventure Traveler',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'The Bali package exceeded all expectations! Every detail was perfectly arranged.',
    rating: 5,
    trip: 'Bali Luxury Retreat'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Photography Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'Swiss Alps tour was breathtaking. The guides were knowledgeable and friendly.',
    rating: 5,
    trip: 'Swiss Adventure'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Cultural Explorer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    content: 'Kyoto cultural journey was transformative. Perfect blend of tradition and comfort.',
    rating: 5,
    trip: 'Japanese Heritage'
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Traveler Stories
          </h2>
          <p className="section-subtitle">
            Hear from our happy travelers about their unforgettable experiences
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