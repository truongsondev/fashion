import classNames from "classnames/bind";
import styles from "./Items.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Item() {
  return (
    <div className={cx("frag")}>
      <div className={cx("container-item")}>
        <div className={cx("icon-item")}>
          <img src="/heart_icon.png" />
          <img src="/add_shopping_cart 1.png" className={cx("cart")} />
        </div>
        <div className={cx("main-item")}>
          <img src="./item.png" />
        </div>
        <div className={cx("price-item")}>
          <div class={cx("container")}>
            <div class="item-infor">
              <p>Áo thun thể thao</p>
              <p>99 000 VND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
