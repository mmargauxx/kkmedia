export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24 bg-teal-700">
        <div className="window w-[400px]">
          <div className="title-bar">
            <div className="title-bar-text">Kevin</div>
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

        <div className="window-body w-96 min-w-full">
          <menu role="tablist">
            <li role="tab" aria-selected="true">
              <a href="#tabs">Portfolio</a>
            </li>
            <li role="tab" className="bg-[#c0c0c0]">
              <a href="#tabs">Kunden</a>
            </li>
            <li role="tab" className="bg-[#c0c0c0]">
              <a href="#tabs">About</a>
            </li>
            <li role="tab" className="bg-[#c0c0c0]">
              <a href="#tabs">Kontakt</a>
            </li>
          </menu>

          <div className="window" role="tabpanel">
            <div className="window-body">
              <h1 className="text-2xl">Aktuelles Projekt:</h1>
              <div className="flex flex-col lg:flex-row justify-center gap-4">
                <p>
                  #letsdrivemercedes <br></br>
                  Matthias Malmedie besucht das G-Class Experience Center
                  Mercedes-Benz Deutschland 2023 Matthias Malmedie besucht das
                  G-Class Experience Center in Graz, dem Geburtsort der
                  G-Klasse.
                </p>
                <iframe
                  className="w-full lg:w-[1000px] min-h-min lg:h-[300px]"
                  src="https://www.youtube.com/embed/2aTu5DK2zSM"
                ></iframe>
              </div>
            </div>

            <div className="p-4">
              <h1 className="text-2xl">Mein Portfolio</h1>
              <div className="sunken-panel h-64 w-full">
                <table className="interactive w-full">
                  <thead>
                    <tr>
                      <th>Kampagne</th>
                      <th>Kunde</th>
                      <th>Produktion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        #letsdrivemercedes Mercedes-Benz Deutschland ab 2018
                      </td>
                      <td>Mercedes-Benz Deutschland</td>
                      <td>KK Media</td>
                    </tr>
                    <tr>
                      <td>#MeinMercedes Mercedes-Benz Deutschland ab 2019</td>
                      <td>Mercedes-Benz Deutschland</td>
                      <td>KK Media</td>
                    </tr>
                    <tr>
                      <td>
                        Elektromobilität: Mercedes-Benz Deutschland ab 2018
                      </td>
                      <td>Mercedes-Benz Deutschland</td>
                      <td>KK Media</td>
                    </tr>
                    <tr>
                      <td>Inside AMG Mercedes-AMG ab 2019</td>
                      <td>Mercedes-AMG for Basti Hansen</td>
                      <td>KK Media</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
