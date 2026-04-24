import React from "react";
import heroImg from "../assets/hero.png";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-20 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About This Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome to my blog where I share knowledge about React, Web Development,
          and modern technologies.
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="bg-white rounded-xl shadow-md p-8 md:flex items-center gap-10">

        {/* IMAGE */}
        <img
          src={heroImg}
          alt="about"
          className="w-full md:w-[350px] rounded-xl object-cover mb-6 md:mb-0"
        />

        {/* TEXT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Hi, I'm Nitya 👋
          </h2>

          <p className="text-gray-600 mb-4">
            I'm a passionate developer who loves building web applications using
            React, and modern tools. This blog is my space to share what
            I learn and help others grow in tech.
          </p>

          <p className="text-gray-600 mb-4">
            Here you'll find tutorials, tips, and real-world projects related to:
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>React & Frontend Development</li>
            <li>Backend Development (Node / APIs)</li>
            <li>Full Stack Projects</li>
            <li>Best Practices & Tips</li>
          </ul>
        </div>
      </div>

      {/* EXTRA SECTION */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why This Blog?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I created this blog to simplify complex topics and provide practical
          examples so that beginners and developers can learn faster and build
          real-world applications.
        </p>
      </div>

    </div>
  );
}

export default About;



// const getjob = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/api/jobs/getjob")
//       console.log(res.data)
//       const def = res.data
//       console.log(def)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     getjob()
//   }, [])  