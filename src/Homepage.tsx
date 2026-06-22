import './App.css'
import mockup from './assets/mockup.png'
import useradd from './assets/icons/useradd.svg'

function Homepage() {

  return (
    <>
      <title>Homepage</title>
      <div className="flex gap-4 items-center justify-between pl-20 pr-10">
        <div div className="justify-center flex flex-col w-1/2 pt-5">
          <div className="flex flex-col text-left w-90 pt-15">
            <div className="flex gap-2 items-center justify-center p-1 bg-taupe-400 border border-taupe-400 rounded-full w-70 text-taupe-800"><img src={useradd} width="20" className="useradd" alt="User Add" /><p className="m-0">For Pet Guardians & Providers</p></div>
            <h1 className="font-bold text-5xl">Connecting Pets with People, </h1>
            <h1 className=" font-bold text-yellow-700 text-5xl">Together.</h1>
            <p className="py-3">Furpect is the all-in-one adoption platform that brings adopters and providers together to create happy, lifelong matches.</p>
            <div className="flex gap-4 items-center pr-5">
              <a href='/pet-guardian' className="bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-4 rounded-xl border-2 border-taupe-700 py-1 px-5">I Want to Adopt</a>
              <a href='/pet-provider' className="bg-gray-50 hover:bg-taupe-100 text-black py-2 px-4 rounded-xl border-2 border-taupe-700 py-1 px-5">I'm a Pet Provider</a>
            </div>
          </div>
        </div>
        <div className="items-center justify-center flex flex-col w-1/2 p-1 gap-3">
          <img src={mockup} width="520" className="rounded-3xl shadow-lg/20 shadow-taupe-500/50" alt="Mock Up" />
          <div className="items-center justify-center w-130 flex gap-1 rounded-3xl p-2 pl-6 border-2 border-gray-50 bg-gray-50">
            <div className="justify-center flex gap-2 w-1/3">
              <img src={useradd} width="30" className="useradd" alt="User Add" />
              <div className="justify-center flex flex-col w-30 text-left">
                <h3>16K+</h3><p>Pets Adopted</p>
              </div>
            </div>
            <div className="justify-center flex gap-2 w-1/3">
              <img src={useradd} width="30" className="useradd" alt="User Add" />
              <div className="justify-center flex flex-col w-40 text-left">
                <h3>2.5K+</h3><p className="w-50">Verified Providers</p>
              </div>
            </div>
            <div className="justify-center flex gap-2 w-1/3">
              <img src={useradd} width="30" className="useradd" alt="User Add" />
              <div className="justify-center flex flex-col w-30 text-left">
                <h3>18K+</h3><p>Happy Families</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-between pt-3">
        <div className="flex flex-col items-center justify-center w-300 flex rounded-3xl p-2 pl-6 border-2 border-gray-50 bg-gray-50">
          <h2 className="font-bold text-xl">Why Choose Furpect Match?</h2>
          <div className="items-center justify-center w-300 flex gap-10 p-2 px-5">
            <div className="justify-center flex w-90 text-left gap-3">
              <img src={useradd} width="30" className="useradd" alt="User Add" />
              <div className="justify-center flex flex-col w-40 text-left">
                <h5 className="font-bold text-xl">Smart Watching</h5>
                <p className="w-50">AI-Powered Matching to find the perfect pet for you.</p>
              </div>
            </div>
            <div className="justify-center flex w-90 text-left gap-3">
              <img src={useradd} width="30" className="useradd" alt="User Add" />
              <div className="justify-center flex flex-col w-40 text-left">
                <h5 className="font-bold text-xl">Smart Watching</h5>
                <p className="w-50">AI-Powered Matching to find the perfect pet for you.</p>
              </div>
            </div>
            <div className="justify-center flex w-90 text-left gap-3">
              <img src={useradd} width="30" className="useradd" alt="User Add" />
              <div className="justify-center flex flex-col w-40 text-left">
                <h5 className="font-bold text-xl">Smart Watching</h5>
                <p className="w-50">AI-Powered Matching to find the perfect pet for you.</p>
              </div>
            </div>
            <div className="justify-center flex w-90 text-left gap-3">
              <img src={useradd} width="30" className="useradd" alt="User Add" />
              <div className="justify-center flex flex-col w-40 text-left">
                <h5 className="font-bold text-xl">Smart Watching</h5>
                <p className="w-50">AI-Powered Matching to find the perfect pet for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
