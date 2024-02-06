import styled from "styled-components/native";

export const Title = styled.Text`
    text-align: center;
    margin: 50px 0;
    font-size: 30px;
    font-weight: bold;
    color: #FFE333;
    background: #3F33FF;
    padding: 20px 0;
    width: 100%;
`

export const Container = styled.View`
    display: flex;
    align-items: center;
`

export const Input = styled.TextInput`
    width: 78%;
    height: 50px;
    color: #3F33FF;
    font-size: 20px;
    border: solid 1px #3F33FF;
    background: #fff;
    padding: 13px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ItemsContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 90%;
`

export const Description = styled.Text`
    width: 100%;
    margin-bottom: 5px;
    margin-left: 2px;
    color: #3F33FF;
`

export const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const CustomButton = styled.TouchableOpacity`
    background-color: #3F33FF;
    padding: 10px;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    background-color: #3F33FF;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    padding: 6px 0;
`;