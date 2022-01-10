import styled from 'styled-components'

export default function ContactUs() {
    return (
        <Contactdiv>
            <Inner>
                <h2>SAELS MANAGER</h2>
                <HorzontalLine>
                    <Star />
                </HorzontalLine>
                <h3>Follow your dreams</h3>
            </Inner>
            <ContactDetails>
                <Item><img src="./img/contactus1.png" alt="contact us" /> <p>Kermanshah</p></Item>
                <Item><img src="./img/contactus2.png" alt="contact us" /> <p>09188563812</p></Item>
                <Item><img src="./img/contactus3.png" alt="contact us" /> <p>http://www.Aviror.com</p></Item>
            </ContactDetails>
        </Contactdiv>
    )
}

const Contactdiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Inner = styled.div`
    width: 572px;
    margin-bottom: 60px;
    h2 {
        color: ${({ theme: { colors } }) => colors.headerTextColor};
        text-align: center;
        font-size: 50px;
        font-family: 'Purple Purse';
    }
    h3 {
        letter-spacing: 6px;
        font-size: 18px;
        color: rgba(14, 49, 15, 0.5);
        text-align: center;
    }
    @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.mobile}){
        width: 100%;
        h2{
            font-size: 32px;
        }
        h3{
            font-size: 14px;
        }
    }
`

const HorzontalLine = styled.div`
    width: 100%;
    height:1px;
    background-color: ${({ theme: { colors } }) => colors.headerTextColor};
    position: relative;
    margin: 19px 0 28px;
`

const Star = styled.span`
    position: absolute;
    left:50%;
    top: -2px;
    width: 20px;
    height: 20px;
    background-color: #869E87;
    border-radius: 3px;
    transform: rotate(45deg) translateX(-50%) ;
`

const ContactDetails = styled.div`
    border: 1px solid ${({ theme: { colors } }) => colors.headerTextColor};
    width: 572px;
    height: auto;
    padding: 32px;
    @media (max-width: ${({ theme: { breakPoints } }) => breakPoints.mobile}) {
        width: 94%;
        padding: 24px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18px 0;
    p {
        width: 162px;;
    }
    img {
        margin-right: 33px;
        width: auto;
        height: 30px;
    }
`