import mockup from "/src/assets/images/mockup.png";

function Homepage() {

    return (
        <>
            <title>Homepage</title>
            <div className="flex gap-4 items-center justify-between pl-20 pr-10 pt-8 bg-[url(/src/assets/images/fpmbg.png)]">
                <div div className="justify-center flex flex-col w-1/2 p-1">
                    <div className="flex flex-col text-left w-100">
                        <div className="flex gap-2 items-center justify-center p-1 bg-taupe-400 border border-taupe-400 rounded-full w-70 text-taupe-800">
                            <span className="fi fi-sr-user-add"></span><p className="m-0">For Pet Guardians & Providers</p>
                        </div>
                        <h1 className="font-bold text-5xl">Connecting Pets with People, </h1>
                        <h1 className="font-bold text-yellow-700 text-5xl">Together.</h1>
                        <p className="py-3">Furpect is the all-in-one adoption platform that brings adopters and providers together to create happy, lifelong matches.</p>
                        <div className="flex gap-6 justify-center pr-5">
                            <a href='/guardian-log-in' className="btn bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-2 rounded-xl border-2 border-taupe-700">
                                <div className="flex items-center gap-2">
                                    <span className="fi fi-sr-paw"></span>
                                    <span className="leading-none">I Want to Adopt</span>
                                </div>
                            </a>
                            <a href='/provider-log-in' className="btn bg-gray-50 hover:bg-taupe-100 text-black py-2 px-2 rounded-xl border-2 border-taupe-700">
                                <div className="flex items-center gap-2">
                                    <span className="fi fi-sr-building"></span>
                                    <span className="leading-none">I'm a Pet Provider</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-center flex flex-col w-1/2 p-1 gap-3">
                    <img src={mockup} width="450" className="rounded-3xl shadow-lg/20 shadow-taupe-500/50" alt="Mock Up" />
                    <div className="items-center justify-center w-150 flex gap-1 rounded-3xl p-2 pl-6 border-2 border-gray-50 bg-gray-50">
                        <div className="justify-center items-center flex gap-2 w-1/3">
                            <span className="fi fi-sr-heart p-2 size-10 text-xl rounded-full bg-violet-100 text-purple-500"></span>
                            <div className="justify-center flex flex-col w-30 text-left">
                                <h3>16K+</h3><p>Pets Adopted</p>
                            </div>
                        </div>
                        <div className="justify-center items-center flex gap-2 w-1/3">
                            <span className="fi fi-sr-shield-check pt-2 text-4xl rounded-full text-lime-500"></span>
                            <div className="justify-center flex flex-col w-40 text-left">
                                <h3>2.5K+</h3><p className="w-50">Verified Providers</p>
                            </div>
                        </div>
                        <div className="justify-center items-center flex gap-2 w-1/3">
                            <span className="fi fi-sr-users p-2 size-10 text-xl rounded-full bg-amber-400 text-white"></span>
                            <div className="justify-center flex flex-col w-30 text-left">
                                <h3>18K+</h3><p>Happy Families</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-between pt-3">
                <div className="flex flex-col items-center justify-center w-300 p-2 pl-6">
                    <h2 className="font-bold text-xl">Why Choose Furpect Match?</h2>
                    <div className="items-center justify-center w-300 flex gap-10 p-2 px-5">
                        <div className="justify-center items-center flex w-90 text-left gap-3">
                            <span className="fi fi-sr-sparkles p-4 rounded-full bg-violet-300 size-16 text-white text-3xl"></span>
                            <div className="justify-center flex flex-col w-40 text-left">
                                <h5 className="font-bold text-xl">Smart Watching</h5>
                                <p className="w-50">AI-Powered Matching to find the perfect pet for you.</p>
                            </div>
                        </div>
                        <div className="justify-center items-center flex w-90 text-left gap-3">
                            <span className="fi fi-br-shield-check p-4 rounded-full bg-lime-500 size-16 text-white text-3xl"></span>
                            <div className="justify-center flex flex-col w-40 text-left">
                                <h5 className="font-bold text-xl">Verified Providers</h5>
                                <p className="w-50">All Providers are verified to ensure safety and trust.</p>
                            </div>
                        </div>
                        <div className="justify-center items-center flex w-90 text-left gap-3">
                            <span className="fi fi-sr-heart p-4 rounded-full bg-amber-400 size-16 text-white text-3xl"></span>
                            <div className="justify-center flex flex-col w-40 text-left">
                                <h5 className="font-bold text-xl">Easy Adoption</h5>
                                <p className="w-50">Simple steps from discovery to adoption.</p>
                            </div>
                        </div>
                        <div className="justify-center items-center flex w-90 text-left gap-3">
                            <span className="fi fi-sr-bubble-discussion p-4 rounded-full bg-blue-300 size-16 text-white text-3xl"></span>
                            <div className="justify-center flex flex-col w-40 text-left">
                                <h5 className="font-bold text-xl">Ongoing Support</h5>
                                <p className="w-50">We're here to support you every step to the way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage