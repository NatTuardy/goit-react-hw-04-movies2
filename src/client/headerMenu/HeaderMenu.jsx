import { NavLink } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";
import { items } from "./items";

const HeaderMenu = () => {
  const menuElements = items.map(({ id, name, href }) => (
    <li key={id} className={styles.item}>
      <NavLink
        to={href}
        exact
        activeClassName={styles.active}
        className={styles.link}
      >
        {name}
      </NavLink>
    </li>
  ));

  return <ul className={styles.menu}>{menuElements}</ul>;
};

export default HeaderMenu;