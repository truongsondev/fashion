import classNames from "classnames/bind";
import style from "./SecondHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
function SecondHeader() {
  return (
    <div className={cx("second-header")}>
      <div className={cx("container-fill")}>
        <div className={cx("container-nav", "home")}>
          <span>Trang chủ</span>
        </div>
        <div className={cx("container-nav", "newItems")}>
          <span>Sản phẩm mới</span>
        </div>
        <div className={cx("container-nav", "Category")}>
          <span>Danh mục</span>
          <FontAwesomeIcon icon={faCaretDown} className={cx("down")} />
        </div>
        <div className={cx("container-nav", "LoveItems")}>
          Sản phẩm yêu thích
        </div>
      </div>
      <div className={cx("search")}>
        <input className={cx("text")} placeholder="Nhập tên sản phẩm" />
        <div className={cx("icon-search")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={cx("icon")} />
          Tìm kiếm
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;
