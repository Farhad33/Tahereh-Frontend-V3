import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../util/api'
import Category from './ProductItem'


export default function ProductsList(ب) {
    const router = useRouter()
    const props = router.query;
    // console.log('products is => ', props)
    const [productsList, setProductsList] = useState([])
    const [mode, setMode] = useState('read')

    // useEffect(() => {
    //     api.get(`collections/${props.collection_id}/products`)
    //         .then(result => {
    //             setProducts(result.data)
    //         })
    // }, [])



    return (
        <Container>
            {/* {products.map(product => (
                <Category key={product.id} product={product} />
            ))} */}
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
