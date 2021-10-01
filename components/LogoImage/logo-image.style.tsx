import styled from 'styled-components'

type LogoBoxProps = {
  align?: any
}

export const LogoBox = styled.span<LogoBoxProps>`
  min-width: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.align || 'center'};
`
export const Logo = styled.img`
  display: block;
  z-index: 5;
`
