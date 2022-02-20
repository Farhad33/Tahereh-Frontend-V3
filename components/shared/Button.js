import styled from 'styled-components'

export const Button = styled.button`
    width: 85px;
    height: 38px;
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 50px;
    color: ${({ color, theme }) => color === "orange" ? theme.colors.whiteColor : theme.colors.blackColor};
    background-color: ${({ color, theme }) => color === "orange" ? theme.colors.orangeColor : theme.colors.whiteColor};

    :hover{
        box-shadow: 0px 0px 4px 1px rgba(14, 49, 15, 0.5);
    }
`