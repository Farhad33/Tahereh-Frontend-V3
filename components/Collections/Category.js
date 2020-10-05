import React, { useState } from 'react'
import styled from 'styled-components'
import api from '../../util/api'
import { color } from '../../util/variables'


export default function Category({product :{ name = '', photo_alt = '', photo_src = '' }}) {
    const [mode, setMode] = useState('read')
    const [title, setTitle] = useState(name)
    const [photoAlt, setPhotoAlt] = useState(photo_alt)
    const [photo, setPhoto] = useState(photo_src)

    const handleEditButton = () => {
        if (mode === 'edit') {
            setMode('read')
            
            
        } else {
            setMode('edit')
        }
    }

    const handleFileUpload = (event) => {
        api.put("/collection", {photo: event.target.files})
        // setPhoto(event.target.files)
        // const reader = new FileReader();
        // reader.onload = function(e) {
        //   setPhoto(e.target.result)
        // }
        // reader.readAsDataURL(event.target.files[0]); // convert to base64 string
    }

    return (
        <Container>
            <ImageContainer>
                <Image src={photo} alt={photo_alt}/>
            </ImageContainer>
            { mode === 'edit' ? <ChooseFile type="file" onChange={handleFileUpload} /> : '' }
            { mode === 'edit' ? <input value={photoAlt} onChange={(e) => setPhotoAlt(e.target.value)} /> : '' }
            <EditButton onClick={handleEditButton}>
                { mode === 'edit' ? 'Submit' : 'Edit' }
            </EditButton>
            <Line />
            { mode === 'edit' ? <input value={title} onChange={(e) => setTitle(e.target.value)} /> : <Title>{name}</Title> }

            <form method="post" encType="multipart/form-data" action="http://localhost:4001/collection">
                <input type="file" name="avatar" />
                <input type="submit" value="Submit" />
            </form>

         </Container>

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

const Image = styled.img`
    max-width:100%;
    max-height:100%;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
    height: 300px;
    border: 1px solid ${color.secondary};
`
const Line = styled.div`
    width: 170px;
    height: 30px;
    margin: 50px 0 30px 0;
    background: rgb(237,237,237);
    background: linear-gradient(180deg, rgba(237,237,237,0.8561799719887955) 0%, rgba(255,255,255,1) 48%);
    border-radius: 1px;
`

const Title = styled.p`
    color: ${color.primary};
    font-size: 1.5rem;
`