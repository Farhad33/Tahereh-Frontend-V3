import React, {useState} from 'react'

export default function Signup() {

    return (
        <form action="http://localhost:4001/signup" method="post">
            <label>
                First Name:
                <input
                    name='first_name'
                    type='text'
                />
            </label>
            <label>
                Last Name:
                <input
                    name='last_name'
                    type='text'
                />
            </label>
            <label>
                Email:
                <input
                    name='email'
                    type='text'
                />
            </label>
            <label>
                Password:
                <input
                    name='password'
                    type='password'
                />
            </label>
            <input
                type='submit'
                value='Submit'
            />
        </form>
    )
}