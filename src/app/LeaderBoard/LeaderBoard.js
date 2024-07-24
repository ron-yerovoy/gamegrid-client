import Head from 'next/head';

export default function NiceTitlePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>My Awesome Page</title>
        <meta name="description" content="A page with a nice title and styling." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Welcome to My Awesome Page
        </h1>
        <p className="text-lg text-gray-700">
          This is a beautifully styled page with a nice title. Feel free to explore and enjoy the content!
        </p>
      </main>
    </div>
  );
}
