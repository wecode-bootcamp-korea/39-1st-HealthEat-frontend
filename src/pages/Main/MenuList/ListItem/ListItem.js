import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ menuListDatas }) => {
  const { category, name, image } = menuListDatas;
  const navigate = useNavigate();

  return (
    <div className="menu-list-each-item">
      <div
        className="menu-icon"
        onClick={() => {
          if (category >= 1 && category <= 4)
            navigate(`/store?category=${category}`);
        }}
      >
        <img src={image} />
      </div>
      <p className="menu-name">{name}</p>
    </div>
  );
};

export default ListItem;
