import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../util/api'
import Category from './ProductItem'


export default function Products(props) {
    console.log("🚀 ~ file: Products.js ~ line 8 ~ Products ~ props", props)
    const [products, setProducts] = useState([])
    const [mode, setMode] = useState('read')

    // useEffect(() => {
    //     api.get('/products')
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
