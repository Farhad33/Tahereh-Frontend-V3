import React from 'react'
import styled from 'styled-components'
import { Modal, YesButtom, NoButtom } from './Modal'


export function EditModal({ showModal, setShowModal }) {
    return (
        <Modal button={true} showModal={showModal} setShowModal={setShowModal}>
            <div>
                <Form onSubmit="">
                    <div>
                        <label htmlFor="name">Title</label>
                        <input id="name" name="name" type="text" autoComplete="name" required />
                    </div>
                    <div>
                        <label htmlFor="name">Photo Alt</label>
                        <input id="name" name="name" type="text" autoComplete="name" required />
                    </div>
                    <div>
                        <label htmlFor="name">Upload Photo</label>
                        <input id="name" name="name" type="text" autoComplete="name" required />
                    </div>
                    <div>
                        <label htmlFor="name">Description</label>
                        <input id="name" name="name" type="text" autoComplete="name" required />
                    </div>
                    {/* <button type="submit">Register</button> */}
                </Form>
            </div>
            <Buttondiv>
                <YesButtom>Save</YesButtom>
                <NoButtom onClick={() => setShowModal(!showModal)}>Reset</NoButtom>
            </Buttondiv>
        </Modal>
    )
}

const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    div {
        margin: 10px 0px;
        display: flex;
        justify-content: right;
        align-items: center;
    }
    label {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #828282;
        padding-right: 10px;
    }
    input {
        width: 318px;
        height: 38px;
        background: #FFFFFF;
        border: 1px solid #828282;
        box-sizing: border-box;
        box-shadow: inset 1px 3px 5px #C4C4C4;
        border-radius: 50px;
    }
`

const Buttondiv = styled.div`
    width: 78%;
    display: flex;
    justify-content: right;
    button {
        margin: 10px;
    }
    margin: 24px 22px;
`
