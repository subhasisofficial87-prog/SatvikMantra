'use client';
import { useEffect, useState } from 'react';
import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/types';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/blog');
        if (res.ok) setPosts(await res.json());
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-[#2F4F2F] mb-4">Ayurvedic Wisdom Blog</h1>
        <p className="text-gray-600 mb-12">Learn about the benefits of traditional oils and Ayurvedic wellness</p>

        {loading ? (
          <div className="text-center py-20">Loading...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-gray-600">No blog posts available</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
