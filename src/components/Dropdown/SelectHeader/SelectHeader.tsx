import LangBlock from "./LangBlock/LangBlock";
import s from "./SelectHeader.module.css";
import arrowImg from "../../../assets/icon.svg";
import { ActionsType, StateType, toggleModeAC } from "../reducer";

interface SelectHeaderPropsType {
  state: StateType;
  dispatch: React.Dispatch<ActionsType>;
}

const SelectHeader: React.FC<SelectHeaderPropsType> = ({ state, dispatch }) => {
  const toggleMode = () => {
    dispatch(toggleModeAC());
  };

  return (
    <div className={s.selectHeader}>
      <div className={s.input}>
        {state.chosenLang.length > 0 ? (
          <>
            {state.chosenLang.map((item) => (
              <LangBlock
                key={item}
                id={item}
                name={state.languages.filter((it) => it.id === item)[0].name}
                dispatch={dispatch}
              />
            ))}
          </>
        ) : (
          <div className={s.placeholdBlock} onClick={toggleMode}>
            Выберите язык из списка
          </div>
        )}
      </div>
      <div className={s.arrow} onClick={toggleMode}>
        <img
          alt="arrow"
          src={arrowImg}
          className={state.mode ? s.arrowRotated : s.null}
        />
      </div>
    </div>
  );
};

export default SelectHeader;
