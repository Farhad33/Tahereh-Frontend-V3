// import React from 'react'
import styled from 'styled-components'
// import MainPicture from './MainPicture'
import ProductItem from '../Products/ProductItem'
import React, { useState, useEffect } from 'react'
import api, { photoBaseURL } from '../../util/api'

export default function Homepage() {
    const [mode, setMode] = useState('read')
    const [product, setProduct] = useState(null)

    useEffect(() => {
        if (true) {
            api.get(`/products/${-1}`)
                .then(result => {
                    result.data &&
                        setProduct(result.data);
                }).catch(err => { console.log(err) })
        }
    }, [])

    return (
        product &&
        <Container>
            <ProductItem key={product.id} product={product} is_not_link />
            <Text>{product.name}</Text>
        </Container>
    )
}

const Container = styled.div`
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background-color: #ddf1de; */
    height: 450px;
    width: 380px;
    text-align: center;
    /* border: 1px solid black; */
    @media only screen and (max-width: 768px) {
        height: 380px;
        width: 330px;
    }
    @media only screen and (max-width: 600px) {
        height: 330px;
        width: 280px;
    }
`
const Picture = styled.div`
position: relative;
    height: 450px;
    width: 380px;
    background: url("main.png");
    object-fit: cover;
    @media only screen and (max-width: 768px) {
        height: 380px;
        width: 310px;
    }
    @media only screen and (max-width: 600px) {
        height: 330px;
        width: 280px;
    }

    /* height: 100vh; */
`
const Header = styled.h1`
    padding-top: 0.5rem;
    font-size: 5rem;
    text-align: center;
    color: white;
`

const Logo = styled.img`
    display: block;
    width: 10rem;
`
const ApartmentPhotos = styled.img`
    width: 80rem;
    height: 50rem;
    padding: 2rem;
    margin: 0 auto;
`


const dressPhotos = Array(19).fill().map((_, file) => {
    return {
        original: `./static/large/${file + 10}.png`,
        thumbnail: `/static/small/${file + 10}.png`
    }
})

const Text = styled.p`
    font-family: 'Abril Fatface';
    font-size: 5rem;
    font-weight: bold;
    color: #09321682;
    opacity: 0.9;
    position: absolute;
    margin: auto;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    @media only screen and (max-width: 768px) {
        font-size: 3.5rem;
        top: 220px;
        /* left: -45px; */
    }
    @media only screen and (max-width: 600px) {
        font-size: 2.35rem;
        top: 220px;
        /* left: 0px; */
    }
`