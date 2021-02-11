import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg">
        <section className="container w-full h-full mx-auto text-white">
          <div className="flex flex-col items-center justify-center w-full h-full mt-12">
            <h1 className="mb-12 font-bold leading-snug text-9xl text-primary">
              LeVeL up
              <br /> <span className="ml-72">your life</span>
            </h1>
            <p className="mb-20 font-semibold text-primary">
              LeVel makes local art more accessible for local art lovers. No
              subscription required.
            </p>
            <button className="px-10 py-2 text-lg font-bold uppercase border-2 border-solid rounded-full border-primary hover:bg-transparent hover:text-primary bg-primary text-secondary focus:outline-none">
              Explore Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
