// app/page.tsx

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-10">
      <div className="text-center max-w-2xl p-10 bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700">
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
          Site Under Maintenance
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          We are currently performing scheduled maintenance to improve your
          experience.
          <br /> Please check back soon!
        </p>

        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-400 mx-auto mb-8"></div>

        <p className="text-sm text-gray-500">
          Thank you for your patience — we’ll be back shortly.
        </p>
        <div className="mt-10">
          <a
            href="/collado/instructions"
            className="text-blue-400 hover:text-blue-300 underline text-lg"
          >
            Colado Instructions
          </a>
        </div>
      </div>
    </main>
  );
}
