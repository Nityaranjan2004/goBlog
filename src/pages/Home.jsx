import react1 from '../assets/react down 1.jpg'
import react2 from '../assets/react down 2.png'
import react3 from '../assets/react down 3.png'
import react4 from '../assets/react down 4.jpg'

function Home() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      desc: "Learn the basics of React and build your first app.",
      img: react1,
    },
    {
      id: 2,
      title: "Understanding React Router",
      desc: "Learn how routing works in React apps.",
      img: react2,
    },
    {
      id: 3,
      title: "Tailwind CSS Guide",
      desc: "Style your apps quickly using Tailwind CSS.",
      img: react3,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="bg-white py-16 px-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog ✍️</h1>
        <p className="text-gray-600">
          Read articles about React, Web Development & Tech
        </p>
      </div>

      {/* FEATURED BLOG */}
      <div className="px-10 py-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Post</h2>

        <div className="bg-white rounded-xl shadow-md overflow-hidden md:flex">
          <img
            src={react4}
            className="w-full md:w-1/2 object-cover"
            alt="featured"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Master React in 30 Days
            </h3>
            <p className="text-gray-600 mb-4">
              A complete roadmap to become a React developer.
            </p>
            <button className="text-purple-600 font-semibold">
              Read More →
            </button>
          </div>
        </div>
      </div>

      {/* BLOG LIST */}
      <div className="px-10 py-10">
        <h2 className="text-2xl font-semibold mb-6">Latest Blogs</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={blog.img}
                className="rounded-t-xl w-full h-[200px] object-cover"
                alt={blog.title}
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-3">{blog.desc}</p>
                <button className="text-purple-600">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-gray-900 text-white text-center py-6">
        © 2026 My Blog
      </div>
    </div>
  );
}

export default Home;
