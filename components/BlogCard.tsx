import Link from 'next/link';
import { BlogPost } from '@/types';
import { Calendar, User } from 'lucide-react';

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  const date = new Date(post.publishedAt || new Date()).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer">
        <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
          <img
            src={post.image || 'https://via.placeholder.com/400x300'}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
          <span className="absolute top-4 left-4 bg-[#556B2F] text-white px-3 py-1 rounded-full text-xs font-bold">
            {post.category}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-[#2F4F2F] mb-2">{post.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User size={14} />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
