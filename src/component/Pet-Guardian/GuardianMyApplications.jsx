import GuardianNav from "./GuardianNav"
import PetApplicationBox from "./PetApplicationBox"

function GuardianMyApplications() {
    return (
        <>
            <title>Browse Pets</title>
            <div className="flex bg-white min-h-screen">
                <GuardianNav />

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
                        <PetApplicationBox
                            name="Max"
                            breed="Golden Retriever"
                            age="1 yr"
                            status="Pending"
                            appliedOn="May 12, 2024"
                            applicationId="APP-2024-0012"
                        />

                        <PetApplicationBox
                            name="Max"
                            breed="Golden Retriever"
                            age="1 yr"
                            status="Pending"
                            appliedOn="May 12, 2024"
                            applicationId="APP-2024-0012"
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default GuardianMyApplications