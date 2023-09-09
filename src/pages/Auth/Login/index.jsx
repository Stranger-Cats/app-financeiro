import React from "react";
import { View, Text } from "react-native";

import styled from 'styled-components/native';

export default function Login(){
    return(
        <Container>
            <Text>TELA LOGIN</Text>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: '#0040ff';
    align-items: 'center';
    justify-content: 'center';
`