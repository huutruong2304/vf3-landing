import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ILinkItem } from '../types/common';

type Props = {};

interface INavLinkItem extends ILinkItem {
  active?: boolean;
}

const NAV_LINKS: INavLinkItem[] = [
  { id: 1, link: '/home', title: 'Home', active: true },
  { id: 2, link: '/shop', title: 'Shop' },
  { id: 3, link: '/about', title: 'About' },
  { id: 4, link: '/contact', title: 'Contact' },
];

const Header = (props: Props) => {
  return (
    <header className="px-4">
      <nav className="navbar flex">
        <div className="logo lg:w-1/4 flex justify-start">
          <a href="#">LOGO</a>
        </div>
        <ul className="nav-links lg:w-2/4 flex justify-center">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a className={link.active ? 'active' : ''} href={link.link}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="cart lg:w-1/4 flex justify-end">
          <a href="#cart">
            <FaShoppingCart size={24} color="white" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
