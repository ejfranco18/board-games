import React, { ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    blue: '#32a1ce',
    cambrigeBlue: '#ABC4AB',
    darkGrey: '#666666',
    grey: '#bbbbbb',
    lightGreen: '#7ADFBB',
    lightMing: '#028585',
    ming: '#006775',
    onyx: '#36313D',
    orange: '#ee714f',
    persianGreen: '#06B49A',
    platinum: '#EAEAEA',
    transparentWhite: 'rgba(255, 253, 249, 0.4)',
    white: '#e6e6e6',
  },
};

type ThemeType = {
  children: ReactElement;
};

const Theme = ({ children }: ThemeType) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
