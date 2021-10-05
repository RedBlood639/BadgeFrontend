import styled from 'styled-components'
type Props = {
  active: boolean
}
export const Button = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  cursor: pointer;
  ${(Props) => (Props.active ? 'background:red;' : '')}
`

export const Icon = styled.div`
  font-size: 20px;
`

export const Label = styled.span`
  font-size: 12px;
  text-transform: capitalize;
`
