import React from 'react';
import ListItem from './ListItem/ListItem';

const MENU_LIST_DATAS = [
  { name: '눈', image: '' },
  { name: '간', image: '' },
  { name: '관절 / 뼈', image: '' },
  { name: '장', image: '' },
  { name: '다이어트', image: '' },
  { name: '위 / 소화', image: '' },
  { name: '피부', image: '' },
  { name: '피로 / 활력', image: '' },
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
