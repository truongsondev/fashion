import classNames from "classnames/bind";
import style from "./Header.module.scss";
import TopHeader from "./TopHeader";
import SecondHeader from "./SecondHeader";
const cx = classNames.bind(style);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <TopHeader />
      <SecondHeader />
    </div>
  );
}
export default Header;
