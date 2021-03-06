import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "@/components/Nav";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Trade or Tighten</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-7xl">
            <span className="block xl:inline">Trade or </span>{" "}
            <span className="block text-indigo-600 xl:inline">Tighten</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A game for quants made by quants. Market-making on facts galore.
          </p>
          <div className="mt-8 sm:max-w-2xl sm:mx-auto sm:text-center">
            <p className="text-base font-medium text-gray-900">
              Join / Create a Room
            </p>
            <form action="#" method="POST" className="mt-3 sm:flex">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1"
                placeholder="Enter a room name"
              />
              <button
                type="submit"
                className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                Join Room
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              How do you play this game?
              <a href="#" className="font-medium text-blue-500 underline ml-2">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
