/** 
 * props: name, breed, age, status, appliedOn, applicationId
*/

function PetApplicationBox(props) {
    return (
        <>
            <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-4 flex grow gap-5 items-start">

                {/* Pet Image */}
                <div className="w-40 h-40 rounded-xl bg-gray-300 flex-shrink-0">
                    {/* Image placeholder */}
                </div>

                <div className="flex flex-col flex-1 gap-4">

                    <div className="flex justify-between items-start text-left">
                        <div>
                            <h3 className="text-2xl font-semibold">{props.name}</h3>
                            <p className="text-sm text-gray-500">
                                {props.breed} • {props.age}
                            </p>
                        </div>

                        {/* Status Badge */}
                        <span className="px-4 py-1 rounded-lg border border-yellow-300 bg-yellow-50 text-yellow-500 text-sm font-medium">
                            {props.status}
                        </span>
                    </div>

                    {/* Application Info */}
                    <div className="flex flex-col gap-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4">
                                <span className="fi fi-br-time-watch-calendar text-l text-yellow-400"></span>
                            </div>
                            <span>Applied on {props.appliedOn}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4">
                                <span className="fi fi-br-file text-l"></span>
                            </div>
                            <span>Application ID: {props.applicationId}</span>
                        </div>

                    </div>

                    <button className="w-full border border-purple-200 rounded-xl py-3 px-4 flex items-center justify-between text-purple-600 font-medium hover:bg-purple-50 transition">
                        <span>View Details</span>

                        <div className="w-5 h-5">
                            <span className="fi fi-br-angle-right text-l"></span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default PetApplicationBox;