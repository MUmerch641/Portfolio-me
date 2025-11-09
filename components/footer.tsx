export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-gray-500 gap-4">
        <p className="text-center md:text-left">© 2025 Muhammad Umer. Full Stack Developer.</p>
        <div className="flex gap-6 sm:gap-8">
          <a href="mailto:muhammad.umer.official3@gmail.com" className="hover:text-gray-300 transition">
            Email
          </a>
          <a href="https://github.com/MUmerch641" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/muhammad-umer-203b0b337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
