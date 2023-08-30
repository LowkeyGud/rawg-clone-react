import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Heading>😵</Heading>
                <Text>
                    {
                        isRouteErrorResponse(error) ?
                            'Looks like this page doesn\'t exist' :
                            "We apologize, but it seems our server has transformed into a teapot. We're working on resolving this existential crisis and will be back brewing ideas soon."}
                </Text>
            </Box>
        </>
    )
}

export default ErrorPage
