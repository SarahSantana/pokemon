import { Text } from "react-native"
import { Title, Container, Input, ItemsContainer, Description, InputContainer, CustomButton, ButtonText } from "./Home.style"

const Home = () => {
    const onPressButton = () => {
    }

    return (
        <Container>
            <Title>Encontre o Pokémon</Title>
            <ItemsContainer>
                <Description>Digite o número do Pokémon:</Description>
                <InputContainer>
                    <Input />
                    <CustomButton onPress={onPressButton}>
                        <ButtonText>Enviar</ButtonText>
                    </CustomButton>
                </InputContainer>
            </ItemsContainer>
        </Container>
    )
}

export default Home