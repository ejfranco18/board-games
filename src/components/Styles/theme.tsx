import React, { ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    eerieBlack: '#1B1B1E',
    eerieBlackTransparent: 'rgb(27, 27, 30, 0.4)',
    platinum: '#D8DBE2',
    charcoal: '#373F51',
    moonstone: '#58A4B0',
    yellowGreen: '#85CB33',
    asparagus: '#9fe74d',
    blue: '#32a1ce',
    kellyGreen: '#72b723',
    darkGrey: '#666666',
    grey: '#bbbbbb',
    lightGreen: '#7ADFBB',
    lightMing: '#028585',
    ming: '#006775',
    onyx: '#36313D',
    orange: '#ee714f',
    persianGreen: '#06B49A',
    silver: '#C5C6C7',
    silverTransparent: 'rgb(197, 198, 199, 0.8)',
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
