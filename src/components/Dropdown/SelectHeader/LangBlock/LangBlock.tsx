import s from "./LangBlock.module.css";
import cross from "../../../../assets/cross.svg";

interface LangBlockPropsType {}

const LangBlock: React.FC<LangBlockPropsType> = () => {
  return (
    <div className={s.langBlock}>
      <div className={s.langBlock__text}>Английский</div>
      <div className={s.langBlock__cross}>
        <img alt="cross" src={cross} />
      </div>
    </div>
  );
};

export default LangBlock;
