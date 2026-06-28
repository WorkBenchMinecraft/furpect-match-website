import GuardianNav from "./GuardianNav"

function GuardianDashboard() {
    return (
        <>
            <title>Guardian Dashboard</title>
            <div className="flex bg-white min-h-screen">
                <GuardianNav/>

                <div className="flex flex-col w-full px-2 py-3">
                    {/* Content */}
                    <div className="text-left pt-2 pb-8 px-2">
                        <h2 className="font-bold text-2xl">Dashboard</h2>
                        <p>It's a dashboard.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuardianDashboard;