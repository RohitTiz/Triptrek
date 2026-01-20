import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin } from 'lucide-react';
import blogs from '../data/blogs';
import { useState } from 'react';

const BlogPostPage = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);
  const [relatedBlogs] = useState(
    blogs.filter(b => b.slug !== slug && b.category === blog?.category).slice(0, 3)
  );

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-saffron-600 hover:text-saffron-700 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <Link 
              to="/blogs" 
              className="inline-flex items-center text-white/90 hover:text-white mb-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blogs
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{blog.title}</h1>
            <div className="flex flex-wrap items-center text-white/90">
              <div className="flex items-center mr-6 mb-2">
                <User className="h-5 w-5 mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {/* Article Content */}
            <article className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <Tag className="h-5 w-5 text-gray-400 mt-1" />
                  {blog.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {blog.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-6">
                        {paragraph.startsWith('## ') ? (
                          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            {paragraph.substring(3)}
                          </h2>
                        ) : paragraph.startsWith('1. ') || paragraph.startsWith('- ') ? (
                          <ul className="list-disc pl-6 mb-6 space-y-2">
                            {paragraph.split('\n').map((item, i) => (
                              <li key={i} className="text-gray-700">
                                {item.replace(/^[0-9]+\.\s*|^-\s*/, '')}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          paragraph
                        )}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-600 hover:text-saffron-600">
                      <Bookmark className="h-5 w-5 mr-2" />
                      Save
                    </button>
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-600">Share:</span>
                      <button className="text-blue-600 hover:text-blue-700">
                        <Facebook className="h-5 w-5" />
                      </button>
                      <button className="text-blue-400 hover:text-blue-500">
                        <Twitter className="h-5 w-5" />
                      </button>
                      <button className="text-blue-700 hover:text-blue-800">
                        <Linkedin className="h-5 w-5" />
                      </button>
                      <button className="text-gray-600 hover:text-saffron-600">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full bg-saffron-100 flex items-center justify-center mr-6">
                    <User className="h-8 w-8 text-saffron-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.author}</h3>
                    <p className="text-gray-600 mb-4">
                      Travel writer and photographer with over 10 years of experience exploring India. 
                      Passionate about sharing authentic travel experiences and cultural insights.
                    </p>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">{blog.category} Specialist</span>
                      <span className="mx-2">•</span>
                      <span>50+ Articles Published</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3 mt-8 lg:mt-0">
              {/* Related Articles */}
              {relatedBlogs.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedBlogs.map(relatedBlog => (
                      <Link 
                        key={relatedBlog.id}
                        to={`/blogs/${relatedBlog.slug}`}
                        className="block group"
                      >
                        <div className="flex items-start">
                          <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                            <img 
                              src={relatedBlog.image} 
                              alt={relatedBlog.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-saffron-600 transition-colors line-clamp-2">
                              {relatedBlog.title}
                            </h4>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{relatedBlog.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {['Destinations', 'Travel Tips', 'Culture', 'Food', 'Adventure', 'Wellness', 'Wildlife'].map(category => (
                    <Link 
                      key={category}
                      to={`/blogs?category=${category.toLowerCase()}`}
                      className="flex items-center justify-between py-2 text-gray-700 hover:text-saffron-600 group"
                    >
                      <span>{category}</span>
                      <span className="text-gray-400 group-hover:text-saffron-600">
                        {blogs.filter(b => b.category === category).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Sidebar */}
              <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Get Travel Updates</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Subscribe to receive exclusive travel guides and offers
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saffron-300"
                  />
                  <button className="w-full bg-saffron-500 hover:bg-saffron-600 text-white font-medium py-3 rounded-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;