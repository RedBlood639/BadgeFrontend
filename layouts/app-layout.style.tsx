import styled from 'styled-components'
type Props = { popuped: boolean }

export const LayoutWrapper = styled.div<Props>`
  height: 100vh;
  ${(props) => (props.popuped ? 'overflow:hidden' : '')};
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    zindex: 1;
  }
`
