import React from 'react'
import styled from 'styled-components'
import { Modal } from './Modal'


export function EditModal({ showModal, setShowModal }) {
    return (
        <Modal showModal={showModal} setShowModal={setShowModal}>
            Edit Modal
        </Modal>
    )
}
