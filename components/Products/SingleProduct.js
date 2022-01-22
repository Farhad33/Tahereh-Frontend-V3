import React, { useState, useEffect } from 'react'
import Link from 'next/link'
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
    Header,
    Title,
    Chevron,
    GoToBackPage
} from '../../pages/_document'

export default function SignleProduct() {
    const router = useRouter()
    const props = router.query;
    const [product, setProduct] = useState(null)
    const [mode, setMode] = useState('read');
    const [productsId, setProductsId] = useState([]);
    console.log("🚀 ~ file: SingleProduct.js ~ line 26 ~ SignleProduct ~ setProductsId", setProductsId)

    useEffect(() => {
        if (props.product_id && props.collection_id) {
            api.get(`/products/${props.product_id}`)
                .then(result => {
                    setProduct(result.data)
                });
            api.get(`/products_id_collection/${props.collection_id}`)
                .then(result => {
                    setProductsId(result.data);
                    console.log("🚀 ~ file: SingleProduct.js ~ line 37 ~ useEffect ~ result.data", result.data)
                })
        }
    }, [props.product_id])

    const navigateProduct = ({ navigateTo }) => {
        if (navigateTo === "next") {

        } else if (navigateTo === "previous") {

        }
    }

    return (
        <Container>
            {
                product && (
                    <>
                        <Inner>
                            <Left>
                                <Header>
                                    <Link href={`/collections/${props.collection_id}/products/`}>
                                        <GoToBackPage next={true} />
                                    </Link>
                                    <Title>{product.name}</Title>
                                </Header>
                                <LineContainer>
                                    <Line />
                                    <Diamond />
                                    <Line />
                                </LineContainer>
                                <Follow>AVIOR DESIGN</Follow>
                                <Description>{product.description}</Description>
                            </Left>
                            <Right>
                                <Chevron navigateTo="previous" onClick={navigateProduct}></Chevron>
                                <img src={baseURL + '/public/' + product.photo_src} alt={product.photo_alt}></img>
                                <Chevron navigateTo="next" onClick={navigateProduct}></Chevron>
                            </Right>
                        </Inner>
                    </>
                )
            }
        </Container >
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
    display: flex;
    align-items: center;
    @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.tablet}) {
        max-width: 40%;
        padding-right: 40px;
    }
    img{
        max-width: 100%;
        border: 1px solid ${({ theme: { colors } }) => colors.grey}
    }
`