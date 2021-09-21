import LangBlock from "./LangBlock/LangBlock";
import s from "./SelectHeader.module.css";
import arrowImg from "../../../assets/icon.svg";

interface SelectHeaderPropsType {}

const SelectHeader: React.FC<SelectHeaderPropsType> = () => {
  return (
    <div className={s.selectHeader}>
      <div className={s.input}>
        {false ? (
          <div className={s.placeholdBlock}>Выберите язык из списка</div>
        ) : (
          <>
            <LangBlock />
          </>
        )}
      </div>
      <div className={s.arrow}>
        <img alt="arrow" src={arrowImg} />
      </div>
    </div>
  );
};

export default SelectHeader;
