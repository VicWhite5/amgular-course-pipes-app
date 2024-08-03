export enum Color {
    Red,
    Green,
    Blue,
    Black
}

export interface Hero {
    name: string;
    canFly: boolean;
    color: Color;
}
