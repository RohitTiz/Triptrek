import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search, Filter, BookOpen } from 'lucide-react';
import blogs from '../data/blogs';

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get all unique categories
  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];
  
  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get featured blogs
  const featuredBlogs = blogs.filter(blog => blog.featured);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-saffron-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Blogs & Guides</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover India through our comprehensive travel guides, tips, and inspiring stories
          </p>
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search blogs, destinations, or topics..."
                className="w-full pl-12 pr-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-saffron-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-saffron-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Blogs */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="h-8 w-8 text-saffron-500 mr-3" />
              Featured Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs.slice(0, 3).map(blog => (
                <div key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{blog.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-700">
                        <User className="h-4 w-4 mr-2" />
                        <span className="text-sm">{blog.author}</span>
                      </div>
                      <Link 
                        to={`/blogs/${blog.slug}`}
                        className="text-saffron-600 hover:text-saffron-700 font-medium flex items-center"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Blogs */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            <span className="text-saffron-500 ml-2">({filteredBlogs.length})</span>
          </h2>
          
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map(blog => (
                <article key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <Link to={`/blogs/${blog.slug}`} className="block">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{blog.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-saffron-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center mr-2">
                            <User className="h-4 w-4 text-saffron-600" />
                          </div>
                          <span className="text-sm text-gray-700">{blog.author}</span>
                        </div>
                        <div className="text-saffron-600 hover:text-saffron-700 font-medium flex items-center">
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar/Extra Content for larger screens */}
        <div className="mt-16 lg:grid lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-3">
            {/* Main content already rendered above */}
          </div>
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Travel', 'India', 'Culture', 'Food', 'Adventure', 'Heritage', 'Yoga', 'Wildlife'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-saffron-50 text-gray-700 hover:text-saffron-700 text-sm rounded-lg transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-xl p-6 border border-saffron-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Get weekly travel tips, destination guides, and exclusive offers
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saffron-300 focus:border-transparent"
                />
                <button className="w-full bg-saffron-500 hover:bg-saffron-600 text-white font-medium py-3 rounded-lg transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;