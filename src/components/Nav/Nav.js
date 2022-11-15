import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
  return (
    <header>
      <nav className="nav">
        <div className="nav__left">
          <a href="/store" className="store">
            스토어
          </a>
        </div>
        <div className="nav__logo">
          <a href="/main">Health Eat</a>
        </div>
        <ul className="nav__righticon">
          <li className="nav__righticon__item">
            <Link to="/">
              <img
                src="/images/free-icon-add-cart-6032906.png"
                alt="장바구니"
                width="18px"
                height="18px"
              />
            </Link>
          </li>
          <li className="nav__righticon__item">
            <Link to="/">
              <img
                src="images/free-icon-user-1077063.png"
                alt="마이페이지"
                width="15px"
                height="15px"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
