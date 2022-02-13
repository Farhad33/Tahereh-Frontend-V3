import React from 'react'
import styled from 'styled-components'
import { Modal } from './Modal'


export function RemoveModal({ showModal, setShowModal }) {
    return (
        <Modal showModal={showModal} setShowModal={setShowModal} >
            <P>Are you sure you want to delete it?</P>
            <div>
                <YesButtom>Yes</YesButtom>
                <NoButtom onClick={() => setShowModal(!showModal)}>No</NoButtom>
            </div>
        </Modal >
    )
}

const P = styled.p`
    padding-top: 100px;
    font-size: 24px;
    font-weight: 400; 
    line-height: 28.13px;
    font-style: normal;
    font-weight: normal;
    color: #828282;
`
const Button = styled.button`
    width: 85px;
    height: 38px;
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 50px;
    margin-top: 54px;
    margin-bottom: 54px;
    margin: 54px 22px;
    :hover{
        box-shadow: 0px 0px 4px 1px rgba(14, 49, 15, 0.5);
    }
`

const YesButtom = styled(Button)`
    color: #FFFFFF;
    background: #FFB546;
`

const NoButtom = styled(Button)`
    color: #000000;
    background: #FFFFFF;
`