import Logo from "@/Component/Layout/Logo";
import classNames from "classnames/bind";
import style from "./TopHeader.module.scss";
const cx = classNames.bind(style);
function TopHeader() {
  return (
    <div className={cx("top-header")}>
      <div>
        <img src="/nologin.png" />
      </div>
      <Logo content="Logo" />
      <div>
        <img src="./Vector.png" />
      </div>
    </div>
  );
}

export default TopHeader;
