import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { color } from '../../util/variables'
import { ModifyButton } from '../shared/ModifyButton'


export default function MainPicture() {
    const [mode, setMode] = useState('edit')

    return (
        <Container >
            <PictureContainer>
                <Picture >
                    {mode === "edit" ?

                        <>
                            <ModifyButton mode="remove"></ModifyButton>
                            <ModifyButton mode="edit"></ModifyButton>
                        </>
                        :
                        ""
                    }
                </Picture>
                <Text>AVIOR DESIGN</Text>
            </PictureContainer>
        </Container>
    )
}

const Container = styled.div`
`
const PictureContainer = styled.div`
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ddf1de;
    height: 450px;
    width: 380px;
    text-align: center;
    border: 1px solid black;
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
`
const Text = styled.p`
    font-family: 'Abril Fatface';
    font-size: 5rem;
    font-weight: bold;
    color: #09321682;
    opacity: 0.9;
    position: absolute;
    margin: auto;
    top: 250px;
    left: -100px;
    white-space: nowrap;
    @media only screen and (max-width: 768px) {
        font-size: 3.5rem;
        top: 220px;
        left: -45px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 2.35rem;
        top: 220px;
        left: 0px;
    }
`