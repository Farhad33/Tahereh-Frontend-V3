import React, { useState } from 'react'
import styled from 'styled-components'
import api, { baseURL } from '../../util/api'
import { color } from '../../util/variables'
import Link from 'next/link'
import { ModifyButton } from '../shared/ModifyButton'
import { ImageContainer } from '../shared/ImageContainer'

export default function Category({ collection: { id = null, name = '', photo_alt = '', photo_src = '' } }) {
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
        <>
            {
                id ? (
                    <Container>
                        <Link href={`collections/${id}/products`}>
                            <ImageContainer>
                                <Image src={baseURL + '/public/' + photo} alt={photo_alt} />
                                {
                                    mode === 'edit' && (
                                        <>
                                            <ModifyButton mode="remove"></ModifyButton>
                                            <ModifyButton mode="edit"></ModifyButton>
                                        </>
                                    )
                                }
                            </ImageContainer>
                        </Link>
                        {/* <Line /> */}
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
}
`


// const Line = styled.div`
// width: 100%;
// height: 30px;
// margin: 50px 0 30px 0;
// background: rgb(237, 237, 237);
// background: linear-gradient(180deg, rgba(237, 237, 237, 0.2) 0 %, rgba(255, 255, 255, 1) 48 %);
// border-radius: 1px;
// `

const Title = styled.p`
width: 100 %;
text-align: center;
color: ${color.primary};
font-size: 1.5rem;
margin: 14px 0 32px;
`