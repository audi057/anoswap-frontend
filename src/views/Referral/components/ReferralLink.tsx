import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, Link, Text } from '@pancakeswap-libs/uikit'
import copy from 'copy-to-clipboard';
import styled from 'styled-components'

const StyledLink = styled(Link)`
    cursor: pointer;
`

const ReferralLink = () => {
    const [link, setLink] = useState("https://pantherswap.com/?ref=dwprorr4ywoktgyg3kmnrnors3j3dkvqmkvncdowj")
    const [text, setText] = useState("Copy");

    const StyledButton = styled(Button)`
        color: ${(props) => props.theme.colors.primary};
        background-color: transparent;
        border: 2px solid ${(props) => props.theme.colors.primary};
        border-radius: 16px;
        font-size: 16px;
        font-weight: 600;
        height: 32px;
        padding: 0px 16px;
        opacity: 1;

        &:hover {
            background-color: transparent !important;
            opacity: 0.8;
        }

        &:focus {
            box-shadow: none;
        }
    `

    const Container = styled.div`
        display: flex;
        justify-content: space-between;
    `

    const onClick = () => {
        copy(link);

        setText("Copied");
        setTimeout(() => { setText("Copy"); }, 1000);
    }

    return (
        <Card>
            <CardBody>
                <Container>
                    <Text>Your Referral Link</Text>
                    <StyledButton onClick={onClick}>{text}</StyledButton>
                </Container>
            </CardBody>
            <CardFooter>
                <StyledLink>{link}</StyledLink>
            </CardFooter>
        </Card>
    )
}

export default ReferralLink
