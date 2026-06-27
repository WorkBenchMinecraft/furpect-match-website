import cat from "/src/assets/images/cat.png";

function GuardianSignUp2() {
    return (
        <>
            <title>Sign Up</title>
            <div className="flex flex-col gap-4 items-center justify-stretch pt-10 bg-white min-h-screen">
                <div className="flex gap-1 p-5 rounded-xl items-center w-180 bg-white border-2 border-gray-200">
                    <div className="flex flex-col gap-1 p-5 rounded-xl items-stretch justify-between w-100 bg-white">
                        <div className="w-full p-2">
                            <h2 className="font-bold text-2xl">Tell Us About You</h2>
                            <p>This helps us find the perfect pet for you.</p>
                        </div>
                        <div className="flex flex-col text-left gap-3 py-5">
                            <div className="flex flex-col items-stretch">
                                <label>Age</label>
                                <input id="age" name="age" type="text" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base rounded-xl border-2 border-taupe-700"></input>
                            </div>
                            <div className="flex flex-col items-stretch">
                                <label>Housing Type</label>
                                <input id="housing" name="housing" type="text" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base rounded-xl border-2 border-taupe-700"></input>
                            </div>
                            <div className="flex flex-col items-stretch">
                                <label>Activity Level</label>
                                <input id="activitylevel" name="activitylevel" type="text" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base rounded-xl border-2 border-taupe-700"></input>
                            </div>
                            <div className="flex flex-col items-stretch">
                                <label>Experience with Pets</label>
                                <input id="confirmpassword" name="confirmpassword" type="text" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base rounded-xl border-2 border-taupe-700"></input>
                            </div>
                            <div className="flex flex-col items-stretch">
                                <label>Preferred Pet</label>
                                <div className="flex items-center justify-center gap-3 pt-3">
                                    <div className="flex flex-col w-20 items-center rounded-xl border-2 border-taupe-700 p-2">
                                        <span className="fi fi-sr-dog text-taupe-700 text-4xl"></span>
                                        <p>Dog</p>
                                    </div>
                                    <div className="flex flex-col w-20 items-center rounded-xl border-2 border-taupe-700 p-2">
                                        <span className="fi fi-sr-cat text-taupe-700 text-4xl"></span>
                                        <p>Cat</p>
                                    </div>
                                    <div className="flex flex-col w-20 items-center rounded-xl border-2 border-taupe-700 p-2">
                                        <span className="fi fi-sr-rabbit text-taupe-700 text-4xl"></span>
                                        <p>Others</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href='/guardian-sign-up-3' className="btn bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-2 rounded-xl border-2 border-taupe-700">
                            <span className="leading-none">Continue</span>
                        </a>
                    </div>
                    <div className="flex flex-col gap-1 p-5 rounded-xl items-center justify-between w-80 bg-taupe-200">
                        <div className="flex flex-col pb-10">
                            <div className="items-center gap-4 pt-2 pb-10 text-left">
                                <h2 className="font-bold text-2xl">Why we ask?</h2>
                                <p>These details help our AI match you with pets that suit your lifestyle.</p>
                            </div>
                        </div>
                        <img src={cat} width="220" className="rounded-3xl shadow-lg/20 shadow-taupe-500/50" alt="Mock Up" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuardianSignUp2