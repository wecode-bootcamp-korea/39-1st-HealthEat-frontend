import React from 'react';

const ListItem = ({ name, imageSrc }) => {
  return (
    <div className="menu-list__items__each-item">
      <div className="menu-icon">
        <img src={imageSrc} />
      </div>
      <p className="menu-name">{name}</p>
    </div>
  );
};

export default ListItem;