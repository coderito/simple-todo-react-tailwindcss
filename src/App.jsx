import { CrossIcon, MoonIcon } from "./components/icons";

function App() {
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
            Todo
          </h1>
          <button><MoonIcon/></button>
        </div>
        <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>

      <main className="container mx-auto mt-8 px-4 ">
        <div className="rounded-md bg-white [&>article]:p-4">
          <article className="flex gap-4 py-4 border-b border-b-gray-300">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">
              Complete online Javascrip curso bluwweb
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
         
          <article className="flex gap-4 border-b border-b-gray-300">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">
              Complete online Javascrip curso bluwweb
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 border-b border-b-gray-300">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">
              Complete online Javascrip curso bluwweb
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          
          <section className="py-4 px-4 text-gray-500 flex justify-between">
            <span >5 item lef</span>
            <button>Clear complete</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
        <button className="text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button className="hover:text-blue-600">Complete</button>
        </div>
        
      </section>

      <p className="text-center mt-8">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
