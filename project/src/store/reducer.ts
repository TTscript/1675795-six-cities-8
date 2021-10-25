import { ActionType } from '../types/action-type';
import { Actions } from '../types/action-type';
import { State } from '../types/state-type';


export const initialState = {
  city: 21,
  cityName: false,
};

const STEP_COUNT = 1;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: state.city + STEP_COUNT};
    case ActionType.ChangeMainListElement:
      return {...state, cityName: true};
    default:
      return state;
  }
};

export {reducer};
