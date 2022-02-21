import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import api, { photoBaseURL } from '../../util/api'
import { writeJWT } from '../../util/token'


export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const router = useRouter()

    useEffect(() => {
        writeJWT(token)
    }, [token])


    const handleOnSubmit = (e) => {
        e.preventDefault()
        api.post('/signin', {email, password})
        .then(result => {
            setToken(result.data.token)
            router.push('/')
        })
        .catch(err => {
            console.log('err => ', err)
        })
    }

    return (
        <Container>
            <Form onSubmit={handleOnSubmit}>
                <label>
                    Email:
                    <input
                        name='email'
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        name='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <input
                    type='submit'
                    value='Submit'
                />
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    label {
        margin: 1rem;
    }
`