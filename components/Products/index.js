import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { color } from '../../util/variables'
import ProductsList from './ProductsList'
import api from '../../util/api'
import {
    Container,
    Follow,
    LineContainer,
    Diamond,
    Line,
    Title,
    GoToBackPage
} from '../shared'

export default function Products() {
    const router = useRouter()
    const props = router.query;
    const [currentCollection, setCurrentCollection] = useState(null)
    // const [mode, setMode] = useState('read');
    const [collectionsIds, setCollectionsIds] = useState([]);

    useEffect(() => {
        if (props.collection_id) {
            api.get(`/collections`)
                .then(result => {
                    setCollectionsIds(result.data)
                })
        }
    }, [props.collection_id])

    useEffect(() => {
        if (collectionsIds.length != 0) {
            const currentColletion = collectionsIds.filter(item => {
                return item.id == parseInt(props.collection_id)
            })
            if (currentColletion[0]) {
                setCurrentCollection(currentColletion[0]);
            }
        }
    }, [collectionsIds])

    const findCollectionPosition = (num) => {
        if (currentCollection) {
            const result = collectionsIds.findIndex((item) => {
                return item.id === currentCollection.id;
            });
            if (num === -1 && result === 0) {
                return 0;
            }
            if (num === 1 && result === collectionsIds.length - 1) {
                return collectionsIds.length - 1;
            }
            return (result + num)
        }
    }





    return (
        <Container>
            <Row>
                {
                    currentCollection && collectionsIds && collectionsIds[0] && (
                        <NewLink show={currentCollection && currentCollection.id != collectionsIds[0].id}>
                            <Link href={`/collections/${collectionsIds[findCollectionPosition(-1)].id}/products`}>
                                <GoToBackPage direction='left' />
                            </Link>
                        </NewLink>
                    )
                }
                <Title>{currentCollection && currentCollection.name}</Title>
                {
                    currentCollection && collectionsIds && collectionsIds[collectionsIds.length - 1] && (
                        <NewLink show={currentCollection && currentCollection.id != collectionsIds[collectionsIds.length - 1].id}>
                            <Link href={`/collections/${collectionsIds[findCollectionPosition(1)].id}/products`}>
                                <GoToBackPage direction='right' />
                            </Link>
                        </NewLink>
                    )
                }
            </Row>
            <LineContainer>
                <Line />
                <Diamond />
                <Line />
            </LineContainer>
            <Follow>Follow your dreams</Follow>
            <ProductsList />
        </Container>
    )
}


const NewLink = styled.div`
    visibility: ${({ show }) => show ? 'visible' : 'hidden'};
    display: flex;
    align-items: center;
`

const Row = styled.div`
    display: flex;
    justify-content: center;
`