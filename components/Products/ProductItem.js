import React, { useState } from 'react'
import styled from 'styled-components'
import api, { photoBaseURL } from '../../util/api'
import { color } from '../../util/variables'
import Link from 'next/link'
import { ModifyButton, EditModal, RemoveModal } from '../shared'

export default function Productitem({ product: { id = null, name = '', photo_alt = '', photo_src = '' }, collection_id, is_not_link, has_label }) {

    const [mode, setMode] = useState('edit')
    const [title, setTitle] = useState(name)
    const [photoAlt, setPhotoAlt] = useState(photo_alt)
    const [photo, setPhoto] = useState(photo_src)
    const [editModal, setEditModal] = useState(false)
    const [removeModal, setRemoveModal] = useState(false)

    const onSubmit = (formData) => {
        api.put(`/collections/${collection_id}/products/${id}`, formData)
            .then((result) => {
                setTitle(result.data.result.name)
                setPhotoAlt(result.data.result.photo_alt)
                setPhoto(result.data.result.photo_src)
                setEditModal(!editModal)
            })
            .catch((err) => { console.log(err) })
    }

    const handleEditButton = () => {
        if (mode === 'edit') {
            setMode('read')
        } else {
            setMode('edit')
        }
    }


    const handleEditOnClick = (e) => {
        e.stopPropagation()
        setEditModal(!editModal)
    }
    const handleRemoveOnClick = (e) => {
        e.stopPropagation()
        setRemoveModal(!removeModal)
    }

    const data = { name: title, photo_alt: photoAlt }
    return (
        <>
            <EditModal data={data} showModal={editModal} setShowModal={setEditModal} onSubmit={onSubmit} />
            <RemoveModal showModal={removeModal} setShowModal={setRemoveModal} />
            {

                id ? (
                    <Container>
                        {
                            is_not_link ? (
                                <ImageContainer is_not_link>
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
                            ) : (
                                <Link href={`/collections/${collection_id}/products/${id}`}>
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
                            )
                        }
                        {
                            has_label &&
                            <Text>{title}</Text>
                        }
                        {/* <Line /> */}


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

        </>
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
    margin: 4%;
    `
const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 20vw;
    min-width: 300px;
    height: 480px;
    border: 1px solid ${color.secondary};
    cursor: ${({ is_not_link }) => is_not_link ? "initial" : "pointer"};
`

const Image = styled.img`
    max-width:100%;
    max-height:100%;
    object-fit: cover;
    object-fit: ${({ add }) => add ? " none" : "cover"};
`


// const Line = styled.div`
//     width: 100%;
//     height: 30px;
//     margin: 50px 0 30px 0;
//     background: rgb(237,237,237);
//     background: linear-gradient(180deg, rgba(237,237,237,0.2) 0%, rgba(255,255,255,1) 48%);
//     border-radius: 1px;
// `

const Title = styled.p`
    width: 100%;
    text-align: center;
    color: ${color.primary};
    font-size: 1.5rem;
`


const Text = styled.p`
    font-family: 'Abril Fatface';
    font-size: 5rem;
    font-weight: bold;
    color: #09321682;
    opacity: 0.9;
    position: absolute;
    margin: auto;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    @media only screen and (max-width: 768px) {
        font-size: 3.5rem;
        top: 220px;
        /* left: -45px; */
    }
    @media only screen and (max-width: 600px) {
        font-size: 2.35rem;
        top: 220px;
        /* left: 0px; */
    }
`