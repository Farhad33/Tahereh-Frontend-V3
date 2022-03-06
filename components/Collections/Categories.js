import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../util/api'
import Category from './Category'
import { color } from '../../util/variables'
import { ImageContainer } from '../shared/ImageContainer'

export default function Categories() {
    const [collections, setCollections] = useState([])
    const [mode, setMode] = useState('read')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        api.get('/collections')
            .then(result => {
                setCollections(result.data)
                setLoading(false)
            })
    }, [])

    if (loading) return "Loading..."


    return (
        <Container>
            {/* <Category key={0} collection={null} /> */}
            {/* <AddContainer>
                <ImageContainer>
                    <Image src="" />
                </ImageContainer>
            </AddContainer> */}
            <Category collection="" />
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
    align-items: flex-start;
    justify-content: space-evenly;
`
// const AddContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 2%;
//     width: 20%;
// `
const Image = styled.img`
    max-width:100%;
    max-height:100%;
    object-fit: cover;
`
