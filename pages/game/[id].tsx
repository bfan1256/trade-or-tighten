import BottomActions from "@/components/game/BottomActions";
import Nav from '@/components/Nav';
import IndividualCard from "@/components/game/IndividualCard";

const GameRoom = () => {
    return (
        <div className="bg-blue-50 min-h-screen pb-56">
            <Nav />
            <div className="pt-12 max-w-7xl mx-auto">
                <div className="bg-white max-w-4xl px-8 rounded-3xl py-8 mx-auto shadow-lg">
                    <h1 className="font-semibold text-4xl text-center">What is the height of the eiffel tower?</h1>
                    <h1 className="font-extrabold text-6xl mt-10 text-blue-400 text-center">540312 Feet</h1>
                </div>
            </div>
            <div className="bg-gray-700 max-w-xl text-white mx-auto p-4 mt-12 shadow-md rounded-full">
                <h1 className="text-center text-2xl font-medium text-white">Brandon has Reduced the Spread to <span className="text-green-300">50%</span></h1>
            </div>
            <hr className="max-w-7xl mx-auto my-20" />
            <div className="grid gap-8 grid-cols-3 max-w-7xl mx-auto">
                <IndividualCard active={true}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
                <IndividualCard active={false}/>
            </div>
            <BottomActions tightening={true} />
        </div>
    );
}

export default GameRoom;