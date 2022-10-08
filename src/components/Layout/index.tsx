/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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
        <main
          css={css`
            min-height: 100vh;
          `}>
          {children}
        </main>
      </Container>
      <Footer />
    </>
  );
};
