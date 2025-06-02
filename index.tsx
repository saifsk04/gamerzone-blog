
import React from 'react';

const posts = [
  {
    title: "Top 5 Battle Royale Games in 2025",
    summary: "Explore the most popular and trending battle royale games this year, including Fortnite, PUBG, and more.",
    link: "#",
  },
  {
    title: "How to Start a Gaming YouTube Channel",
    summary: "A step-by-step guide to starting your gaming channel and growing your audience.",
    link: "#",
  },
  {
    title: "Best Budget Gaming Laptops",
    summary: "Find out which laptops give you the best gaming performance without breaking the bank.",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">GamerZone: Your Ultimate Gaming Blog</h1>
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="border rounded-md p-4 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Read More</a>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        {/* Placeholder for Google AdSense */}
        <div className="bg-gray-100 p-4 border rounded-md text-gray-500 text-sm">
          Ad Placeholder - Your ads will appear here after AdSense approval.
        </div>
      </div>
    </div>
  );
}
