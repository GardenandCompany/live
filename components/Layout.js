import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Garden & Company</title>
        <meta name="description" content="Premium outdoor furniture" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-green-800">Garden & Company</h1>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
        <footer className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">
            © 2025 Garden & Company. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
