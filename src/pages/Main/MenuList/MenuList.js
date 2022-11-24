import React from 'react';
import ListItem from './ListItem/ListItem';

const MENU_LIST_DATAS = [
  { category: 1, name: '눈', image: '/images/mainListIcons/eye-care.png' },
  { category: 2, name: '간', image: '/images/mainListIcons/liver.png' },
  {
    category: 3,
    name: '관절 / 뼈',
    image: '/images/mainListIcons/articulation.png',
  },
  { category: 4, name: '장', image: '/images/mainListIcons/intestine.png' },
  {
    category: 5,
    name: '다이어트',
    image: '/images/mainListIcons/diet-food.png',
  },
  {
    category: 6,
    name: '위 / 소화',
    image: '/images/mainListIcons/stomach.png',
  },
  { category: 7, name: '피부', image: '/images/mainListIcons/skin-care.png' },
  {
    category: 8,
    name: '피로 / 활력',
    image: '/images/mainListIcons/energy-drink.png',
  },
];

const MenuList = () => {
  return (
    <article className="menu-list">
      <div className="menu-list-title">
        <span className="menu-list-title-name">고민별 상품 보기</span>
      </div>
      <div className="menu-list-items">
        {MENU_LIST_DATAS.map((data, idx) => (
          <ListItem key={idx} menuListDatas={data} />
        ))}
      </div>
    </article>
  );
};

export default MenuList;
