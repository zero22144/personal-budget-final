import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const SignUpButton = () => {
const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (<button onClick={() => loginWithRedirect()}>
            Sign Up
        </button>)
        )
}

export default SignUpButton