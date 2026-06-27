function GuardianBrowsePets() {

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
                        <h2 className="font-bold text-2xl">Browse Pets</h2>
                        <p>Find your perfect companion</p>
                    </div>
                    <div className="flex px-3 justify-between gap-5">
                        {/* Search */}
                        <input id="search" name="search" type="text" placeholder="Search by the type of Pet, Breed or Keyword..." className="block min-w-0 flex-grow py-1.5 pr-3 pl-1 text-base text-left rounded-xl border-2 border-gray-200"></input>
                        <a className="btn bg-gray-50 hover:bg-taupe-100 text-yellow-700 py-1 px-2 rounded-xl border-2 border-yellow-700">
                            <div className="flex justify-center items-center gap-2 p-1 w-30">
                                <span class="fi  fi-br-filter text-xl pt-1"></span>
                                <span className="leading-none">Filter</span>
                            </div>
                        </a>
                    </div>
                    <div className="flex w-full px-2 py-4 gap-3">
                        {/* Filter */}
                        <a className="btn flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                            <h3>Species</h3>
                            <span class="fi fi-br-sort-down text-xl pt-1"></span>
                        </a>
                        <a className="btn flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                            <h3>Breed</h3>
                            <span class="fi fi-br-sort-down text-xl pt-1"></span>
                        </a>
                        <a className="btn flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                            <h3>Age</h3>
                            <span class="fi fi-br-sort-down text-xl pt-1"></span>
                        </a>
                        <a className="btn flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                            <h3>Size</h3>
                            <span class="fi fi-br-sort-down text-xl pt-1"></span>
                        </a>
                        <a className="btn flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                            <h3>More Filters</h3>
                            <span class="fi fi-br-sort-down text-xl pt-1"></span>
                        </a>
                    </div>
                    <div className="flex w-full px-2 py-4 justify-between items-center">
                        <div className="flex gap-2 p-2">
                            <h3>126</h3><p>pets found</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p>Filter By:</p>
                            <a className="btn flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                                <h3>Newest</h3>
                                <span class="fi fi-br-sort-down text-xl pt-1"></span>
                            </a>
                        </div>
                    </div>
                    <div className="flex w-full px-2 py-4 gap-5">
                        {/* Pets */}
                        <div className="w-48 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">

                            {/* Image Section */}
                            <div className="relative">
                                <div className="w-full h-32 bg-gray-300">
                                    {/* Pet image placeholder */}
                                </div>

                                {/* Favorite Icon */}
                                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
                                    <span class="fi fi-sr-heart text-l pt-1 text-red-400"></span>
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-3 flex flex-col gap-2">

                                {/* Name */}
                                <h3 className="font-semibold text-lg">Luna</h3>

                                {/* Info */}
                                <div className="text-xs text-gray-500 flex items-center gap-2 justify-center">
                                    <span>Domestic Shorthair</span>
                                    <span>•</span>
                                    <span>2 yrs</span>
                                </div>

                                {/* Tags */}
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-2 py-1 text-xs rounded-md border border-2 text-purple-600 border-purple-300">
                                        Cat
                                    </span>
                                    <span className="px-2 py-1 text-xs rounded-md border border-2">
                                        Female
                                    </span>
                                    <span className="px-2 py-1 text-xs rounded-md border border-2">
                                        Small
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="w-48 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">

                            {/* Image Section */}
                            <div className="relative">
                                <div className="w-full h-32 bg-gray-300">
                                    {/* Pet image placeholder */}
                                </div>

                                {/* Favorite Icon */}
                                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
                                    <span class="fi fi-br-heart text-l pt-1 text-red-400"></span>
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-3 flex flex-col gap-2">

                                {/* Name */}
                                <h3 className="font-semibold text-lg">Max</h3>

                                {/* Info */}
                                <div className="text-xs text-gray-500 flex items-center gap-2 justify-center">
                                    <span>Buddy</span>
                                    <span>•</span>
                                    <span>1 yr</span>
                                </div>

                                {/* Tags */}
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-2 py-1 text-xs rounded-md border border-2">
                                        Dog
                                    </span>
                                    <span className="px-2 py-1 text-xs rounded-md border border-2">
                                        Male
                                    </span>
                                    <span className="px-2 py-1 text-xs rounded-md border border-2">
                                        Large
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default GuardianBrowsePets