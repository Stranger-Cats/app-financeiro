import React from "react";
import { View, Text } from "react-native";

import styled from 'styled-components/native';

export default function Cadastro() {
    return(
        <Container>
            <Text>TELA CADASTRO</Text>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: '#ff0000';
    align-items: 'center';
    justify-content: 'center';
`