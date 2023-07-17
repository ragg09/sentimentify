import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import NavBarDropdown from './NavbarDropdown';
import { isAuthenticated } from '@/src/utils';

const Navbar: FC = () => {
  const { asPath } = useRouter();

  const navItems = [
    { url: '/dashboard', text: 'Dashboard' },
    { url: '/sentimentify', text: 'Sentimentify' },
    { url: '/sentimentify/history', text: 'History' },
  ];

  const dropdownItems = [{ text: 'Profile', url: '/auth/progile' }];
  if (!isAuthenticated()) {
    return null;
  }

  return (
    <header className="sticky top-0 z-10 px-[64px] flex shadow-sm bg-white text-textGray items-center text-[14px]">
      <nav className="hidden md:flex grow justify-center">
        <ul className="flex space-x-[32px]">
          {navItems.map((navItem, index) => (
            <li key={index} className="pointer-events-none">
              <Link
                className={`flex items-center px-[8px] py-[21px] border-b pointer-events-auto ${
                  new RegExp('^' + navItem.url).test(asPath)
                    ? ' border-amber-800'
                    : 'border-transparent'
                }`}
                href={navItem.url}
              >
                {navItem.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center space-x-2">
        <NavBarDropdown options={dropdownItems}>
          <p>Option</p>
        </NavBarDropdown>
      </div>
    </header>
  );
};

export default Navbar;
