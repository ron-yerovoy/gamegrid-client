import React from 'react';

const HomeHeader = () => {
  return (
    <header className="bg-gradient-to-r from-black to-blue-800 shadow-lg">
      <nav className="mx-auto flex items-center justify-between p-8">

        <div className="flex-grow flex justify-center space-x-12">
          <a
            href="/HomePage/LeaderBoard"
            className="text-white text-xl font-semibold py-3 px-10 rounded-lg bg-black hover:bg-blue-900 transition duration-300 transform hover:scale-105"
          >
            Leaderboards
          </a>
          <a
            href="/HomePage/Squad"
            className="text-white text-xl font-semibold py-3 px-10 rounded-lg bg-black hover:bg-blue-900 transition duration-300 transform hover:scale-105"
          >
            Squad
          </a>
          <a
            href="/HomePage"
            className="text-white text-xl font-semibold py-3 px-10 rounded-lg bg-black hover:bg-blue-900 transition duration-300 transform hover:scale-105"
          >
            MyLobby

          </a>
          
        </div>
      </nav>
    </header>
  );
}

export default HomeHeader;
