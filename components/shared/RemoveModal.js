import React from 'react'
import styled from 'styled-components'
import { Modal, P } from './Modal'
import { Button } from './index'


export function RemoveModal({ showModal, setShowModal }) {
    return (
        <Modal showModal={showModal} setShowModal={setShowModal} >
            <P>Are you sure you want to delete it?</P>
            <Buttondiv>
                <Button color="orange">Yes</Button>
                <Button color="white" onClick={() => setShowModal(!showModal)}>No</Button>
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
