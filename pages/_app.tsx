// STYLE
import '../styles/index.scss';
import '../index.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
