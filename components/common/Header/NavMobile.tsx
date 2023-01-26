import React from 'react';
import ButtonClose from '../ButtonClose/ButtonClose';
import Logo from '../Logo/Logo';

export interface NavMobileProps {
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ onClickClose }) => {
  return (
    <div className="overflow-y-auto w-full max-w-sm h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
      <div className="py-6 px-5">
        <Logo />
        <div className="flex flex-col mt-5 text-neutral-700 dark:text-neutral-300 text-sm">
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa
            dolores excepturi reiciendis eveniet tenetur ab harum earum.
            Mollitia tempore nostrum praesentium labore optio perspiciatis,
            architecto delectus deleniti eaque modi?
          </span>
        </div>
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
    </div>
  );
};

export default NavMobile;
