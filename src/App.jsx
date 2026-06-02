import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 to-slate-900 text-gray-300 font-mono selection:bg-green-500 selection:text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md p-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-green-400 font-bold text-xl tracking-tighter">
            ~/sausage-dog
          </span>
          <div className="space-x-8 text-sm hidden md:block">
            <a href="#about" className="hover:text-green-400 transition-colors">
              ./about
            </a>
            <a
              href="#projects"
              className="hover:text-green-400 transition-colors"
            >
              ./projects
            </a>
            <a
              href="#contact"
              className="hover:text-green-400 transition-colors"
            >
              ./contact
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6 md:p-12">
        {/* Terminal / Hero Section */}
        <section id="about" className="py-12">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-xl/50">
            {/* Terminal Window Controls */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Terminal Content */}
            <div className="space-y-4 text-sm md:text-base">
              <p>
                <span className="text-green-400">sausage-dog@portfolio</span>:
                <span className="text-blue-400">~</span>$ whoami
              </p>
              <div className="flex flex-row gap-12 w-ful">
                <div className="flex flex-col gap-y-8 w-full">
                  <h1 className="text-gray-100 text-2xl md:text-4xl font-bold mt-2">
                    Hi, I'm{" "}
                    <span className="underline bg-gradient-to-r to-green-700">
                      Sausage Dog.
                    </span>
                  </h1>
                  <img
                    src="./sausage-dog-portfolio/src/assets/pfp-github.jpg"
                    alt="Avatar"
                    class="w-80 h-80 rounded-full object-cover shadow-xl/2 md:hover:rotate-360 transition-transform duration-5000"
                  />
                </div>
                <p className="my-42 text-gray-400 leading-relaxed max-w-2xl">
                  I am sausage dog. I love eating sausages. Me drive sausage
                  car. Vroom vroom. Here I go. Yahoo. Wee. Vroom. Go go. Sausage
                  car fast. Vroom.
                </p>
              </div>

              <p className="mt-6">
                <span className="text-green-400">sausage-dog@portfolio</span>:
                <span className="text-blue-400">~</span>$ dog skills.json
              </p>
              <p className="text-yellow-300">
                ["C++", "C", "Python", "Javascript"]
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2 flex items-center gap-2">
            <span className="text-green-400">#</span> Featured_Builds
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-green-400 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-green-400">
                Sausage Dog Racing Simulator
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Drive in sausage car and destroy your enemies with your wrath.
              </p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  Assembly
                </span>
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  Warm-up
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-green-400 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-green-400">
                Dog Sunbathing
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Dog under the sun bathing. Nice sunglasses. Maybe dog should
                jump in pool.
              </p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  Malbolge
                </span>
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  Fun
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-green-400 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-green-400">
                Garfield
              </h3>
              <p className="text-sm text-gray-400 mb-6">Cat.</p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  C
                </span>
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  Cat
                </span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-green-400 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-green-400">
                Good Morning
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Sibuk ngerjain tugas.
              </p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  ELOK
                </span>
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  Simaster
                </span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-green-400 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-green-400">
                Banana
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                The author put this here because he likes to eat bananas..
              </p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  C++
                </span>
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  Microarchitecture
                </span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-green-400 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-green-400">
                Hot Wheels
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Flaming Hot Wheels? Wowie! Come on down to Dog Town to go for a
                ride in this mystical adventure!
              </p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  Verilog
                </span>
                <span className="bg-gray-800 border border-gray-700 px-2 py-1 rounded">
                  TempleOS
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="contact" className="py-16">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2 flex items-center gap-2">
            <span className="text-green-400">#</span> Contact_Me
          </h2>
          <form>
            <div className="space-y-12">
              <div className="border-b border-white/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm/6 font-medium text-white"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Not Sausage Dog"
                          className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm/6 font-medium text-white"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="notsausagedog@hotmail.com"
                          className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm/6 font-medium text-white"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-3 text-sm/6 text-gray-400">
                      Feel free to criticize me but do not impersonate me.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm/6 font-semibold text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
