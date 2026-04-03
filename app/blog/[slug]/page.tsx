'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { BlogPost } from '@/types';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        try {
          const res = await fetch(`/api/blog/${slug}`);
          if (res.ok) setPost(await res.json());
        } catch (error) {
          console.error('Failed to fetch post:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }
  }, [slug]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!post) return <div className="text-center py-20">Post not found</div>;

  const date = new Date(post.publishedAt || new Date()).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="flex items-center space-x-2 text-[#556B2F] hover:text-[#2F4F2F] mb-8">
          <ChevronLeft size={20} />
          <span>Back to Blog</span>
        </Link>

        <article>
          <div className="mb-8">
            <span className="inline-block bg-[#556B2F] text-white px-3 py-1 rounded-full text-xs font-bold mb-4">{post.category}</span>
            <h1 className="font-serif text-5xl font-bold text-[#2F4F2F] mb-4">{post.title}</h1>
            <div className="flex items-center space-x-6 text-gray-600">
              <span>{date}</span>
              <span>{post.author}</span>
            </div>
          </div>

          <img src={post.image || 'https://via.placeholder.com/800x400'} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-12" />

          <div className="text-gray-700 space-y-4 mb-8">
            {post.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
