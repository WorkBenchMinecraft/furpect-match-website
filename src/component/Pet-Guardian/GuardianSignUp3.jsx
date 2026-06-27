import success from "/src/assets/images/success.png";

function GuardianSignUp3() {

    return (
        <>
            <title>Sign Up</title>
            <div className="flex flex-col gap-4 items-center justify-between pt-10 bg-white min-h-screen">
                <div className="flex flex-col gap-1 p-5 rounded-xl items-center justify-between w-100 bg-white border-2 border-gray-200">
                    <img src={success} width="300" className="" alt="Mock Up" />
                    <div className="w-full pb-8">
                        <div className="pt-2">
                            <h2 className="font-bold text-2xl">Registration Complete!</h2>
                            <p>Welcome to Furpect Match!<br />You can log in to continue.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 items-stretch p-2 w-full">
                        <a href='/guardian-log-in' className="btn bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-2 rounded-xl border-2 border-taupe-700">
                            <div className="flex justify-center items-center gap-4">
                                <span className="leading-none">Go to Log In</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default GuardianSignUp3