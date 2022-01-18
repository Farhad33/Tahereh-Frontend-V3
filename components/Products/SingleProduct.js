import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ProductItem from './ProductItem'
import { useRouter } from 'next/router'
import api, { baseURL } from '../../util/api'

import {
    Container,
    Follow,
    LineContainer,
    Diamond,
    Line,
    Title
} from '../../pages/_document'

export default function SignleProduct() {
    const router = useRouter()
    const props = router.query;
    // console.log('products is => ', props)
    const [product, setProduct] = useState(null)
    // console.log("🚀 ~ file: ProductsList.js ~ line 13 ~ ProductsList ~ setProductsList", productsList);
    const [mode, setMode] = useState('read')

    useEffect(() => {
        api.get(`/products/${props.product_id}`)
            .then(result => {
                console.table(result.data)
                setProduct(result.data)
            })
    }, [])



    return (
        <Container>
            {
                product && (
                    <>
                        <Inner>
                            <Left>
                                <Title>{product.name}</Title>
                                <LineContainer>
                                    <Line />
                                    <Diamond />
                                    <Line />
                                </LineContainer>
                                <Follow>AVIOR DESIGN</Follow>
                                <Description>{product.description}</Description>
                            </Left>
                            <Right>
                                <img src={baseURL + '/public/' + product.photo_src} alt={product.photo_alt}></img>
                            </Right>
                        </Inner>
                    </>
                )
            }
        </Container>
    )
}

const Inner = styled.div`
    @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.tablet}) {
        display: flex;
    }
`

const Left = styled.div`
    margin: 0 auto;
    @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.tablet}) {
        max-width: 40%;
    }

`

const Description = styled.div`
    margin: 26px 0;
    text-align: center;
`



const Right = styled.div`
    margin: 0 auto;
    @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.tablet}) {
        max-width: 40%;
    }
    img{
        max-width: 100%;
    }

`