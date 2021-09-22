import { db } from "../../mockDb";

const INIT_DATA = "INIT_DATA";
const ADD_TO_CHOSEN_LANG = "ADD_TO_CHOSEN_LANG";
const DELETE_CHOSEN_LANG = "DELETE_CHOSEN_LANG";
const TOGGLE_CHOSEN_LANG = "TOGGLE_CHOSEN_LANG";
const TOGGLE_MODE = "TOGGLE_MODE";
const SEARCH_DATA = "SEARCH_DATA";

export type LangType = Array<{
  id: number;
  img: string;
  name: string;
}>;

export interface StateType {
  languages: LangType;
  chosenLang: Array<number>;
  mode: boolean;
  filteredLang: LangType;
}

export type ActionsType =
  | InitDataACType
  | AddToChosenLangACType
  | DeleteChosenLangACType
  | ToggleChosenLangACType
  | ToggleModeACType
  | searchACType;

export const initialState: StateType = {
  languages: [],
  chosenLang: [],
  mode: false,
  filteredLang: [],
};

export function reducer(state: StateType, action: ActionsType) {
  switch (action.type) {
    case INIT_DATA:
      return {
        ...state,
        languages: action.payload,
        filteredLang: action.payload,
      };
    case ADD_TO_CHOSEN_LANG:
      return { ...state, chosenLang: [...state.chosenLang, action.payload] };
    case DELETE_CHOSEN_LANG:
      return {
        ...state,
        chosenLang: state.chosenLang.filter((id) => id != action.payload),
      };
    case TOGGLE_CHOSEN_LANG:
      return state.chosenLang.some((id) => id === action.payload)
        ? {
            ...state,
            chosenLang: state.chosenLang.filter((id) => id != action.payload),
          }
        : { ...state, chosenLang: [...state.chosenLang, action.payload] };
    case TOGGLE_MODE:
      return { ...state, mode: !state.mode };
    case SEARCH_DATA: {
      const filteredArr = state.languages.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return action.payload.length > 0
        ? { ...state, filteredLang: [...filteredArr] }
        : { ...state, filteredLang: [...state.languages] };
    }
    default:
      return state;
  }
}

export type InitDataACType = {
  type: typeof INIT_DATA;
  payload: LangType;
};
export const InitDataAC = (data: LangType): InitDataACType => ({
  type: INIT_DATA,
  payload: data,
});

export type AddToChosenLangACType = {
  type: typeof ADD_TO_CHOSEN_LANG;
  payload: number;
};
export const addToChosenLangAC = (id: number): AddToChosenLangACType => ({
  type: ADD_TO_CHOSEN_LANG,
  payload: id,
});

export type DeleteChosenLangACType = {
  type: typeof DELETE_CHOSEN_LANG;
  payload: number;
};
export const deleteChosenLangAC = (id: number): DeleteChosenLangACType => ({
  type: DELETE_CHOSEN_LANG,
  payload: id,
});

export type ToggleChosenLangACType = {
  type: typeof TOGGLE_CHOSEN_LANG;
  payload: number;
};
export const toggleChosenLangAC = (id: number): ToggleChosenLangACType => ({
  type: TOGGLE_CHOSEN_LANG,
  payload: id,
});

export type ToggleModeACType = {
  type: typeof TOGGLE_MODE;
};
export const toggleModeAC = (): ToggleModeACType => ({
  type: TOGGLE_MODE,
});

export type searchACType = {
  type: typeof SEARCH_DATA;
  payload: string;
};
export const searchAC = (text: string): searchACType => ({
  type: SEARCH_DATA,
  payload: text,
});
