import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default function Nav() {
  return (
    <header className="nav">
      <nav className="nav-bar">
        <div className="nav-bar-left">
          <Link to="/store" className="nav-bar-left-store-text">
            <p>스토어</p>
          </Link>
        </div>
        <div className="nav-bar-logo">
          <Link to="/main" className="nav-bar-left-store">
            Health Eat
          </Link>
        </div>
        <ul className="nav-bar-righticon">
          <li className="nav-bar-righticon-item">
            <Link to="/cart">
              <img
                src="/images/free-icon-add-cart-6032906.png"
                alt="장바구니"
                width="30px"
                height="30px"
              />
            </Link>
          </li>
          <li className="nav-bar-righticon-item">
            <Link to="/">
              <img
                src="images/free-icon-user-1077063.png"
                alt="마이페이지"
                width="25px"
                height="25px"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
