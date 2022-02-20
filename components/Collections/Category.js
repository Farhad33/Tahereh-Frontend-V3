import React, { useState } from 'react'
import styled from 'styled-components'
import api, { photoBaseURL } from '../../util/api'
import { color } from '../../util/variables'
import Link from 'next/link'
import { ModifyButton, EditModal, RemoveModal, ImageContainer } from '../shared'

export default function Category({ collection: { id = null, name = '', photo_alt = '', photo_src = '' } }) {
    const [mode, setMode] = useState('edit')

    const [editModal, setEditModal] = useState(false)
    const [removeModal, setRemoveModal] = useState(false)

    const [title, setTitle] = useState(name)
    const [photoAlt, setPhotoAlt] = useState(photo_alt)
    const [photo, setPhoto] = useState(photo_src)

    const onSubmit = (formData) => {
        api.put(`/collections/${id}`, formData)
        .then((result) => {
            setTitle(result.data.result.name)
            setPhotoAlt(result.data.result.photo_alt)
            setPhoto(result.data.result.photo_src)
            setEditModal(!editModal)
        })
        .catch((err) => { console.log(err) })
    }

    const handleEditOnClick = (e) => {
        e.stopPropagation()
        setEditModal(!editModal)
    }
    const handleRemoveOnClick = (e) => {
        e.stopPropagation()
        setRemoveModal(!removeModal)
    }

    const data = { name: title, photo_alt: photoAlt}
    return (
        <>
            <EditModal data={data} showModal={editModal} setShowModal={setEditModal} onSubmit={onSubmit} />
            <RemoveModal showModal={removeModal} setShowModal={setRemoveModal} />
            {
                id ? (
                    <Container>
                        <Link href={`collections/${id}/products`}>
                            <ImageContainer>
                                <Image src={photoBaseURL + photo} alt={photo_alt} />
                                {
                                    mode === 'edit' && (
                                        <>
                                            <ModifyButton onClick={handleRemoveOnClick} mode="remove"></ModifyButton>
                                            <ModifyButton onClick={handleEditOnClick} mode="edit"></ModifyButton>
                                        </>
                                    )
                                }
                            </ImageContainer>
                        </Link>
                        <Title>{title}</Title>
                    </Container>
                ) : (
                    mode === 'edit' && (
                        <Container>
                            <ImageContainer>
                                <Image add={true} src="/img/add.png" alt="add" />
                            </ImageContainer>
                        </Container>
                    )
                )
            }
        </ >
    )
}

const ChooseFile = styled.input`
    max-width: 200px;
`

const EditButton = styled.button`
    margin-top: 10px;
    padding: 8px 30px;
    min-width: 110px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1%;    
    width: 20%;
    min-width: 300px;
`
const Image = styled.img`
    max-width:100%;
    max-height:100%; 
    object-fit: ${({ add }) => add ? " none" : "cover"};
`

const Title = styled.p`
    width: 100%;
    text-align: center;
    color: ${color.primary};
    font-size: 1.5rem;
    margin: 14px 0 32px;
`