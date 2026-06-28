import GuardianNav from "./GuardianNav"
import PetBox from "./PetBox"

function GuardianBrowsePets() {
    return (
        <>
            <title>Browse Pets</title>
            <div className="flex bg-white min-h-screen">
                <GuardianNav />

                <div className="flex flex-col w-full px-2 py-3">
                    {/* Content */}
                    <div className="text-left pt-2 pb-8 px-2">
                        <h2 className="font-bold text-2xl">Browse Pets</h2>
                        <p>Find your perfect companion</p>
                    </div>
                    <div className="flex px-3 justify-between gap-5">
                        {/* Search */}
                        <input id="search" name="search" type="text" placeholder="Search by the type of Pet, Breed or Keyword..." className="block min-w-0 flex-grow py-1.5 pr-3 pl-1 text-base text-left rounded-xl border-2 border-gray-200"></input>
                        <a className="bg-gray-50 hover:bg-taupe-100 text-yellow-700 py-1 px-2 rounded-xl border-2 border-yellow-700">
                            <div className="flex justify-center items-center gap-2 p-1 w-30">
                                <span className="fi  fi-br-filter text-xl pt-1"></span>
                                <span className="leading-none">Filter</span>
                            </div>
                        </a>
                    </div>
                    <div className="flex w-full px-2 py-4 gap-3">
                        {/* Filter */}
                        <a className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                            Species
                            <span className="fi fi-br-sort-down text-xl pt-1"></span>
                        </a>
                        <a className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                            Breed
                            <span className="fi fi-br-sort-down text-xl pt-1"></span>
                        </a>
                        <a className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                            Age
                            <span className="fi fi-br-sort-down text-xl pt-1"></span>
                        </a>
                        <a className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                            Size
                            <span className="fi fi-br-sort-down text-xl pt-1"></span>
                        </a>
                        <a className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                            More Filters
                            <span className="fi fi-br-sort-down text-xl pt-1"></span>
                        </a>
                    </div>
                    <div className="flex w-full px-2 py-4 justify-between items-center">
                        <div className="flex gap-2 p-2">
                            <h3>126</h3><p>pets found</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p>Filter By:</p>
                            <a className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 py-1 px-2 rounded-xl border-2 border-gray-200">
                                Newest
                                <span className="fi fi-br-sort-down text-xl pt-1"></span>
                            </a>
                        </div>
                    </div>
                    <div className="flex w-full px-2 py-4 gap-5">
                        {/* Pets */}
                        <PetBox
                            name="Luna"
                            breed="Domestic Shorthair"
                            age="2 yrs"
                            type="Cat"
                            gender="Female"
                            size="Small"
                            isHearted={true}
                        />

                        <PetBox
                            name="Max"
                            breed="Buddy"
                            age="1 yr"
                            type="Dog"
                            gender="Male"
                            size="Large"
                            isHearted={false}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuardianBrowsePets