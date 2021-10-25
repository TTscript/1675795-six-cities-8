import { ActionType } from '../types/action-type';
import { ChangeCityAction } from '../types/action-type';
import { ChangePointsAction } from '../types/action-type';
import { ChangeMainListElementAction } from '../types/action-type';

export const city = (count: number): ChangeCityAction => ({
  type: ActionType.ChangeCity,
});

export const incrementStep = (): ChangePointsAction => ({
  type: ActionType.ChangePoints,
});

export const changeMainListElement = (): ChangeMainListElementAction => ({
  type: ActionType.ChangeMainListElement,
});
