import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
  return (
    <header className="nav">
      <nav className="nav__bar">
        <div className="nav__bar__left">
          <Link to="/store" className="nav__bar__left__store">
            <p>스토어</p>
          </Link>
        </div>
        <div className="nav__bar__logo">
          <Link to="/main" className="nav__bar__left__store">
            <p>Health Eat</p>
          </Link>
        </div>
        <ul className="nav__bar__righticon">
          <li className="nav__bar__righticon__item">
            <Link to="/">
              <img
                src="/images/free-icon-add-cart-6032906.png"
                alt="장바구니"
                width="18px"
                height="18px"
              />
            </Link>
          </li>
          <li className="nav__bar__righticon__item">
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
