import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import ProductItem from '../Products/ProductItem'
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
} from '../shared'

export default function SignleProduct() {
    const router = useRouter()
    const props = router.query;
    const [product, setProduct] = useState(null)
    const [mode, setMode] = useState('read');
    const [productsIds, setProductsIds] = useState([]);

    useEffect(() => {
        if (props.product_id && props.collection_id) {
            api.get(`/products/${props.product_id}`)
                .then(result => {
                    setProduct(result.data)
                });
            api.get(`/collections/${props.collection_id}`)
                .then(result => {
                    setProductsIds(result.data);
                })
        }
    }, [props.product_id])

    const findProductPosition = (num) => {
        const result = productsIds.findIndex((item) => {
            return item.id === product.id;
        });
        if (num === -1 && result === 0) {
            return 0;
        }
        if (num === 1 && result === productsIds.length - 1) {
            return productsIds.length - 1;
        }
        return (result + num)
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
                                        <GoToBackPage direction='left' />
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
                                {
                                    productsIds && productsIds[0] && (
                                        <NewLink show={product.id != productsIds[0].id}>
                                            <Link href={`/collections/${props.collection_id}/products/${productsIds[findProductPosition(-1)].id}`}>
                                                <Chevron navigateTo="previous"></Chevron>
                                            </Link>
                                        </NewLink>
                                    )
                                }
                                <img src={baseURL + '/public/' + product.photo_src} alt={product.photo_alt}></img>
                                {
                                    productsIds && productsIds[productsIds.length - 1] && (
                                        <NewLink show={product.id != productsIds[productsIds.length - 1].id}>
                                            <Link href={`/collections/${props.collection_id}/products/${productsIds[findProductPosition(1)].id}`}>
                                                <Chevron navigateTo="next" ></Chevron>
                                            </Link>
                                        </NewLink>
                                    )
                                }
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

const NewLink = styled.div`
    visibility: ${({ show }) => show ? 'visible' : 'hidden'};

`