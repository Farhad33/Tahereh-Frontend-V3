import styled from 'styled-components'


export const Chevron = styled.span`
  display: inline-block;
  padding: 13px;
  width: 30px;
  height: 30px;
  border-top: 2px solid ${({ theme }) => theme.colors.darkGreen};
  border-left: 2px solid ${({ theme }) => theme.colors.darkGreen};
  ${({ navigateTo }) => navigateTo === "previous" ? 'transform: rotate(-45deg);' : 'transform: rotate(135deg);'}
  cursor: pointer;
  :hover{
      border-top: 2px solid ${({ theme }) => theme.colors.hoverColor};
      border-left: 2px solid ${({ theme }) => theme.colors.hoverColor};
  }
`