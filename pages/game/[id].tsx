import BottomActions from "@/components/game/BottomActions";
import Nav from '@/components/Nav';
import IndividualCard from "@/components/game/IndividualCard";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Game } from "@/types/game";
import { createGame, loadGame, addPlayerToGame } from "@/services/game"
import { onValue } from "firebase/database"
import { Player } from "@/types/player";
import AddName from "@/components/modals/AddName";
import { usePlayer } from "@/contexts/player";

const GameRoom = () => {
    const router = useRouter();
    const { id } = router.query;
    const [openAddNameModal, setModal] = useState(false);
    const [added, setAdded] = useState(false);
    const [game, setGame] = useState<Game>({
        answer: 0,
        question: "",
        currSpread: 100,
        id: "",
        players: [],
    });

    const { player } = usePlayer();

    useEffect(() => {
        if (!player) {
            console.log('no player')
            setModal(true);
        } else {
            console.log('player')
            setModal(false);
            // add player to the game
            if (game.id.length > 0 && !added) {
                addPlayerToGame(game.id, player.id, {
                    name: player.name,
                    id: player.id,
                    active: false,
                    isMarketMaker: false,
                    score: 0,
                });
                setAdded(true);
            }
        }
    }, [player, game, added])
    
    useEffect(() => {
        const ref = loadGame(id as string)
        const unsubscribe = onValue(ref, (snapshot: any) => {
            const data = snapshot.val()
            if (data) {
                console.log(data);
                setGame(data);
                // Add current player to the game if not already joined
            } else {
                // Create Game Logic
                // createGame()
            }
        });
        return () => unsubscribe()
    }, [id])
    
    return (
        <div className="bg-blue-50 min-h-screen pb-56">
            <AddName open={openAddNameModal} />
            <Nav />
            <div className="pt-12 max-w-7xl mx-auto">
                <div className="bg-white max-w-4xl px-8 rounded-3xl py-8 mx-auto shadow-lg">
                    <h1 className="font-semibold text-4xl text-center">{game.question}?</h1>
                    <h1 className="font-extrabold text-6xl mt-10 text-blue-400 text-center">{game.answer}</h1>
                </div>
            </div>
            <div className="bg-gray-700 max-w-xl text-white mx-auto p-4 mt-12 shadow-md rounded-full">
                <h1 className="text-center text-2xl font-medium text-white">Brandon has Reduced the Spread to <span className="text-green-300">{game.currSpread}%</span></h1>
            </div>
            <hr className="max-w-7xl mx-auto my-20" />
            <div className="grid gap-8 grid-cols-3 max-w-7xl mx-auto">
                {Object.values(game.players).map((player: Player) => {
                    return (
                        <IndividualCard key={player.id} player={player}/>
                    )
                })}
            </div>
            <BottomActions tightening={true} />
        </div>
    );
}

export default GameRoom;