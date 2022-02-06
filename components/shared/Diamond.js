import styled from 'styled-components'

export const Diamond = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.midGrey};
    transform: rotate(45deg);
    border-radius: 2px;
    @media only screen and (max-width: 600px) {
        width: 15px;
        height: 15px;
    }
`

