import GuardianNav from "./GuardianNav"

function GuardianProfileSettings() {
    return (
        <>
            <title>Browse Pets</title>
            <div className="flex bg-white min-h-screen">
                <GuardianNav/>
   
                <div className="flex flex-col w-full px-2 py-3">
                    {/* Content */}
                    <div className="text-left pt-2 pb-8 px-2">
                        <h2 className="font-bold text-2xl">My Profile</h2>
                        <p>Manage your profile information and preference</p>
                    </div>
                    <div className="flex gap-8 border-b border-gray-200 px-4">

                        {/* Inactive Tab */}
                        <a href='/guardian-profile-personal'>
                            <button className="py-4 text-sm text-gray-500 hover:text-gray-700 hover:font-bold">
                                Personal Information
                            </button>
                        </a>

                        {/* Active Tab */}
                        <a href='/guardian-profile-settings'>
                            <button className="py-4 text-sm font-medium text-amber-400 border-b-2 border-amber-400 hover:font-bold">
                                Settings
                            </button>
                        </a>

                        {/* Inactive Tabs */}
                        <a href=''>
                            <button className="py-4 text-sm text-gray-500 hover:text-gray-700 hover:font-bold">
                                Preferences
                            </button>
                        </a>

                        <a href=''>
                            <button className="py-4 text-sm text-gray-500 hover:text-gray-700 hover:font-bold">
                                Adoption History
                            </button>
                        </a>

                    </div>
                    <div className="flex flex-col w-full px-2 py-3">
                        


                    </div>
                </div>

            </div>
        </>
    )
}

export default GuardianProfileSettings