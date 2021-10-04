import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 60px;
  width: 100%;
  padding: 10px 0;

  background: ${(props) => props.theme.color.primary};

  font-family: ${(props) => props.theme.font.corefont};
  font-size: 22px;
  color: ${(props) => props.theme.color.onprimarylight};

  box-shadow: 0px -2px 15px rgba(50, 50, 50, 0.45);
`
export const FooterItem = styled.a`
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  &:active {
    color: ${(props) => props.theme.color.hightlight};
  }
`
