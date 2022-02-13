import React, { useEffect } from 'react'
import styled from 'styled-components'


export function Modal({ showModal, setShowModal, children }) {
    let currentHeight = window.pageYOffset

    useEffect(() => {
        if (showModal) {
            disableScroll()
        } else {
            enableScroll()
        }
    }, [showModal])


    let keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () { supportsPassive = true; }
        }));
    } catch (e) { }

    let wheelOpt = supportsPassive ? { passive: false } : false;
    let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // call this to Disable
    function disableScroll() {
        console.log("disableScroll");
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    // call this to Enable
    function enableScroll() {
        console.log('enableScroll');
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }


    return (
        <MainContainer onClick={() => { setShowModal(!showModal); enableScroll() }} currentHeight={currentHeight} >
            <ContentContainer onClick={(e) => e.stopPropagation()}>
                <span onClick={() => { setShowModal(!showModal); enableScroll() }}></span>
                <Contentdiv>
                    {children}
                </Contentdiv>
            </ContentContainer>
        </MainContainer >
    )
}

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${({ currentHeight }) => `${currentHeight}px`};
    right: 0;
    z-index: 100;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    background-color: #89878761;
`
const ContentContainer = styled.div`
    padding: 10px;
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