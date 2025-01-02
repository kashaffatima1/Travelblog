import React from 'react';
import { Card, CardContent, CardTitle } from "../components/ui/Cart";

interface BlogCardProps {
  post: { id: string, title: string, description: string, date: string, imgURL: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card className={`p-4 ${isDarkBackground ? "bg-white text-gray-500" : "text-white bg-gray-500 "} rounded-lg shadow-lg hover:text-xl transition-shadow duration-300`}>
      <img
        src={post.imgURL}
        alt={post.title}
        className='w-full h-48 object-cover rounded-t-lg'
      />
      <CardTitle className="text-xl font-normal mt-4 text-center">{post.title}</CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className='flex flex-col items-center mt-2'>
        <a
          href={`/post/${post.id}`}
          className={`w-27 px-6 text-white bg-blue-600 rounded hover:bg-blue-500 ${
            isDarkBackground
              ? "bg-pink-400 hover:bg-blue-500"
              : "bg-pink-400 hover:bg-blue-500"
          }`}>
          Read More
        </a>
      </div>
    </Card>
  );
}
