function GuardianProfile() {

    return (
        <>
            <title>Browse Pets</title>
            <div className="flex bg-white min-h-screen">
                <div className="flex flex-col w-60 min-h-screen border-r bg-white border-gray-200 items-stretch pt-10 px-2 gap-4">
                    {/* Nav */}
                    <a href='/guardian-dashboard' className="btn hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                        <div className="flex items-center gap-4 px-2 py-1">
                            <span class="fi  fi-br-home text-xl"></span>
                            <span className="leading-none">Dashboard</span>
                        </div>
                    </a>
                    <a href='/guardian-browse-pets' className="btn hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                        <div className="flex items-center gap-4 px-2 py-1">
                            <span class="fi fi-br-magnifying-glass-wave text-xl"></span>
                            <span className="leading-none">Browse Pets</span>
                        </div>
                    </a>
                    <a href='/guardian-my-applications' className="btn hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                        <div className="flex items-center gap-4 px-2 py-1">
                            <span class="fi  fi-br-diary-bookmarks text-xl"></span>
                            <span className="leading-none">My Applications</span>
                        </div>
                    </a>
                    <a href='/guardian-profile' className="btn hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                        <div className="flex items-center gap-4 px-2 py-1">
                            <span class="fi fi-br-user text-xl"></span>
                            <span className="leading-none">Profile</span>
                        </div>
                    </a>
                    <a href='/' className="btn hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                        <div className="flex items-center gap-4 px-2 py-1">
                            <span class="fi fi-br-leave text-xl"></span>
                            <span className="leading-none">Log Out</span>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col w-full px-2 py-3">
                    {/* Content */}
                    <div className="text-left pt-2 pb-8 px-2">
                        <h2 className="font-bold text-2xl">My Profile</h2>
                        <p>Manage your profile information and preference</p>
                    </div>
                    <div className="flex gap-8 border-b border-gray-200 px-4">

                        {/* Active Tab */}
                        <button className="py-4 text-sm font-medium text-purple-600 border-b-2 border-purple-600">
                            Personal Information
                        </button>

                        {/* Inactive Tabs */}
                        <button className="py-4 text-sm text-gray-500 hover:text-gray-700">
                            Preferences
                        </button>

                        <button className="py-4 text-sm text-gray-500 hover:text-gray-700">
                            Adoption History
                        </button>
                    </div>
                    <div className="flex flex-col w-full px-2 py-3">


                    </div>
                </div>

            </div>
        </>
    )

}

export default GuardianProfile