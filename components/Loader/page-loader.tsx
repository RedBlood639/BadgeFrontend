import React from 'react'
import styled, { keyframes } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const rorate = keyframes`
    from {transform : rotate(0deg);}
    to {transform : rorate(360deg);}
`
const LoaderBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${themeGet(`colors.white`)};
  opacity: 0.75;
  z-index: 9999;
`
