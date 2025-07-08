import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Tag, Filter, BookOpen, Clock, TrendingUp } from 'lucide-react';

const Blogs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredCard, setHoveredCard] = useState(null);

    const blogPosts = [
        {
            id: 1,
            title: "Building Scalable React Applications",
            excerpt: "Learn the best practices for creating maintainable and performant React applications that can grow with your business needs.",
            content: "In this comprehensive guide, we'll explore advanced React patterns, state management solutions, and performance optimization techniques...",
            category: "Development",
            date: "2024-12-15",
            author: "Zakir Hossain",
            readTime: "8 min read",
            tags: ["React", "JavaScript", "Performance"],
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
            featured: true
        },
        {
            id: 2,
            title: "The Future of Web Design",
            excerpt: "Exploring emerging trends in web design including AI-assisted design tools and immersive user experiences.",
            content: "Web design is evolving rapidly with new technologies and user expectations. From AI-generated layouts to micro-interactions...",
            category: "Design",
            date: "2024-12-10",
            author: "Shoaib Hossain",
            readTime: "6 min read",
            tags: ["Design", "UI/UX", "Trends"],
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop"
        },
        {
            id: 3,
            title: "DevOps Best Practices for Modern Teams",
            excerpt: "A comprehensive guide to implementing DevOps practices that improve collaboration and deployment efficiency.",
            content: "DevOps has transformed how teams build and deploy software. In this article, we'll cover CI/CD pipelines, containerization...",
            category: "DevOps",
            date: "2024-12-05",
            author: "Zaheed Hossain",
            readTime: "12 min read",
            tags: ["DevOps", "CI/CD", "Docker"],
            image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop"
        },
        {
            id: 4,
            title: "Machine Learning for Developers",
            excerpt: "Getting started with machine learning concepts and practical implementations for web developers.",
            content: "Machine learning doesn't have to be intimidating. This beginner-friendly guide covers essential concepts...",
            category: "AI/ML",
            date: "2024-11-28",
            author: "Sabbir Hossain",
            readTime: "10 min read",
            tags: ["Machine Learning", "Python", "AI"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
        },
        {
            id: 5,
            title: "Responsive Design Strategies",
            excerpt: "Master the art of creating websites that work seamlessly across all devices and screen sizes.",
            content: "Responsive design is more than just breakpoints. Learn about fluid layouts, flexible images, and modern CSS techniques...",
            category: "Design",
            date: "2024-11-20",
            author: "Jibon Islam",
            readTime: "7 min read",
            tags: ["CSS", "Responsive", "Mobile"],
            image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=250&fit=crop"
        },
        {
            id: 6,
            title: "API Security Fundamentals",
            excerpt: "Essential security practices for protecting your APIs from common vulnerabilities and attacks.",
            content: "API security is crucial in today's interconnected world. We'll cover authentication, authorization, rate limiting...",
            category: "Security",
            date: "2024-11-15",
            author: "Shaheed Islam",
            readTime: "9 min read",
            tags: ["Security", "API", "Backend"],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
        }
    ];

    const categories = ['all', 'Development', 'Design', 'DevOps', 'AI/ML', 'Security'];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 mt-20">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            My Blog
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Sharing insights, tutorials, and thoughts on development, design, and technology
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Search and Filter */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="text-gray-500 w-5 h-5" />
                            <select
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Featured Post */}
                {featuredPost && selectedCategory === 'all' && !searchTerm && (
                    <div className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <TrendingUp className="text-blue-600 w-5 h-5" />
                            <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="md:flex">
                                <div className="md:w-1/2">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>
                                <div className="md:w-1/2 p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                            {featuredPost.category}
                                        </span>
                                        <span className="text-gray-500 text-sm flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(featuredPost.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-500 text-sm flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                {featuredPost.author}
                                            </span>
                                            <span className="text-gray-500 text-sm flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {featuredPost.readTime}
                                            </span>
                                        </div>
                                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                                            Read More
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Blog Grid */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-8">
                        <BookOpen className="text-gray-700 w-5 h-5" />
                        <h2 className="text-2xl font-bold text-gray-900">
                            {searchTerm || selectedCategory !== 'all' ? 'Search Results' : 'Latest Articles'}
                        </h2>
                        <span className="text-gray-500">({filteredPosts.length})</span>
                    </div>

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-gray-400 mb-4">
                                <Search className="w-16 h-16 mx-auto mb-4" />
                                <p className="text-xl">No articles found</p>
                                <p className="text-gray-500">Try adjusting your search terms or filters</p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    onMouseEnter={() => setHoveredCard(post.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className={`w-full h-48 object-cover transition-transform duration-300 ${
                                                hoveredCard === post.id ? 'scale-105' : ''
                                            }`}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(post.date).toLocaleDateString()}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center gap-1"
                                                >
                                                    <Tag className="w-3 h-3" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500 text-sm flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                {post.author}
                                            </span>
                                            <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center gap-1">
                                                Read More
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Subscribe to my newsletter and never miss a new article. Get the latest insights on development, design, and technology delivered to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                        />
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;