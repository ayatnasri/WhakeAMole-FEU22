export type State = {
    timeStart: number;
    hol:Moles[];
    points:number;
};

export type Moles = {
    id:number,
    visible:boolean
};

export type Player = {
    name: string;
    points: number;
}
