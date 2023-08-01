import { TProducts } from ".";

export interface IState {
    chooseProduct: {
        [category: string]: TProducts | null;
    }
}