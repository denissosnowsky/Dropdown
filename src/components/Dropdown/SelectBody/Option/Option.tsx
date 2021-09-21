import s from "./Option.module.css";
import russian from "../../../../assets/russia.svg";
import chosen from "../../../../assets/up.svg";

interface OptionPropsType {}

const Option: React.FC<OptionPropsType> = () => {
  return (
    <div className={s.option}>
      <div className={s.title}>
        <img alt="flag" src={russian} />
        <div className={s.name}>Русский</div>
      </div>
      {true ? (
        <div className={s.checkboxPushed}>
          <img alt="chosen" src={chosen} />
        </div>
      ) : (
        <div className={s.checkboxEmpty}></div>
      )}
    </div>
  );
};

export default Option;
