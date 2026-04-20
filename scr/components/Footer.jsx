export default function Footer() {
  

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  const socialLinks = [
    { icon: '💻', label: 'GitHub', href: '#' },
    { icon: '🔗', label: 'LinkedIn', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '📧', label: 'Email', href: '#' },
  ];

  return (
    <footer className="relative mt-20 bg-gradient-to-br from-brown-800 to-brown-900 text-brown-50">
      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-brown-400 via-brown-500 to-brown-600"></div>

      <div className="max-w-6xl px-6 py-16 mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-brown-300">Portfolio</h3>
            <p className="mb-6 text-sm leading-relaxed text-brown-100">
              A creative developer crafting elegant digital experiences with modern technologies and innovative solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 text-lg transition-colors duration-300 rounded-lg bg-brown-700 hover:bg-brown-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-brown-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300 text-brown-100 hover:text-brown-300"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-brown-300">Services</h4>
            <ul className="space-y-3 text-sm text-brown-100">
              <li className="transition-colors duration-300 hover:text-brown-300">• Web Development</li>
              <li className="transition-colors duration-300 hover:text-brown-300">• UI/UX Design</li>
              <li className="transition-colors duration-300 hover:text-brown-300">• Full Stack Development</li>
              <li className="transition-colors duration-300 hover:text-brown-300">• Responsive Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-brown-300">Get In Touch</h4>
            <div className="space-y-4 text-sm text-brown-100">
              <p>
                <span className="font-semibold text-brown-400">Email:</span><br />
                <a href="mailto:your.email@example.com" className="transition-colors duration-300 hover:text-brown-300">
                  your.email@example.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-brown-400">Location:</span><br />
                Your City, Your Country
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-brown-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between text-sm md:flex-row text-brown-200">
          <p>
           By-Sanket Kumar 
          </p>
          <p className="mt-4 md:mt-0">
            Designed & Built with <span className="text-brown-400">❤️</span> using React & Tailwind CSS
          </p>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-2 text-sm font-semibold transition-all duration-300 transform rounded-lg text-brown-900 bg-brown-400 hover:bg-brown-300 hover:scale-105"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
