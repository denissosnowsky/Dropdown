import Option from "./Option/Option";
import s from "./SelectBody.module.css";
import search from "../../../assets/search.svg";
import { useEffect, useState } from "react";
import { ActionsType, searchAC, StateType } from "../reducer";

interface SelectBodyPropsType {
  state: StateType;
  dispatch: React.Dispatch<ActionsType>;
}

const SelectBody: React.FC<SelectBodyPropsType> = ({ state, dispatch }) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    dispatch(searchAC(text));
  }, [text]);

  return (
    <div className={s.selectBody}>
      <div className={s.searchInput}>
        <div className={s.searchInput__img}>
          <img alt="search" src={search} />
        </div>
        <div className={s.searchInput__text}>
          <input
            type="text"
            placeholder="Поиск"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <div className={s.optionsWrapper}>
        {state.filteredLang.map((item) => (
          <Option
            key={item.id}
            name={item.name}
            img={item.img}
            id={item.id}
            dispatch={dispatch}
            isChosen={state.chosenLang.some((id) => id === item.id)}
          />
        ))}
        {state.filteredLang.length === 0 && (
          <div className={s.emptyFooter}></div>
        )}
      </div>
    </div>
  );
};

export default SelectBody;
