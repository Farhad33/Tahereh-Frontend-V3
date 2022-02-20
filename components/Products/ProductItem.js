import React, { useState } from 'react'
import styled from 'styled-components'
import api, { baseURL } from '../../util/api'
import { color } from '../../util/variables'
import Link from 'next/link'
import { ModifyButton, EditModal, RemoveModal } from '../shared'


export default function Productitem({ product: { id = null, name = '', photo_alt = '', photo_src = '' }, collection_id }) {
    const [mode, setMode] = useState('edit')
    const [title, setTitle] = useState(name)
    const [selectedFile, setSelectedFile] = useState(null)
    const [photoAlt, setPhotoAlt] = useState(photo_alt)
    const [photo, setPhoto] = useState(photo_src)
    const [editModal, setEditModal] = useState(false)
    const [removeModal, setRemoveModal] = useState(false)


    const onFileUpload = () => {
        const formData = new FormData();
        formData.append("photo", selectedFile)
        formData.append("name", title)
        formData.append("id", id)
        formData.append("photo_alt", photoAlt)
        api.put("/collections", formData)
            .then(result => {
                setTitle(result.data.result.name)
                setPhotoAlt(result.data.result.photo_alt)
                setPhoto(result.data.result.photo_src)
            })
    }

    const handleEditButton = () => {
        if (mode === 'edit') {
            setMode('read')
            onFileUpload()
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
    return (
        <>
            <EditModal showModal={editModal} setShowModal={setEditModal} />
            <RemoveModal showModal={removeModal} setShowModal={setRemoveModal} />
            {

                id ? (
                    <Container>
                        <Link href={`/collections/${collection_id}/products/${id}`}>
                            <ImageContainer>
                                <Image src={baseURL + '/public/' + photo} alt={photo_alt} />
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
    cursor: pointer;
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