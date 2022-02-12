import React from 'react'
import styled from 'styled-components'
import { Modal } from './Modal'


export function RemoveModal({ showModal, setShowModal }) {
    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            Are you sure you want to delete it?
        </Modal>
    )
}
