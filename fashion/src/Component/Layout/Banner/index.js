import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);
function Banner() {
  return (
    <div className={cx("image")}>
      <img src="/img.png" />
    </div>
  );
}

export default Banner;
