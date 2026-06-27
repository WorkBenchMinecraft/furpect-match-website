function GuardianSignUp1() {
    return (
        <>
            <title>Sign Up</title>
            <div className="flex flex-col gap-4 items-center justify-stretch pt-10 bg-white min-h-screen">
                <div className="flex gap-1 p-5 rounded-xl items-center w-180 bg-white border-2 border-gray-200">
                    <div className="flex flex-col gap-1 p-5 rounded-xl items-stretch justify-between w-100 bg-white">
                        <div className="w-full p-2">
                            <h2 className="font-bold text-2xl">Create Your Account</h2>
                            <p>Let's get started with your details.</p>
                        </div>
                        <div className="flex flex-col text-left gap-3 py-5">
                            <div className="flex flex-col items-stretch">
                                <label>Full name</label>
                                <input id="fullname" name="fullname" type="text" placeholder="Juan Cruz" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base rounded-xl border-2 border-taupe-700"></input>
                            </div>
                            <div className="flex flex-col items-stretch">
                                <label>Email</label>
                                <input id="email" name="email" type="text" placeholder="example@gmail.com" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base rounded-xl border-2 border-taupe-700"></input>
                            </div>
                            <div className="flex flex-col items-stretch">
                                <label>Password</label>
                                <input id="password" name="password" type="text" placeholder="********" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base rounded-xl border-2 border-taupe-700"></input>
                            </div>
                            <div className="flex flex-col items-stretch">
                                <label>Confirm Password</label>
                                <input id="confirmpassword" name="confirmpassword" type="text" placeholder="********" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base rounded-xl border-2 border-taupe-700"></input>
                            </div>
                        </div>
                        <a href='/guardian-sign-up-2' className="btn bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-2 rounded-xl border-2 border-taupe-700">
                            <span className="leading-none">Continue</span>
                        </a>
                        <div className="p-2">
                            <span>Already have an account? </span>
                            <a href='/log-in' className="text-taupe-700 font-bold">Log in</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-5 rounded-xl items-center justify-between w-80 bg-taupe-200">
                        <div className="flex flex-col gap-3 pt-10 pb-30">
                            <div className="pb-4">
                                <h2 className="font-bold text-2xl text-taupe-700">Your Accout Lets You:</h2>
                            </div>
                            <div className="flex justify-between items-center gap-2 py-2">
                                <span className="fi fi-br-search-heart text-taupe-700 text-2xl"></span>
                                <p>Find your perfect pet match.</p>
                            </div>
                            <div className="flex justify-between items-center gap-2 py-2">
                                <span className="fi fi-br-heart text-taupe-700 text-2xl"></span>
                                <p>Save your favorite pets.</p>
                            </div>
                            <div className="flex justify-between items-center gap-2 py-2">
                                <span className="fi  fi-br-user-check text-taupe-700 text-2xl"></span>
                                <p>Connect with trusted providers.</p>
                            </div>
                            <div className="flex justify-between items-center gap-2 py-2">
                                <span className="fi fi-br-wishlist-star text-taupe-700 text-2xl"></span>
                                <p>Manage adoptions easily.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuardianSignUp1