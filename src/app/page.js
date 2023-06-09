import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/98.css" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="window" style={{ width: 400 }}>
          <div className="title-bar">
            <div className="title-bar-text">Kevin Kuse</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <p>Freiberuflicher Video Editor aus Wiesbaden</p>
          </div>
        </div>
      </main>
    </>
  );
}
