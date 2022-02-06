import styled from 'styled-components'

export const GoToBackPage = styled.span`
  width: 0px;
  height: 0px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 25px solid ${({ theme }) => theme.colors.midGrey};
  margin: 0 24px;
  ${({ direction }) => direction === 'left' ? 'transform: rotate(180deg);' : ''}
  :hover { 
    border-left: 25px solid ${({ theme }) => theme.colors.hoverColor};
  }
`