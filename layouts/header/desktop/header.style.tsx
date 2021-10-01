import styled from 'styled-components'
export const HeaderWrapper = styled.header`
  text-transform: capitalize;
  background: #28164e;
`

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  position: relative;

  @media screen and (max-width: 992px) {
    padding: 11px 0 28px 0;
  }
`
