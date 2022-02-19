import styled from 'styled-components'
import { Modal, YesButtom, NoButtom } from './Modal'
import { useState } from 'react';
import { Input } from './index';

export function EditModal({ showModal, setShowModal }) {
    const [form, setForm] = useState({
        title: "",
        photo_alt: "",
        upload_photo: "",
        description: ""
    })
    console.log("🚀 ~ file: EditModal.js ~ line 8 ~ EditModal ~ form", form)
    const BlurHnadler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // handleSubmit(value);
    }

    return (
        <Modal button={true} showModal={showModal} setShowModal={setShowModal}>
            <div>
                <Form onSubmit="">
                    <Input onBlur={BlurHnadler} name="title" type="text" required >Title</Input>
                    <Input onBlur={BlurHnadler} name="photo_alt" type="text" required >Photo Alt</Input>
                    <Input onBlur={BlurHnadler} name="upload_photo" type="file" required >Photo Alt</Input>
                    <Input onBlur={BlurHnadler} name="description" type="textarea" required >Description</Input>

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
