function GuardianNav() {
    return (
        <>
            <div className="flex flex-col w-60 min-h-screen border-r bg-white border-gray-200 items-stretch pt-10 px-2 gap-4">
                <a href='/guardian-dashboard' className="hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                    <div className="flex items-center gap-4 px-2 py-1">
                        <span className="fi  fi-br-home text-xl"></span>
                        <span className="leading-none">Dashboard</span>
                    </div>
                </a>
                <a href='/guardian-browse-pets' className="hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                    <div className="flex items-center gap-4 px-2 py-1">
                        <span className="fi fi-br-magnifying-glass-wave text-xl"></span>
                        <span className="leading-none">Browse Pets</span>
                    </div>
                </a>
                <a href='/guardian-my-applications' className="hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                    <div className="flex items-center gap-4 px-2 py-1">
                        <span className="fi  fi-br-diary-bookmarks text-xl"></span>
                        <span className="leading-none">My Applications</span>
                    </div>
                </a>
                <a href='/guardian-profile-personal' className="hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                    <div className="flex items-center gap-4 px-2 py-1">
                        <span className="fi fi-br-user text-xl"></span>
                        <span className="leading-none">Profile</span>
                    </div>
                </a>
                <a href='/' className="hover:bg-taupe-700 hover:text-white py-2 px-2 rounded-xl border-2 border-white hover:border-2 hover:border-taupe-700">
                    <div className="flex items-center gap-4 px-2 py-1">
                        <span className="fi fi-br-leave text-xl"></span>
                        <span className="leading-none">Log Out</span>
                    </div>
                </a>
            </div>
        </>
    );
}

export default GuardianNav