export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl px-5 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-black">About Me</h2>
          <div className="w-16 h-1 mx-auto bg-brown-400"></div>
        </div>

        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-lg leading-relaxed text-brown-700">
              I'm a passionate full-stack developer with a creative mindset. I believe in crafting elegant solutions to complex problems and creating digital experiences that users love.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-brown-700">
              With expertise in modern web technologies, I help businesses and individuals bring their ideas to life. I'm committed to continuous learning and staying updated with the latest industry trends.
            </p>
            <p className="text-lg leading-relaxed text-brown-700">
              When I'm not coding, I enjoy exploring new design trends, contributing to open-source projects, and sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 transition-all duration-300 border-l-4 rounded-lg bg-brown-100 border-brown-400 hover:shadow-lg hover:-translate-y-1">
              <h3 className="mb-2 text-3xl font-bold text-brown-400">800+</h3>
              <p className="text-brown-700">Hours of Coding Practice</p>
            </div>
            <div className="p-8 transition-all duration-300 bg-white border-l-4 rounded-lg border-brown-400 hover:shadow-lg hover:-translate-y-1">
              <h3 className="mb-2 text-3xl font-bold text-brown-400">7+</h3>
              <p className="text-brown-700">Projects Completed</p>
            </div>
            <div className="p-8 transition-all duration-300 bg-white border-l-4 rounded-lg border-brown-400 hover:shadow-lg hover:-translate-y-1">
              <h3 className="mb-2 text-3xl font-bold text-brown-400">200+</h3>
              <p className="text-brown-700">Git-hub Commits</p>
            </div>
            <div className="p-8 transition-all duration-300 bg-white border-l-4 rounded-lg border-brown-400 hover:shadow-lg hover:-translate-y-1">
              <h3 className="mb-2 text-3xl font-bold text-brown-400">10+</h3>
              <p className="text-brown-700">Technologies Learned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
