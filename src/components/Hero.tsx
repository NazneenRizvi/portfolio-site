export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Syeda Nazneen Rizvi
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8">
          Front-end Developer
          </h2>
          <a 
            href="#contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
    );
  }