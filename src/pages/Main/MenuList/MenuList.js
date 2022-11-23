import React from 'react';
import ListItem from './ListItem/ListItem';

const MENU_LIST_DATAS = [
  { name: '눈', image: '/images/mainListIcons/eye-care.png' },
  { name: '간', image: '/images/mainListIcons/liver.png' },
  { name: '관절 / 뼈', image: '/images/mainListIcons/articulation.png' },
  { name: '장', image: '/images/mainListIcons/intestine.png' },
  { name: '다이어트', image: '/images/mainListIcons/diet-food.png' },
  { name: '위 / 소화', image: '/images/mainListIcons/stomach.png' },
  { name: '피부', image: '/images/mainListIcons/skin-care.png' },
  { name: '피로 / 활력', image: '/images/mainListIcons/energy-drink.png' },
];

const MenuList = () => {
  return (
    <article className="menu-list">
      <div className="menu-list-title">
        <span className="menu-list-title-name">고민별 상품 보기</span>
      </div>
      <div className="menu-list-items">
        {MENU_LIST_DATAS.map((data, idx) => (
          <ListItem key={idx} name={data.name} imageSrc={data.image} />
        ))}
      </div>
    </article>
  );
};

export default MenuList;
