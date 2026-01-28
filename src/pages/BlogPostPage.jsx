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
      <div className="flex min-h-screen items-center justify-center bg-gray-50 pt-24">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">Blog Not Found</h1>
          <p className="mb-6 text-gray-600 sm:mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center font-medium text-saffron-600 hover:text-saffron-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
      {/* Hero Image */}
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[21/9]">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-12">
          <div className="mx-auto max-w-4xl">
            <Link 
              to="/blogs" 
              className="mb-3 inline-flex items-center text-white/90 hover:text-white sm:mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Back to Blogs
            </Link>
            <h1 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl xl:text-5xl">{blog.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-white/90 sm:gap-4">
              <div className="flex items-center">
                <User className="mr-1.5 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1.5 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">{blog.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1.5 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 xl:gap-12">
            {/* Article Content */}
            <article className="lg:w-2/3">
              <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm sm:mb-8 sm:p-6 lg:p-8">
                {/* Tags */}
                <div className="mb-6 flex flex-wrap items-center gap-1.5 sm:mb-8 sm:gap-2">
                  <Tag className="h-4 w-4 text-gray-400 sm:h-5 sm:w-5" />
                  {blog.tags.map(tag => (
                    <span key={tag} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700 sm:px-3 sm:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Content */}
                <div className="prose prose-sm max-w-none sm:prose-base lg:prose-lg">
                  <div className="leading-relaxed text-gray-700">
                    {blog.content.split('\n\n').map((paragraph, index) => (
                      <div key={index} className="mb-4 sm:mb-6">
                        {paragraph.startsWith('## ') ? (
                          <h2 className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl">
                            {paragraph.substring(3)}
                          </h2>
                        ) : paragraph.startsWith('1. ') || paragraph.startsWith('- ') ? (
                          <ul className="mb-4 list-disc space-y-1.5 pl-5 sm:mb-6 sm:space-y-2">
                            {paragraph.split('\n').map((item, i) => (
                              <li key={i} className="text-gray-700">
                                {item.replace(/^[0-9]+\.\s*|^-\s*/, '')}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          paragraph
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 border-t border-gray-200 pt-6 sm:mt-10 sm:pt-8">
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <button className="flex items-center text-sm text-gray-600 hover:text-saffron-600 sm:text-base">
                        <Bookmark className="mr-1.5 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
                        Save
                      </button>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-sm text-gray-600 sm:text-base">Share:</span>
                        <button className="text-blue-600 hover:text-blue-700">
                          <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        <button className="text-blue-400 hover:text-blue-500">
                          <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        <button className="text-blue-700 hover:text-blue-800">
                          <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        <button className="text-gray-600 hover:text-saffron-600">
                          <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-saffron-100 sm:h-16 sm:w-16">
                    <User className="h-6 w-6 text-saffron-600 sm:h-8 sm:w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-bold text-gray-900 sm:mb-2 sm:text-xl">{blog.author}</h3>
                    <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base">
                      Travel writer and photographer with over 10 years of experience exploring India. 
                      Passionate about sharing authentic travel experiences and cultural insights.
                    </p>
                    <div className="text-xs text-gray-500 sm:text-sm">
                      <span className="font-medium">{blog.category} Specialist</span>
                      <span className="mx-1.5 sm:mx-2">•</span>
                      <span>50+ Articles Published</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              {/* Related Articles */}
              {relatedBlogs.length > 0 && (
                <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm sm:mb-8 sm:p-6">
                  <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">Related Articles</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {relatedBlogs.map(relatedBlog => (
                      <Link 
                        key={relatedBlog.id}
                        to={`/blogs/${relatedBlog.slug}`}
                        className="group block"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="h-14 w-16 flex-shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-20">
                            <img 
                              src={relatedBlog.image} 
                              alt={relatedBlog.title}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="line-clamp-2 text-sm font-medium text-gray-900 transition-colors group-hover:text-saffron-600 sm:text-base">
                              {relatedBlog.title}
                            </h4>
                            <div className="mt-1 flex items-center text-xs text-gray-500 sm:text-sm">
                              <Clock className="mr-1 h-3 w-3" />
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
              <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm sm:mb-8 sm:p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">Categories</h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {['Destinations', 'Travel Tips', 'Culture', 'Food', 'Adventure', 'Wellness', 'Wildlife'].map(category => (
                    <Link 
                      key={category}
                      to={`/blogs?category=${category.toLowerCase()}`}
                      className="flex items-center justify-between py-1.5 text-sm text-gray-700 hover:text-saffron-600 group sm:py-2 sm:text-base"
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
              <div className="rounded-2xl border border-saffron-100 bg-gradient-to-br from-saffron-50 to-orange-50 p-4 sm:p-6">
                <h3 className="mb-2 text-base font-bold text-gray-900 sm:mb-3 sm:text-lg">Get Travel Updates</h3>
                <p className="mb-3 text-xs text-gray-600 sm:mb-4 sm:text-sm">
                  Subscribe to receive exclusive travel guides and offers
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-saffron-300 sm:px-4 sm:py-3 sm:text-base"
                  />
                  <button className="w-full rounded-lg bg-saffron-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-saffron-600 sm:py-3 sm:text-base">
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