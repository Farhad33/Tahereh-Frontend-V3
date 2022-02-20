import styled from 'styled-components'
import { Modal } from './Modal'
import { useState, useEffect } from 'react';
import { Input, Button } from './index';

export function EditModal({ data, showModal, setShowModal, onSubmit }) {
    const [name, setName] = useState('')
    const [alt, setAlt] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)

    useEffect(() => {
        setName(data.name)
        setAlt(data.photo_alt)
        setDescription(data.description || '')
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("photo", selectedFile)
        formData.append("photo_alt", alt)
        formData.append("name", name)
        formData.append("description", description)
        onSubmit(formData)
    }

    return (
        <Modal button={true} showModal={showModal} setShowModal={setShowModal}>
            <Form onSubmit={handleSubmit} >
                <Input defaultValue={name} onChange={(e) => setName(e.target.value)} name="name" type="text" >Title</Input>
                <Input defaultValue={alt} onChange={(e) => setAlt(e.target.value)} name="photo_alt" type="text" >Photo Alt</Input>
                <Input onChange={(e) => setSelectedFile(e.target.files[0])} name="photo" type="file" >Upload Photo</Input>
                <Input defaultValue={description} onChange={(e) => setDescription(e.target.value)} name="description" type="textarea" >Description</Input>
                <Buttondiv>
                    <Button color="orange" onClick={handleSubmit}>Save</Button>
                    <Button color="white" onClick={() => setShowModal(!showModal)}>Reset</Button>
                </Buttondiv>
            </Form>
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
