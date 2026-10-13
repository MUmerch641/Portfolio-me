export default function ContactForm() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">GET IN TOUCH</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Let's Work Together</h3>
          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12">
            Have a project in mind? Feel free to reach out. Here's how you can contact me:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Email</h4>
            </div>
            <a 
              href="mailto:muhammad.umer.official3@gmail.com"
              className="text-purple-400 hover:text-purple-300 transition text-base sm:text-lg break-all"
            >
              muhammad.umer.official3@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Phone</h4>
            </div>
            <a 
              href="tel:+923457304065"
              className="text-purple-400 hover:text-purple-300 transition text-base sm:text-lg"
            >
              +92 345 7304065
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
