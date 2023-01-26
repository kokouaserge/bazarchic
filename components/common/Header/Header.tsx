import React, { FC, useState, useEffect } from 'react';
import Head from 'next/head';
import MainNav from './MainNav';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [isTop, setisTop] = useState(true);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    return () => {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    const $head = document.getElementById('nc-sk-header');
    if (!$head) return;
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      !!isTop && setisTop(false);
    } else {
      setisTop(true);
    }
  }

  return (
    <div
      id="nc-sk-header"
      className="nc-Header relative lg:sticky lg:top-0 w-full lg:left-0 lg:right-0 z-40"
    >
      <Head>
        <title>Test | test with react , nextjs, Graphql and tailwindcss</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAV */}
      <MainNav isTop={isTop} />
    </div>
  );
};

export default Header;
