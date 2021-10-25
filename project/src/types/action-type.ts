export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangePoints= 'main/changePoints',
  ChangeMainListElement = 'main/changeMainListElements',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity,
}

export type ChangePointsAction = {
  type: ActionType.ChangePoints,
}

export type ChangeMainListElementAction = {
  type: ActionType.ChangeMainListElement,
}

export type Actions = ChangeCityAction | ChangePointsAction | ChangeMainListElementAction;
