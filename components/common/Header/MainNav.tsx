import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import MenuBar from './MenuBar';

export interface MainNavProps {
  isTop: boolean;
}

const MainNav: FC<MainNavProps> = ({ isTop }) => {
  return (
    <div
      className={`nc-MainNav relative z-10 ${
        isTop ? 'onTop ' : 'notOnTop backdrop-filter'
      }`}
    >
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14">
          <Logo />
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="flex items-center xl:hidden">
            <div className="px-1" />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
