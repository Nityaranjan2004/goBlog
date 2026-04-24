import { useState } from "react";

const blogData = [
  {
    id: 1,
    title: "Getting Started with React",
    desc: "Learn the basics of React and build your first app.",
    content: "React is a JavaScript library used to build UI. It uses components, hooks, and virtual DOM.",
    author: "Nitya",
  },
  {
    id: 2,
    title: "Understanding React Router",
    desc: "Learn how routing works in React apps.",
    content: "React Router allows navigation between pages without reloading the browser.",
    author: "Nitya",
  },
  {
    id: 3,
    title: "Tailwind CSS Guide",
    desc: "Build modern UI faster with Tailwind CSS.",
    content: "Tailwind is a utility-first CSS framework for building fast and responsive designs.",
    author: "Nitya",
  },
  {
    id: 4,
    title: "Spring Boot",
    desc: "Build modern job Portal backend",
    content: "Spring Boot helps you create backend APIs quickly with minimal configuration.",
    author: "Nitya",
  },
];

function Blog() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="bg-slate-900 text-white min-h-screen p-6">
      
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogData.map((post) => (
          <div
            key={post.id}
            className="bg-slate-800 p-5 rounded-lg shadow-md hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {post.title}
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              {post.desc}
            </p>

            {/* 🔥 Show extra content when clicked */}
            {activeId === post.id && (
              <p className="text-gray-300 text-sm mb-4 transition-all">
                {post.content}
              </p>
            )}

            <p className="text-xs text-gray-500 mb-4">
              By {post.author}
            </p>

            <button
              onClick={() =>
                setActiveId(activeId === post.id ? null : post.id)
              }
              className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700"
            >
              {activeId === post.id ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;