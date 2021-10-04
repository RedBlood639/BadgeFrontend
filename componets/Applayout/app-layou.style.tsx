import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`
export const LayoutContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  background: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.onsecondary};
  font-family: ${(props) => props.theme.font.corefont};
`
export const A = styled.a`
  color: inherit;
`
