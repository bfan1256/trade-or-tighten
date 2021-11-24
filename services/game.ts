import { realtimeDB } from "@/libs/firebase";
import {ref, set, onValue} from "firebase/database"

const writeGame = (gameId:string, action: Object) => {
    set(ref(realtimeDB, 'games/' + gameId), {
        ...action
    })
}

const loadGame = (gameId: string) => {
    const gameRef = ref(realtimeDB, 'games/' + gameId);
    // onValue(gameRef, (snapshot: any) => {
    //     const data = snapshot.val();
    // });
    return gameRef;
}