import Option from "./Option/Option";
import s from "./SelectBody.module.css";
import search from "../../../assets/search.svg";
import { useState } from "react";

interface SelectBodyPropsType {}

const SelectBody: React.FC<SelectBodyPropsType> = () => {
  const [text, setText] = useState<string>("");

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
        <Option />
      </div>
    </div>
  );
};

export default SelectBody;
