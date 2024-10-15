import Header from "../Header";
import classNames from "classnames/bind";
import style from "./DefaultLayoutStyle.module.scss";
import Banner from "../Banner";
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Header />
      </div>
      <div className={cx("banner")}>
        <Banner />
      </div>
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
