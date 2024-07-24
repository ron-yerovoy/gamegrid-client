import Head from 'next/head';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>HomePage</title>
        <meta name="description" content="Homepage with a centered navigation bar." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Enhanced Navbar */}
      <header className="bg-gradient-to-r from-black to-blue-800 shadow-lg">
        <nav className="container mx-auto flex items-center justify-between p-8">
          <div className="text-white text-3xl font-bold">
            MyLobby
          </div>
          <div className="flex-grow flex justify-center space-x-6">
            <a
              href="/HomePage/LeaderBoard"
              className="text-white text-xl font-semibold py-3 px-6 rounded-lg bg-black hover:bg-blue-900 transition duration-300 transform hover:scale-105"
            >
              Leaderboards
            </a>
            <a
              href="/HomePage"
              className="text-white text-xl font-semibold py-3 px-6 rounded-lg bg-blue-900 shadow-lg border-2 border-blue-800 transform scale-105"
            >
              Lobby
            </a>
            <a
              href="/HomePage/Squad"
              className="text-white text-xl font-semibold py-3 px-6 rounded-lg bg-black hover:bg-blue-900 transition duration-300 transform hover:scale-105"
            >
              Squad
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-6">
          Welcome to MyApp
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Explore the features and pages of our amazing app!
        </p>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
