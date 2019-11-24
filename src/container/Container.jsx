import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import { Main } from '../main';

export const Container = () => {
      return <div className="container">
            <Header />
            <Main />
            <Footer />
      </div>;
}