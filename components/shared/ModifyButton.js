import styled from 'styled-components'


export const ModifyButton = styled.div`
    position: absolute;
    z-index: 10;
    bottom: 1%;
    width: 26px;
    height: 26px;
    background: url(${(({ mode }) => mode === "remove" ? "/img/remove.png" : "/img/edit.png")});
    right: ${(({ mode }) => mode === "remove" ? "50px" : "14px")};
    background-color: white;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 4px;
    @media only screen and(max-width: 600px) {
        width: 15px;
        height: 15px;
    }
    margin: 2%;
`

