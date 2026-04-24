import React, { useState,useEffect } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
  emailjs.init("Y7uiVyBtNkjOQp6Oi");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_ce5e6lf",
      "template_m3jd1gm",
      form
      
      
    )
    .then(() => {
      setSuccess("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    })
   .catch((error) => {
  console.error("FULL ERROR:", error);
  alert(error.text || JSON.stringify(error));
  setLoading(false); // 👈 add this
});
  };

  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-20 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Me 📩</h1>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full border p-3 rounded-lg"
          />

          <button
            disabled={loading}
            className="w-full bg-purple-600 text-white py-3 rounded-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        {success && (
          <p className="mt-4 text-center text-green-600">{success}</p>
        )}
      </div>
    </div>
  );
}

export default Contact;