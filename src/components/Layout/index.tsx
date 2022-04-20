import { Container } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { layout } from './types/LayoutTypes';
export const PrivateLayout = ({ children }: layout) => {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};
export const PublicLayout = ({ children }: layout) => {
  return (
    <>
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};
