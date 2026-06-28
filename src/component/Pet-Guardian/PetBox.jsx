/** 
 * props: name, type, gender, breed, age, size, isHearted
*/

function PetBox(props) {
    return (
        <>
            <div className="w-48 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                {/* Image Section */}
                <div className="relative">
                    <div className="w-full h-32 bg-gray-300">
                        {/* Pet image placeholder */}
                    </div>

                    {/* Favorite Icon */}
                    <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
                        {props.isHearted === true ?
                            <span className="fi fi-sr-heart text-l pt-1 text-red-400"></span>
                            : <span className="fi fi-br-heart text-l pt-1 text-red-400"></span>}
                    </button>
                </div>

                {/* Content */}
                <div className="p-3 flex flex-col gap-2">
                    {/* Name */}
                    <h3 className="font-semibold text-lg">{props.name}</h3>

                    {/* Info */}
                    <div className="text-xs text-gray-500 flex items-center gap-2 justify-center">
                        <span>{props.breed}</span>
                        <span>•</span>
                        <span>{props.age}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 text-xs rounded-md border border-2 text-purple-600 border-purple-300">
                            {props.type}
                        </span>
                        <span className="px-2 py-1 text-xs rounded-md border border-2">
                            {props.gender}
                        </span>
                        <span className="px-2 py-1 text-xs rounded-md border border-2">
                            {props.size}
                        </span>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PetBox;