import styled from 'styled-components'

export const Line = styled.div`
    width: 17.5vw;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.midGrey};
    @media only screen and (max-width: 600px) {
        width: 110px;
    }
`
