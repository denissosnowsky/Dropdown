import s from "./Option.module.css";
import chosen from "../../../../assets/up.svg";
import {
  ActionsType,
  addToChosenLangAC,
  deleteChosenLangAC,
  toggleChosenLangAC,
} from "../../reducer";

interface OptionPropsType {
  img: string;
  name: string;
  dispatch: React.Dispatch<ActionsType>;
  id: number;
  isChosen: boolean;
}

const Option: React.FC<OptionPropsType> = ({
  img,
  name,
  dispatch,
  id,
  isChosen,
}) => {
  const addToChosen = (id: number) => {
    dispatch(addToChosenLangAC(id));
  };

  const deleteChosen = (id: number) => {
    dispatch(deleteChosenLangAC(id));
  };

  const toggleChosen = (id: number) => {
    dispatch(toggleChosenLangAC(id));
  };

  return (
    <div className={s.option}>
      <div className={s.title} onClick={() => toggleChosen(id)}>
        <img alt="flag" src={img} />
        <div className={s.name}>{name}</div>
      </div>
      {isChosen ? (
        <div className={s.checkboxPushed} onClick={() => deleteChosen(id)}>
          <img alt="chosen" src={chosen} />
        </div>
      ) : (
        <div className={s.checkboxEmpty} onClick={() => addToChosen(id)}></div>
      )}
    </div>
  );
};

export default Option;
