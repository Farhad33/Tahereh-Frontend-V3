import React, { useState } from 'react'
import styled from 'styled-components'
import api, { baseURL } from '../../util/api'
import { color } from '../../util/variables'
import Link from 'next/link'

export default function Category({ product: { id = null, name = '', photo_alt = '', photo_src = '' } }) {
    const [mode, setMode] = useState('read')
    const [title, setTitle] = useState(name)
    const [selectedFile, setSelectedFile] = useState(null)
    const [photoAlt, setPhotoAlt] = useState(photo_alt)
    const [photo, setPhoto] = useState(photo_src)

    const onFileUpload = () => {
        console.log('selectedFile', selectedFile);
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

    return (
        <Link href={`collections/${id}/products`}>
            <Container>
                <ImageContainer>
                    <Image src={baseURL + '/public/' + photo} alt={photo_alt} />
                </ImageContainer>
                {mode === 'edit' ? <>
                    <ChooseFile type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                    <input value={photoAlt} onChange={(e) => setPhotoAlt(e.target.value)} />
                    <EditButton onClick={handleEditButton}>
                        {mode === 'edit' ? 'Submit' : 'Edit'}
                    </EditButton>
                </> : ''}
                <Line />
                {mode === 'edit' ? <input value={title} onChange={(e) => setTitle(e.target.value)} /> : <Title>{title}</Title>}
            </Container>
        </Link>
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
    cursor: pointer;
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 32vw;
    min-width: 300px;
    height: 550px;
    border: 1px solid ${color.secondary};
`

const Image = styled.img`
    max-width:100%;
    max-height:100%;
`


const Line = styled.div`
    width: 100%;
    height: 30px;
    margin: 50px 0 30px 0;
    background: rgb(237,237,237);
    background: linear-gradient(180deg, rgba(237,237,237,0.2) 0%, rgba(255,255,255,1) 48%);
    border-radius: 1px;
`

const Title = styled.p`
    width: 100%;
    text-align: center;
    color: ${color.primary};
    font-size: 1.5rem;
`