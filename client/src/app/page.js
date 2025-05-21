import CommitForm from "../components/CommitForm";

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
            CommitPal
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in animation-delay-200">
            Craft perfect Conventional Commit messages with AI in seconds.
          </p>
          <a
            href="#generate"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300 animate-slide-in animation-delay-400"
          >
            Generate Your Commit Now
          </a>
        </div>
      </section>

      {/* Commit Form Section */}
      <section id="generate" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-fade-in">
            Generate Your Commit Message
          </h2>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md max-w-lg mx-auto animate-slide-in animation-delay-200">
            <CommitForm />
          </div>
        </div>
      </section>

      {/* ColorSnap Notification */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-4 rounded-lg shadow-md animate-slide-in animation-delay-400">
            <p className="text-gray-600 mb-4">
              I made <span className="font-semibold">ColorSnap</span> to skip
              the hassle of screenshots and hex codes. Just upload an image and
              get Tailwind-ready colors instantly.
            </p>

            <a
              href="https://color-snap-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-200"
            >
              Try ColorSnap Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
            Why Choose CommitPal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-slide-in animation-delay-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                AI-Powered Precision
              </h3>
              <p className="text-gray-600">
                Advanced AI generates accurate Conventional Commit messages
                tailored to your changes.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-slide-in animation-delay-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Input your change, get a commit message, and copy it in seconds.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md animate-slide-in animation-delay-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Completely Free
              </h3>
              <p className="text-gray-600">
                Built with free-tier services, CommitPal is accessible to all
                developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">
            Connect with Me
          </h2>
          <p className="text-lg mb-8 animate-fade-in animation-delay-200">
            Follow me on X for updates on CommitPal and other projects. I’m open
            to work—reach out to collaborate!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in animation-delay-400">
            <a
              href="https://x.com/kingvyn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition-all duration-200"
            >
              Follow on X
            </a>
            <a
              href="mailto:josmeleph@gmail.com"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
