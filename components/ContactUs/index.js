import styled from 'styled-components'


export default function ContactUs() {
    return (
        <Contactdiv>
            <Inner>
                <h2>SAELS MANAGER</h2>
                <Hrdiv>
                    <span></span>
                </Hrdiv>
                <h3>Follow your dreams</h3>
            </Inner>
            <ContactDetails>
                <Item><img></img> <p>Kermanshah</p></Item>
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
    width    : 572px ;
    margin-bottom: 60px;
    h2{
        color: rgba(14, 49, 15, 0.49);
        text-align: center;
        font-size: 50px;
    }
    h3{
        letter-spacing: 6px;
        font-size:18px;
        color:rgba(14, 49, 15, 0.5);
        text-align: center;
    }
`

const Hrdiv = styled.div`
    width: 100%;
    height:1px;
    background-color: rgba(14, 49, 15, 0.49);
    position: relative;
    margin: 19px 0 28px;
    span {
        position: absolute;
        left:50%;
        top: -2px;
        width: 20px;
        height: 20px;
        background-color: #869E87;
        border-radius: 3px;
        transform: rotate(45deg) translateX(-50%) ;
    }
`

const ContactDetails = styled.div`
    border: 1px solid rgba(14, 49, 15, 0.49);
    width: 572px;
    padding:48px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
`

const Item = styled.div`
`
