import { Player } from "@/types/player";

const IndividualCard = (props: { player: Player }) => {
    return (
        <div className={`shadow-md p-8 rounded-xl bg-white ${props.player.active ? "ring-4 ring-blue-300" : ""}`}>
            <div className="flex items-center justify-between">        
                <div className="flex space-x-4 items-center">
                    <img
                        className="inline-block h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <h1 className="text-gray-900 font-medium text-xl">{props.player.name}</h1>
                </div>
                <div className="text-green-400 font-bold text-4xl">
                    +{props.player.score}%
                </div>
            </div>
        </div>
    );
}

export default IndividualCard;