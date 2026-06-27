function GuardianMyApplications() {

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
                        <h2 className="font-bold text-2xl">My Applications</h2>
                        <p>Track and manage your adoption applications.</p>
                    </div>
                    <div className="flex gap-8 border-b border-gray-200 px-4">

                        {/* Active Tab */}
                        <button className="py-4 text-sm font-medium text-purple-600 border-b-2 border-purple-600">
                            All (4)
                        </button>

                        {/* Inactive Tabs */}
                        <button className="py-4 text-sm text-gray-500 hover:text-gray-700">
                            Pending (2)
                        </button>

                        <button className="py-4 text-sm text-gray-500 hover:text-gray-700">
                            Under Review (1)
                        </button>

                        <button className="py-4 text-sm text-gray-500 hover:text-gray-700">
                            Approved (1)
                        </button>

                        <button className="py-4 text-sm text-gray-500 hover:text-gray-700">
                            Declined (0)
                        </button>

                    </div>
                    <div className="flex flex-col w-full px-2 py-4 gap-5">
                        {/* Applications */}
                        <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-4 flex grow gap-5 items-start">

                            {/* Pet Image */}
                            <div className="w-40 h-40 rounded-xl bg-gray-300 flex-shrink-0">
                                {/* Image placeholder */}
                            </div>

                            <div className="flex flex-col flex-1 gap-4">

                                <div className="flex justify-between items-start text-left">
                                    <div>
                                        <h3 className="text-2xl font-semibold">Max</h3>
                                        <p className="text-sm text-gray-500">
                                            Golden Retriever • 1 yr
                                        </p>
                                    </div>

                                    {/* Status Badge */}
                                    <span className="px-4 py-1 rounded-lg border border-yellow-300 bg-yellow-50 text-yellow-500 text-sm font-medium">
                                        Pending
                                    </span>
                                </div>

                                {/* Application Info */}
                                <div className="flex flex-col gap-2 text-sm text-gray-500">

                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4">
                                            <span class="fi fi-br-time-watch-calendar text-l text-yellow-400"></span>
                                        </div>
                                        <span>Applied on May 12, 2024</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4">
                                            <span class="fi fi-br-file text-l"></span>
                                        </div>
                                        <span>Application ID: APP-2024-0012</span>
                                    </div>

                                </div>

                                <button className="w-full border border-purple-200 rounded-xl py-3 px-4 flex items-center justify-between text-purple-600 font-medium hover:bg-purple-50 transition">
                                    <span>View Details</span>

                                    <div className="w-5 h-5">
                                        <span class="fi fi-br-angle-right text-l"></span>
                                    </div>
                                </button>

                            </div>
                        </div>
                        <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-4 flex grow gap-5 items-start">

                            {/* Pet Image */}
                            <div className="w-40 h-40 rounded-xl bg-gray-300 flex-shrink-0">
                                {/* Image placeholder */}
                            </div>

                            <div className="flex flex-col flex-1 gap-4">

                                <div className="flex justify-between items-start text-left">
                                    <div>
                                        <h3 className="text-2xl font-semibold">Max</h3>
                                        <p className="text-sm text-gray-500">
                                            Golden Retriever • 1 yr
                                        </p>
                                    </div>

                                    {/* Status Badge */}
                                    <span className="px-4 py-1 rounded-lg border border-yellow-300 bg-yellow-50 text-yellow-500 text-sm font-medium">
                                        Pending
                                    </span>
                                </div>

                                {/* Application Info */}
                                <div className="flex flex-col gap-2 text-sm text-gray-500">

                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4">
                                            <span class="fi fi-br-time-watch-calendar text-l text-yellow-400"></span>
                                        </div>
                                        <span>Applied on May 12, 2024</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4">
                                            <span class="fi fi-br-file text-l"></span>
                                        </div>
                                        <span>Application ID: APP-2024-0012</span>
                                    </div>

                                </div>

                                <button className="w-full border border-purple-200 rounded-xl py-3 px-4 flex items-center justify-between text-purple-600 font-medium hover:bg-purple-50 transition">
                                    <span>View Details</span>

                                    <div className="w-5 h-5">
                                        <span class="fi fi-br-angle-right text-l"></span>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default GuardianMyApplications