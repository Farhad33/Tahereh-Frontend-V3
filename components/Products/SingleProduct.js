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
    console.log("🚀 ~ file: SingleProduct.js ~ line 26 ~ SignleProduct ~ setProductsId", productsId)

    useEffect(() => {
        if (props.product_id && props.collection_id) {
            api.get(`/products/${props.product_id}`)
                .then(result => {
                    setProduct(result.data)
                });
            api.get(`/products_id_collection/${props.collection_id}`)
                .then(result => {
                    setProductsId(result.data);
                })
        }
    }, [props.product_id])
    // }, [props.product_id])


    const findProductPosition = (num) => {
        const result = productsId.findIndex((item) => {
            return item.id === product.id;
        });
        if (num === -1 && result === 0) {
            return 0;
        }
        if (num === 1 && result === productsId.length - 1) {
            return productsId.length - 1;
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
                                {
                                    productsId && productsId[0] && (
                                        // console.log('hi', (findProductPosition() - 1))
                                        <NewLink show={product.id != productsId[0].id}>
                                            <Link href={`/collections/${props.collection_id}/products/${productsId[findProductPosition(-1)].id}`}>
                                                <Chevron navigateTo="previous"></Chevron>
                                            </Link>
                                        </NewLink>
                                    )
                                }
                                <img src={baseURL + '/public/' + product.photo_src} alt={product.photo_alt}></img>
                                {
                                    productsId && productsId[productsId.length - 1] && (
                                        <NewLink show={product.id != productsId[productsId.length - 1].id}>
                                            <Link href={`/collections/${props.collection_id}/products/${productsId[findProductPosition(1)].id}`}>
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