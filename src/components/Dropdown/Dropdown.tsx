import s from "./Dropdown.module.css";
import SelectBody from "./SelectBody/SelectBody";

import SelectHeader from "./SelectHeader/SelectHeader";

interface DropdownPropsType {}

const Dropdown: React.FC<DropdownPropsType> = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.head}>Язык</div>
      <SelectHeader />
      {true ? <SelectBody /> : null}
    </div>
  );
};

export default Dropdown;
