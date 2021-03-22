import { ExampleState, ExampleTypes, SET_VALUE_1, SET_VALUE_2 } from '../types/example-types';

const initialState: ExampleState = {
  value1: undefined,
  value2: null
}

const exampleReducer = (state: ExampleState = initialState, action: ExampleTypes): ExampleState => {
  switch (action.type) {
    case SET_VALUE_1:
      return {
        ...state,
        value1: action.payload
      }
    case SET_VALUE_2:
      return {
        ...state,
        value2: action.payload
      }
    default:
      return state;
  }
}

export { exampleReducer }
export default exampleReducer;