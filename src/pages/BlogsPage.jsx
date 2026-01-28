import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search, BookOpen } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-saffron-500 to-orange-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:py-16">
          <h1 className="mb-3 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">Travel Blogs & Guides</h1>
          <p className="mx-auto mb-6 max-w-2xl text-base sm:mb-8 sm:text-lg lg:text-xl">
            Discover India through our comprehensive travel guides, tips, and inspiring stories
          </p>
          <div className="mx-auto max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 sm:left-4 sm:h-5 sm:w-5" />
              <input
                type="text"
                placeholder="Search blogs, destinations, or topics..."
                className="w-full rounded-full py-2.5 pl-10 pr-4 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-saffron-300 sm:py-3 sm:pl-12 sm:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Categories Filter */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all sm:px-4 sm:py-2 sm:text-base ${
                  selectedCategory === category
                    ? 'bg-saffron-500 text-white shadow-md'
                    : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Blogs */}
        {selectedCategory === 'All' && (
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900 sm:mb-6 sm:text-2xl lg:text-3xl">
              <BookOpen className="mr-2 h-5 w-5 text-saffron-500 sm:mr-3 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
              Featured Stories
            </h2>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {featuredBlogs.slice(0, 3).map(blog => (
                <div key={blog.id} className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                      <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm sm:px-3 sm:text-sm">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="mb-2 flex items-center text-xs text-gray-500 sm:mb-3 sm:text-sm">
                      <Calendar className="mr-1 h-3.5 w-3.5 sm:mr-1.5 sm:h-4 sm:w-4" />
                      <span className="mr-3 sm:mr-4">{blog.date}</span>
                      <Clock className="mr-1 h-3.5 w-3.5 sm:mr-1.5 sm:h-4 sm:w-4" />
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="mb-2 line-clamp-2 text-base font-bold text-gray-900 sm:mb-3 sm:text-lg lg:text-xl">
                      {blog.title}
                    </h3>
                    <p className="mb-3 line-clamp-2 text-sm text-gray-600 sm:mb-4 sm:line-clamp-3 sm:text-base">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-700 sm:text-base">
                        <User className="mr-1.5 h-3.5 w-3.5 sm:mr-2 sm:h-4 sm:w-4" />
                        <span>{blog.author}</span>
                      </div>
                      <Link 
                        to={`/blogs/${blog.slug}`}
                        className="flex items-center text-xs font-medium text-saffron-600 hover:text-saffron-700 sm:text-sm"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4" />
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
          <h2 className="mb-4 text-xl font-bold text-gray-900 sm:mb-6 sm:text-2xl lg:text-3xl">
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            <span className="ml-1.5 text-saffron-500 sm:ml-2">({filteredBlogs.length})</span>
          </h2>
          
          {filteredBlogs.length === 0 ? (
            <div className="py-8 text-center sm:py-10 lg:py-12">
              <div className="mb-3 text-gray-400 sm:mb-4">
                <Search className="mx-auto h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-gray-600 sm:mb-2 sm:text-xl lg:text-2xl">No articles found</h3>
              <p className="text-sm text-gray-500 sm:text-base">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filteredBlogs.map(blog => (
                <article key={blog.id} className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <Link to={`/blogs/${blog.slug}`} className="block">
                    <div className="relative aspect-[3/2] overflow-hidden sm:aspect-[4/3]">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                        <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 backdrop-blur-sm sm:px-3 sm:text-sm">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="mb-2 flex items-center text-xs text-gray-500 sm:mb-3 sm:text-sm">
                        <Calendar className="mr-1 h-3.5 w-3.5 sm:mr-1.5 sm:h-4 sm:w-4" />
                        <span>{blog.date}</span>
                        <span className="mx-1.5 sm:mx-2">•</span>
                        <Clock className="mr-1 h-3.5 w-3.5 sm:mr-1.5 sm:h-4 sm:w-4" />
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="mb-2 text-base font-bold text-gray-900 transition-colors hover:text-saffron-600 sm:mb-3 sm:text-lg lg:text-xl">
                        {blog.title}
                      </h3>
                      <p className="mb-3 line-clamp-2 text-sm text-gray-600 sm:mb-4 sm:text-base">
                        {blog.excerpt}
                      </p>
                      <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
                        {blog.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 sm:text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-100 pt-3 sm:pt-4">
                        <div className="flex items-center">
                          <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-saffron-100 sm:mr-2.5 sm:h-8 sm:w-8">
                            <User className="h-3 w-3 text-saffron-600 sm:h-4 sm:w-4" />
                          </div>
                          <span className="text-xs text-gray-700 sm:text-sm">{blog.author}</span>
                        </div>
                        <div className="flex items-center text-xs font-medium text-saffron-600 hover:text-saffron-700 sm:text-sm">
                          Read Article
                          <ArrowRight className="ml-1 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Content */}
        <div className="mt-8 sm:mt-10 lg:mt-12 xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="xl:col-span-3">
            {/* Main content already rendered above */}
          </div>
          <div className="mt-6 xl:col-span-1 xl:mt-0">
            {/* Popular Tags */}
            <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:mb-6 sm:p-6">
              <h3 className="mb-3 text-base font-bold text-gray-900 sm:mb-4 sm:text-lg">Popular Tags</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {['Travel', 'India', 'Culture', 'Food', 'Adventure', 'Heritage', 'Yoga', 'Wildlife'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs text-gray-700 transition-colors hover:bg-saffron-50 hover:text-saffron-700 sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="rounded-xl border border-saffron-100 bg-gradient-to-br from-saffron-50 to-orange-50 p-4 sm:p-6">
              <h3 className="mb-2 text-base font-bold text-gray-900 sm:mb-3 sm:text-lg">Subscribe to Our Newsletter</h3>
              <p className="mb-3 text-xs text-gray-600 sm:mb-4 sm:text-sm">
                Get weekly travel tips, destination guides, and exclusive offers
              </p>
              <div className="space-y-2 sm:space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-saffron-300 sm:px-4 sm:py-3 sm:text-base"
                />
                <button className="w-full rounded-lg bg-saffron-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-saffron-600 sm:py-3 sm:text-base">
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