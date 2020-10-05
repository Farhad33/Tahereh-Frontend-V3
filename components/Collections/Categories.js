import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../util/api'
import Category from './Category'
import { color } from '../../util/variables'


export default function Categories() {
    const [collections, setCollections] = useState([])
    const [mode, setMode] = useState('read')

    useEffect(() => {
        api.get('/collection')
        .then(result => {
            console.log('result.data',result.data);
            setCollections(result.data)
        })
    }, [])



    return (
        <Container>
            {collections.map(product => (
                <Category  key={product.id} product={product}/>
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
