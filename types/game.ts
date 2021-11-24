export interface Game { 
    phase: string;
    question: string;
    answer: number;
    activeUser: string;
    currSpread: number;
    currSpreadName: string;
    players: Object,
    id: string;
}