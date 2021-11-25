export interface Game { 
    phase: string;
    question: string;
    answer: number;
    activeUser: string;
    currSpread: number;
    currSpreadName: string;
    currSpreadHolder: string;
    players: Object,
    id: string;
    marketPrice: number,
}