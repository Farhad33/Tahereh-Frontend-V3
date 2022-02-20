import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        overflow: hidden;
    }
`

export function Modal({ showModal, setShowModal, children }) {

    return (
        <MainContainer showModal={showModal} onClick={() => setShowModal(!showModal)} >
            <ContentContainer onClick={(e) => e.stopPropagation()}>
                <span onClick={() => setShowModal(!showModal)}></span>
                {showModal && <GlobalStyle />}
                <Contentdiv>
                    {children}
                </Contentdiv>
            </ContentContainer>
        </MainContainer >
    )
}

const MainContainer = styled.div`
    display: ${({ showModal }) => showModal ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    overflow: hidden;
    background-color: #89878761;
`
const ContentContainer = styled.div`
    padding: 10px;
    padding-top: 70px;

    width: 600px;
    /* height: 400px; */
    background-color: white;
    box-shadow: rgba(255, 181, 70, 0.12) 0px 2px 4px 0px, rgba(255, 181, 70, 0.32) 0px 2px 16px 0px;
    position: relative;
    span {
        width: 37px;
        height: 35px;
        display: inline-block;
        position: absolute;
        top: 15px;
        right: 15px;
        background: url("/img/times.png");
    }
`
const Contentdiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
 `


export const P = styled.p`
    padding-top: 30px;
    font-size: 24px;
    font-weight: 400; 
    line-height: 28.13px;
    font-style: normal;
    font-weight: normal;
    color: #828282;
`