import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../util/api'
import ProductItem from './ProductItem'
import { useRouter } from 'next/router'


export default function ProductsList() {
    const router = useRouter()
    const props = router.query;
    const [productsList, setProductsList] = useState([])
    const [mode, setMode] = useState('read')
    // console.log("🚀 ~ file: ProductsList.js ~ line 11 ~ ProductsList ~ props", props)

    useEffect(() => {
        if (props.collection_id) {
            api.get(`collections/${props.collection_id}/products`)
                .then(result => {
                    setProductsList(result.data)
                })
        }
    }, [props.collection_id])

    return (
        <Container>
            {
                productsList ? (
                    productsList && productsList.map(product => (
                        <ProductItem key={product.id} product={product} collection_id={props.collection_id} />
                    ))) : (
                    <p>Loading...</p>
                )
            }
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
