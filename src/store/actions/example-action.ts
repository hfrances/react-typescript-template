import { ExampleTypes, SET_VALUE_1, SET_VALUE_2 } from '../types/example-types';

export const setValue1 = (value1: number | undefined): ExampleTypes => {
  return {
    type: SET_VALUE_1,
    payload: value1
  };
}

export const setValue2 = (value2: string | null): ExampleTypes => {
  return {
    type: SET_VALUE_2,
    payload: value2
  };
}
