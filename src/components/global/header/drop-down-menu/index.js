import React, { useState } from "react";
import * as style from "./drop-down-menu.module.scss";
import classNames from "classnames";
import { Link } from 'gatsby';

function DropDownMenu({title, items}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const DropdownMenuItem = ({items}) => {
    return (
        <ul className={style.dropdownMenu}>
        {items.map((drop, index) => (
            <li key={index}>
                <i>
                    {drop?.icon && (
                        <img
                            src={drop?.icon?.url}
                            alt={drop.title}
                        />
                    )}
                </i>
                <Link
                    to={`${drop.url}`}
                    className="text-bodyCopy text-sm"
                >
                    {drop.title}
                </Link>
            </li>
        ))}
    </ul>
    );
  };

  return (
    <div
        className={style.menu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <button className={classNames(style.hasChild,'text-bodyCopy text-sm ')}>{title}</button>
        {isDropdownVisible && <DropdownMenuItem items={items} />}
    </div>
  );
}

export default DropDownMenu;