export default function TailwindCSS() {
    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white font-sans">
      <FlexboxGrid />

      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
          Tailwind CSS Playground
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Belajar Tailwind dengan tampilan modern, clean, dan super estetik 🚀
        </p>
        <button className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition transform px-8 py-3 rounded-full font-semibold shadow-2xl">
          Explore Now
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-12">
        <Spacing />
        <Typography />
        <BorderRadius />
        <BackgroundColors />
        <ShadowEffects />
      </div>
    </div>
  );
}


function Spacing() {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
      <h2 className="text-lg font-semibold">Spacing Card</h2>
      <p className="mt-2 text-gray-300">
        Padding & margin bikin layout lebih rapi dan nyaman dilihat.
      </p>
    </div>
  );
}

function Typography() {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
      <h1 className="text-2xl font-bold text-blue-300">Typography</h1>
      <p className="mt-2 text-gray-300">
        Font size, weight, dan color bikin UI makin hidup.
      </p>
    </div>
  );
}

function BorderRadius() {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl flex gap-4 justify-center">
      <button className="px-5 py-2 border border-cyan-300 text-cyan-300 rounded-full hover:bg-cyan-300 hover:text-slate-900 transition">
        Rounded
      </button>
      <button className="px-5 py-2 border border-blue-400 text-blue-400 rounded-xl hover:bg-blue-400 hover:text-slate-900 transition">
        Soft
      </button>
    </div>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-2xl shadow-2xl hover:scale-105 transition">
      <h3 className="text-xl font-bold">Gradient Colors</h3>
      <p className="mt-2 text-white/90">
        Warna gradient bikin UI lebih modern dan eye-catching.
      </p>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-cyan-300">MyWebsite</h1>
      <ul className="flex gap-6 text-sm">
        <li><a href="#" className="hover:text-cyan-300 transition">Home</a></li>
        <li><a href="#" className="hover:text-cyan-300 transition">About</a></li>
        <li><a href="#" className="hover:text-cyan-300 transition">Contact</a></li>
      </ul>
    </nav>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition transform">
      <h3 className="text-xl font-semibold">Interactive Card</h3>
      <p className="text-gray-300 mt-2">
        Hover buat lihat efek shadow + floating.
      </p>
    </div>
  );
}