import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../util/api'
import Category from './Category'
import { color } from '../../util/variables'


export default function Categories() {
    const [collections, setCollections] = useState([])
    const [mode, setMode] = useState('read')

    useEffect(() => {
        api.get('/collections')
            .then(result => {
                setCollections(result.data)
            })
    }, [])



    return (
        <Container>
            {/* <Category key={0} collection={null} /> */}
            <ImageContainer>
                <Image src="" />
            </ImageContainer>
            {collections.map(collection => (
                <Category key={collection.id} collection={collection} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
`
const ImageContainer = styled.div`
position:relative;
    display: flex;
    justify-content: center;
    width: 32vw;
    min-width: 300px;
    height: 550px;
    border: 1px solid ${color.secondary};
    cursor: pointer;
`

const Image = styled.img`
    max-width:100%;
    max-height:100%;
    object-fit: cover;
`
