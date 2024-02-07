import { useState } from "react"
import { Image } from "react-native"
import { PokemonNameAndMainImage } from "../modules/Pokemon"
import { getPokemonNameAndMainImage } from "../services/fetchPokemon"
import { Title, Container, Input, ItemsContainer, Description, InputContainer, CustomButton, ButtonText, Result, PokemonName, ResultDescription, CustomInput, InputMessage } from "./Home.style"

const Home = () => {
    const [pokemonNumber, setPokemonNumber] = useState('')
    const [inputMessage, setInputMessage] = useState('')
    const [pokemon, setPokemon] = useState<PokemonNameAndMainImage | null>(null)

    const onPressButton = async () => {
        setInputMessage('')
        setPokemon(null)
        if (pokemonNumber) {
            const formattedNumber = parseInt(pokemonNumber, 10)
            if (!formattedNumber || formattedNumber <= 0 || formattedNumber > 900) {
                setInputMessage('Digite um número entre 1 e 900')
                return
            }
            const nameAndImage = await getPokemonNameAndMainImage(formattedNumber)
            if (nameAndImage) setPokemon(nameAndImage) 
        }
    }

    return (
        <Container>
            <Title>Encontre o Pokémon</Title>
            <ItemsContainer>
                <Description>Digite o número do Pokémon:</Description>
                <InputContainer>
                    <CustomInput>
                        <Input 
                            keyboardType="numeric"
                            value={pokemonNumber}
                            onChangeText={(text: string) => setPokemonNumber(text)}
                        />
                        {inputMessage && <InputMessage>{inputMessage}</InputMessage>}
                    </CustomInput>
                    <CustomButton onPress={onPressButton}>
                        <ButtonText>Enviar</ButtonText>
                    </CustomButton>
                </InputContainer>
            </ItemsContainer>
            {pokemon && (
                <Result>
                    <ResultDescription>Seu Pokémon é: </ResultDescription>
                    <Image 
                        source={{uri: pokemon.imgUrl}}
                        style={{width: 200, height: 200}}
                    />
                    <PokemonName>{pokemon.name}</PokemonName>
                </Result>
            )}
        </Container>
    )
}

export default Home