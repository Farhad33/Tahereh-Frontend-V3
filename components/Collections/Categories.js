import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../util/api'
import Category from './Category'


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
