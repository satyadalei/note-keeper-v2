import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black min-h-screen" >
      <Head>
        <title>Movie </title>
        <meta name="description" content="A movie web application" />
      </Head>

       <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center" >
          <h1 className="text-4xl font-bold mb-8 text-white" >Movie</h1>
       </main>

    </div>
  )
}
