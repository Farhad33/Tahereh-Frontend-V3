import React from 'react'
import styled from 'styled-components'
import { Modal, P, YesButtom, NoButtom } from './Modal'


export function RemoveModal({ showModal, setShowModal }) {
    return (
        <Modal showModal={showModal} setShowModal={setShowModal} >
            <P>Are you sure you want to delete it?</P>
            <Buttondiv>
                <YesButtom>Yes</YesButtom>
                <NoButtom onClick={() => setShowModal(!showModal)}>No</NoButtom>
            </Buttondiv>
        </Modal >
    )
}

const Buttondiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    button {
        margin: 20px;
    }
    margin: 24px 22px;
`
