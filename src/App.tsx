import './App.css'
import furpectlogo from './assets/furpectlogo.svg'

function App({ children }: any): import("react").JSX.Element {
  return (
    <>
      <header className="navbar bg-gray-50 flex gap-4 items-center justify-between mb-4 border-b-1 border-taupe-500 p-2">

        <a href='/' className="pl-5"><img src={furpectlogo} width="128" className="furpect" alt="Furpect logo" /></a>

        <div className="flex gap-4 items-center justify-center text-black">
          <a href='/pet-guardian'>For Pet Guardian</a>
          <a href='/pet-provider'>For Pet Provider</a>
          <a href='/how-it-works'>How It Works</a>
          <a href='/resources'>Resources</a>
          <a href='/about-us'>About Us</a>
        </div>

        <div className="flex gap-4 items-center pr-5">
          <a href='/log-in' className="bg-gray-50 hover:bg-taupe-100 text-black py-2 px-4 rounded-xl border-2 border-taupe-700 py-1 px-5">Log In</a>
          <a href='/sign-up' className="bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-4 rounded-xl border-2 border-taupe-700 py-1 px-5">Sign Up</a>
        </div>

      </header>

      <main>
        {children}
      </main>

      <footer>(c) 2026 PawMatch</footer>
    </>
  )
}

export default App
