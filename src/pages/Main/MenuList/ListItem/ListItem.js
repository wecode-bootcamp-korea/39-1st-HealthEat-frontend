import React from 'react';

const ListItem = ({ name, imageSrc }) => {
  return (
    <div className="menu-list__items__each-item">
      <img className="menu-icon" src={imageSrc} />
      <p className="menu-name">{name}</p>
    </div>
  );
};

export default ListItem;
