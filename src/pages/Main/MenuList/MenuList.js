import React from 'react';
import ListItem from './ListItem/ListItem';

const MENU_LIST_DATAS = [
  '눈',
  '간',
  '관절 / 뼈',
  '장',
  '다이어트',
  '위 /소화',
  '피부',
  '피로 / 활력',
];

const imageSrc = ['', '', '', '', '', '', ''];

const MenuList = () => {
  return (
    <article className="menu-list">
      <div className="menu-list-title">
        <span>고민별 상품 보기</span>
      </div>
      <div className="menu-list-items">
        {MENU_LIST_DATAS.map((data, idx) => (
          <ListItem key={idx} name={data} imageSrc={imageSrc} />
        ))}
      </div>
    </article>
  );
};

export default MenuList;
