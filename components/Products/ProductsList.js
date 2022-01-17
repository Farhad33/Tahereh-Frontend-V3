import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../util/api'
import ProductItem from './ProductItem'
import { useRouter } from 'next/router'


export default function ProductsList() {
    const router = useRouter()
    const props = router.query;
    // console.log('products is => ', props)
    const [productsList, setProductsList] = useState([])
    // console.log("🚀 ~ file: ProductsList.js ~ line 13 ~ ProductsList ~ setProductsList", productsList);
    const [mode, setMode] = useState('read')

    useEffect(() => {
        api.get(`collections/${props.collection_id}`)
            .then(result => {
                // console.log("🚀 ~ file: ProductsList.js ~ line 19 ~ useEffect ~ result", result)
                setProductsList(result.data)
            })
    }, [])



    return (
        <Container>
            {
                productsList.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))
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
