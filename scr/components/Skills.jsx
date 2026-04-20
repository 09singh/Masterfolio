export default function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
    },

    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB',  'REST APIs']
    },
    {
      category: 'Tools & More',
      skills: ['Git', 'Netify', 'Vercel', 'Render', 'VSCode','MongoDB Atlas']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-brown-100">
      <div className="max-w-6xl px-5 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-black">Skills & Expertise</h2>
          <div className="w-16 h-1 mx-auto bg-brown-400"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="p-8 transition-all duration-300 border-t-4 rounded-lg shadow-md bg-brown-50 hover:shadow-xl hover:-translate-y-2 border-brown-400">
              <h3 className="mb-6 text-2xl font-bold text-brown-400">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-full bg-brown-200 text-brown-900 border-brown-300 hover:bg-brown-400 hover:text-white hover:border-brown-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
