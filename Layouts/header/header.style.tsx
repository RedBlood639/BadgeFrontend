import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 50px;
  width: 100%;

  padding: 0 20px;
  font-family: ${(props) => props.theme.font.logofont};
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.color.onsecondary};
  text-transform: uppercase;

  background: ${(props) => props.theme.color.highlight};

  cursor: pointer;
`
