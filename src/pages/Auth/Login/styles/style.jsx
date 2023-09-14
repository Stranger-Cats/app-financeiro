import styled from 'styled-components/native';
import { COLORS } from '../../../../theme/index';

export const Background = styled.View`
    flex: 1;
    background-color: #F0F4FF;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`; 

export const Logo = styled.Image`
    height: 135px;
    width: 135px;
    margin-bottom: 25px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: #f9fafc;
    width: 90%;
    font-size: 16px;
    padding: 17px;
    border-radius: 5px;
    border: solid 1px #101010;
    color: #101010;
    margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 49px;
    border-radius: 5px;
    background-color: #ffc300;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const SubmitText = styled.Text`
    font-size: 16px;
    color: #f9fafc;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
`

export const LinkText = styled.Text`
    margin-top: 10px;
    margin-bottom: 10px;
`;