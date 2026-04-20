import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-brown-50 to-brown-100">
      <div className="max-w-6xl px-5 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-black">Get In Touch</h2>
          <div className="w-16 h-1 mx-auto mb-4 bg-brown-400"></div>
          <p className="max-w-2xl mx-auto text-lg text-brown-700">
            I'd love to hear from you. Whether you have a question or just want to say hi, feel free to get in touch!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="p-6 transition-all duration-300 border-l-4 rounded-lg shadow-md bg-brown-100 border-brown-400 hover:shadow-lg hover:translate-x-2">
              <div className="mb-3 text-3xl">✉️</div>
              <h3 className="mb-2 text-xl font-bold text-black">Email</h3>
              <p className="text-brown-700">singhsanket@gmail.com</p>
            </div>
           
            <div className="p-6 transition-all duration-300 bg-white border-l-4 rounded-lg shadow-md border-brown-400 hover:shadow-lg hover:translate-x-2">
              <div className="mb-3 text-3xl">📍</div>
              <h3 className="mb-2 text-xl font-bold text-black">Location</h3>
              <p className="text-brown-700">India</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="https://www.linkedin.com/in/sanket-kumar-76628732b" className="px-6 py-2 font-semibold transition-all duration-300 border-2 rounded bg-brown-100 text-brown-400 border-brown-400 hover:bg-brown-400 hover:text-white">
                LinkedIn
              </a>
              <a href="https://github.com/09singh" className="px-6 py-2 font-semibold transition-all duration-300 border-2 rounded bg-brown-100 text-brown-400 border-brown-400 hover:bg-brown-400 hover:text-white">
                GitHub
              </a>
              <a href="https://twitter.com/Sanket_Singh09" className="px-6 py-2 font-semibold transition-all duration-300 border-2 rounded bg-brown-100 text-brown-400 border-brown-400 hover:bg-brown-400 hover:text-white">
                Twitter
              </a>
            </div>
          </div>

          <form className="p-8 rounded-lg shadow-md bg-brown-100" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 transition-all duration-300 border rounded border-brown-300 bg-brown-50 focus:outline-none focus:bg-white focus:border-brown-400 focus:shadow-md"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 transition-all duration-300 border rounded border-brown-300 bg-brown-50 focus:outline-none focus:bg-white focus:border-brown-400 focus:shadow-md"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 transition-all duration-300 border rounded resize-none border-brown-300 bg-brown-50 focus:outline-none focus:bg-white focus:border-brown-400 focus:shadow-md"
              ></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-3 bg-brown-400 text-white rounded font-semibold hover:bg-brown-600 transition-all duration-300 hover:-translate-y-0.5">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
