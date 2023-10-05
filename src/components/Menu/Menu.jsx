import { useState } from 'react';
import './Menu.css';

const Menu = ({ data }) => {
    const { configColor, menuItems } = data;

    const renderMenuItems = (items, parentId, depthLevel = 0) => {
        return items
            .filter(item => item.idPadre === parentId)
            .map((item, index) => (
                <li className="menu-items" key={index}>
                    {item.isFolder ? (
                        <>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setDropdown(prev => ({
                                        ...prev,
                                        [item.id]: !prev[item.id]
                                    }));
                                }}
                                style={{ backgroundColor: configColor.itemBackground, color: configColor.itemColor }}
                            >
                                {item.name}
                                {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                            </button>
                            {dropdown[item.id] && (
                                <ul className={`dropdown ${depthLevel > 0 ? "dropdown-submenu" : ""}`} style={{ backgroundColor: configColor.itemBackground }}>
                                    {renderMenuItems(items, item.id, depthLevel + 1)}
                                </ul>
                            )}
                        </>
                    ) : (
                        <a href="#" style={{ color: configColor.itemColor }}>{item.name}</a>
                    )}
                </li>
            ));
    };

    const [dropdown, setDropdown] = useState({});

    return (
        <nav className="menu-nav" style={{ backgroundColor: configColor.background }}>
            <ul className="menus">
                {renderMenuItems(menuItems, data.idFirstNivel)}
            </ul>
        </nav>
    );
};

export default Menu;
