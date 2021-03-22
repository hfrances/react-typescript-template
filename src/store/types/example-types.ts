import { Example } from "../../types";

export const SET_VALUE_1 = 'SET_VALOR_1';
export const SET_VALUE_2 = 'SET_VALOR_2';

interface SetValue1 {
    type: typeof SET_VALUE_1;
    payload: number | undefined;
}

interface SetValue2 {
    type: typeof SET_VALUE_2;
    payload: string | null;
}

export type ExampleTypes = SetValue1 | SetValue2;

export interface ExampleState extends Example {}