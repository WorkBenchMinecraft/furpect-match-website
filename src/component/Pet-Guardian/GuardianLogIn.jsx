import dog from "/src/assets/images/dog.png";

function GuardianLogIn() {
    return (
        <>
            <title>Log In</title>
            <div className="flex flex-col gap-4 items-center justify-stretch pt-10 bg-white min-h-screen">
                <div className="flex gap-1 p-5 rounded-xl items-center w-180 bg-white border-2 border-gray-200">
                    <div className="flex flex-col gap-1 p-5 rounded-xl items-stretch justify-between w-full bg-white">
                        <div className="w-full p-2">
                            <h2 className="font-bold text-2xl">Welcome Back!</h2>
                            <p>Login in to your account</p>
                        </div>
                        <div className="flex flex-col text-left gap-3">
                            <div className="flex flex-col items-stretch">
                                <label>Email</label>
                                <input id="email" name="email" type="text" placeholder="example@gmail.com" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base rounded-xl border-2 border-taupe-700"></input>
                            </div>
                            <div className="flex flex-col items-stretch">
                                <label>Password</label>
                                <input id="password" name="password" type="text" placeholder="********" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base rounded-xl border-2 border-taupe-700"></input>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-4">
                            <div className="gap-2">
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"></input>
                                <label> Remember Me</label>
                            </div>
                            <a href='/forgot-password' className="font-bold text-yellow-700">Forgot Password?</a>
                        </div>
                        <a href='/guardian-browse-pets' className="btn bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-2 rounded-xl border-2 border-taupe-700">
                            <span className="leading-none">Login</span>
                        </a>
                        <div className="p-5">
                            <span>Don't have an account? </span>
                            <a href='/sign-up' className="text-yellow-700 font-bold">Sign Up</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-5 rounded-xl items-center justify-between w-80 bg-taupe-200">
                        <div className="flex flex-col">
                            <div className="flex justify-center items-center gap-3 py-2">
                                <span className="fi fi-br-shield-check text-lime-500 text-4xl"></span><h2 className="font-bold text-2xl">Your trust,<br />our priority.</h2>
                            </div>
                            <p>We keep your information safe and secure.</p>
                        </div>
                        <img src={dog} width="220" className="rounded-3xl shadow-lg/20 shadow-taupe-500/50" alt="Mock Up" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuardianLogIn
