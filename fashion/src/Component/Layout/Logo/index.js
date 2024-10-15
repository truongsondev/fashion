import classNames from "classnames/bind";
import style from "./Logo.module.scss";
const cx = classNames.bind(style);
function Logo() {
  return (
    <div className={cx("container")}>
      <img src="./TS men.store.png" />
    </div>
  );
}

export default Logo;
