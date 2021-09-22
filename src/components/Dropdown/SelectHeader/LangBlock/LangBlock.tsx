import s from "./LangBlock.module.css";
import cross from "../../../../assets/cross.svg";
import { ActionsType, deleteChosenLangAC } from "../../reducer";

interface LangBlockPropsType {
  id: number;
  name: string;
  dispatch: React.Dispatch<ActionsType>;
}

const LangBlock: React.FC<LangBlockPropsType> = ({ id, name, dispatch }) => {
  const deleteChosen = (id: number) => {
    dispatch(deleteChosenLangAC(id));
  };

  return (
    <div className={s.langBlock}>
      <div className={s.langBlock__text}>{name}</div>
      <div className={s.langBlock__cross} onClick={() => deleteChosen(id)}>
        <img alt="cross" src={cross} />
      </div>
    </div>
  );
};

export default LangBlock;
