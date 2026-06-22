import './App.css'
import mockup from './assets/mockup.png'

function Index() {

  return (
    <>
      <div className="flex gap-4 items-center justify-between pl-20 pr-10">
        <div className="flex flex-col text-left w-90 pt-15">
          <h1 className="font-bold text-5xl">Connecting Pets with People, </h1>
          <h1 className=" font-bold text-yellow-700 text-5xl">Together.</h1>
          <p className="py-3">Furpect is the all-in-one adoption platform that brings adopters and providers together to create happy, lifelong matches.</p>
          <div className="flex gap-4 items-center pr-5">
            <a href='/pet-guardian' className="bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-4 rounded-sm border-2 border-taupe-700 py-1 px-5">I Want to Adopt</a>
            <a href='/pet-provider' className="bg-gray-50 hover:bg-taupe-100 text-black py-2 px-4 rounded-sm border-2 border-taupe-700 py-1 px-5">I'm a Pet Provider</a>
          </div>
        </div>
        <div className="flex flex-col w-90 pt-15">
        <img src={mockup} width="1080" className="furpect" alt="Furpect logo" />
        <div>
          <div>

          </div>
          <div>

          </div>
          <div>
            
          </div>
        </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-between mb-4 border-b-1 border-taupe-500 p-2">
        <h2 className="">Why Choose Furpect Match?</h2>
      </div>
    </>
  )
}

export default Index
