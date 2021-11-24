import { realtimeDB } from "@/libs/firebase";
import { Game } from "@/types/game";
import { Player } from "@/types/player";
import {ref, set, onValue} from "firebase/database"

const createGame = (gameId:string, game: Game) => {
    return set(ref(realtimeDB, 'games/' + gameId), game);
}

const loadGame = (gameId: string) => {
    const gameRef = ref(realtimeDB, 'games/' + gameId);
    return gameRef;
}

const loadPlayers = (gameId: string) => {
    return ref(realtimeDB, `games/${gameId}/players`);
}

const loadPlayer = (gameId: string, playerId: string) => {
    return ref(realtimeDB, `games/${gameId}/players/${playerId}`);
}

const addPlayerToGame = (gameId: string, playerId: string, player: Player) => {
    const playerRef = ref(realtimeDB, `games/${gameId}/players/${playerId}`);
    return set(playerRef, player);
}

export {createGame, loadGame, loadPlayers, loadPlayer, addPlayerToGame}