import furpectlogo from '/src/assets/icons/furpectlogo.svg'
import dogcat from "/src/assets/images/dogcat.png";

function SignUp() {

    return (
        <>
            <title>Sign Up</title>
            <div className="flex flex-col gap-4 items-center justify-between pt-10 bg-white min-h-screen">
                <div className="flex flex-col gap-1 p-5 rounded-xl items-center justify-between w-100 bg-white border-2 border-gray-200">
                    <div className="w-full text-left">
                        <img src={furpectlogo} width="128" className="furpect" alt="Furpect logo" />
                        <div className="pt-2">
                            <h2 className="font-bold text-2xl">Find Your<br />Perfect Companion</h2>
                            <p>AI-powered matching for happier adoptions.</p>
                        </div>
                    </div>
                    <img src={dogcat} width="300" className="" alt="Mock Up" />
                    <div className="flex flex-col gap-3 items-stretch pt-6 pb-1">
                        <a href='/guardian-sign-up' className="btn bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-3 rounded-xl border-2 border-taupe-700">
                            <div className="flex items-center gap-4">
                                <span className="fi fi-sr-paw"></span>
                                <span className="leading-none">I Want to Register as a Guardian</span>
                            </div>
                        </a>
                        <a href='/provider-sign-up' className="btn bg-gray-50 hover:bg-taupe-100 text-black py-2 px-3 rounded-xl border-2 border-taupe-700">
                            <div className="flex items-center gap-4">
                                <span className="fi fi-sr-building"></span>
                                <span className="leading-none">I want to Register as a Provider</span>
                            </div>
                        </a>
                    </div>
                    <div className="p-2">
                        <span>Already have an account? </span>
                        <a href='/guardian-log-in' className="text-taupe-700 font-bold">Log in</a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SignUp