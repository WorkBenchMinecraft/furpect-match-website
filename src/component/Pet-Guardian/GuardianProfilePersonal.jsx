function GuardianProfilePersonal() {

    return (
        <>
            <title>Browse Pets</title>
            <div className="flex bg-white min-h-screen">
                <div className="flex flex-col w-60 min-h-screen border-r bg-white border-gray-200 items-stretch pt-10 px-2 gap-4">
                    {/* Nav */}
                    <a href='/guardian-dashboard' className="hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                        <div className="flex items-center gap-4 px-2 py-1">
                            <span class="fi  fi-br-home text-xl"></span>
                            <span className="leading-none">Dashboard</span>
                        </div>
                    </a>
                    <a href='/guardian-browse-pets' className="hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                        <div className="flex items-center gap-4 px-2 py-1">
                            <span class="fi fi-br-magnifying-glass-wave text-xl"></span>
                            <span className="leading-none">Browse Pets</span>
                        </div>
                    </a>
                    <a href='/guardian-my-applications' className="hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                        <div className="flex items-center gap-4 px-2 py-1">
                            <span class="fi  fi-br-diary-bookmarks text-xl"></span>
                            <span className="leading-none">My Applications</span>
                        </div>
                    </a>
                    <a href='/guardian-profile-personal' className="hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                        <div className="flex items-center gap-4 px-2 py-1">
                            <span class="fi fi-br-user text-xl"></span>
                            <span className="leading-none">Profile</span>
                        </div>
                    </a>
                    <a href='/' className="hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
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
                        <a href='/guardian-profile-personal'>
                            <button className="py-4 text-sm font-medium text-amber-400 border-b-2 border-amber-400 hover:font-bold">
                                Personal Information
                            </button>
                        </a>

                        {/* Inactive Tabs */}
                        <a href='/guardian-profile-settings'>
                            <button className="py-4 text-sm text-gray-500 hover:text-gray-700 hover:font-bold">
                                Settings
                            </button>
                        </a>

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
                    <div className="flex flex-col w-full px-2 py-3 gap-3">
                        {/* Containers */}
                        <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

                            {/* Personal Information */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="font-semibold text-lg">Personal Information</h2>
                                <a href='' className="bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-4 rounded-xl border-2 border-taupe-700 py-1 px-5">
                                    Edit
                                </a>
                            </div>

                            <div className="flex gap-6 w-full">

                                {/* Profile Image */}
                                <div className="relative pl-10">
                                    <div className="w-24 h-24 rounded-full bg-gray-300">
                                        {/* image placeholder */}
                                    </div>

                                    <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white border shadow flex items-center justify-center">
                                        {/* camera icon placeholder */}
                                    </button>
                                </div>

                                {/* Info */}
                                <div className="flex-1 grid grid-cols-2 gap-6">

                                    <div>
                                        <p className="text-xs text-gray-500">Full Name</p>
                                        <p className="font-medium">Juan Dela Cruz</p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Email</p>
                                        <p className="font-medium">juan@email.com</p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Phone</p>
                                        <p className="font-medium">(+55) 123-4567</p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Location</p>
                                        <p className="font-medium">San Francisco, CA</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

                            {/* About You */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="font-semibold text-lg">About You</h2>
                                <a href='' className="bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-4 rounded-xl border-2 border-taupe-700 py-1 px-5">
                                    Edit
                                </a>
                            </div>

                            <div className="flex flex-col gap-6 w-full">

                                <div>
                                    <p className="text-xs text-gray-500 mb-2">Tell us about yourself</p>
                                    <p className="text-sm text-gray-700">
                                        I’m an animal lover looking to adopt a furry companion.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">

                                    <div>
                                        <p className="text-xs text-gray-500">Occupation</p>
                                        <p>Software Engineer</p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Housing Type</p>
                                        <p>Apartment</p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Living Situation</p>
                                        <p>Live with partner</p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Years of Experience</p>
                                        <p>5+ years</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

                            {/* Account Setting */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="font-semibold text-lg">Account Settings</h2>
                                <a href='' className="bg-taupe-700 hover:bg-taupe-800 text-white py-2 px-4 rounded-xl border-2 border-taupe-700 py-1 px-5">
                                    Edit
                                </a>
                            </div>

                            <div className="flex flex-col divide-y">

                                <button className="w-full flex justify-between items-center py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-gray-300 rounded-full">
                                            {/* icon placeholder */}
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium">Change Password</p>
                                            <p className="text-sm text-gray-500">Update your password</p>
                                        </div>
                                    </div>

                                    <div>{/* arrow placeholder */}</div>
                                </button>

                                <button className="w-full flex justify-between items-center py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-gray-300 rounded-full">
                                            {/* icon placeholder */}
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium">Notification Preferences</p>
                                            <p className="text-sm text-gray-500">Manage how you receive updates</p>
                                        </div>
                                    </div>

                                    <div>{/* arrow placeholder */}</div>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default GuardianProfilePersonal