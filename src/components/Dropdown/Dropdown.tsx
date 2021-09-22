import { useEffect, useReducer } from "react";
import s from "./Dropdown.module.css";
import {
  InitDataAC,
  initialState,
  LangType,
  reducer,
} from "./reducer";
import SelectBody from "./SelectBody/SelectBody";
import SelectHeader from "./SelectHeader/SelectHeader";

interface DropdownPropsType {
  data: LangType;
}

const Dropdown: React.FC<DropdownPropsType> = ({ data }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(InitDataAC(data));
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.head}>Язык</div>
      <SelectHeader state={state} dispatch={dispatch} />
      {state.mode ? <SelectBody state={state} dispatch={dispatch} /> : null}
    </div>
  );
};

export default Dropdown;
