

export default function HomePage() {

  return (
    <div className="">
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 p-4">
          <div className="flex justify-center space-x-4">
            <a
              href="./LeaderBoard"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Leaderboard
            </a>
            <a
              href="/lobby"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Lobby
            </a>
            <a
              href="/squad"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Squad
            </a>
          </div>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center p-24">
          <h1></h1>
          <p>******** to be continue ********</p>
          <p>Some information about us.</p>

        </main>
      </div>
    </div>
  );
}
