import React, { useState } from 'react';
import './dropdownMenu.css';
import {Link} from 'gatsby';



function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown_">
      <button className="dropdown-toggle_" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-menu_">
          {items.map((item, index) => (
            <Link to={item.url} className="dropdown-item_" key={index}>{item.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
