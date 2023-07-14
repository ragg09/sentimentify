import React, { Fragment } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Fragment>
        <Component {...pageProps} />
        <ToastContainer />
      </Fragment>
      <ToastContainer />
    </Provider>
  );
}
