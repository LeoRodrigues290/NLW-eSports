import React from "react";
import {Image, View} from "react-native";

import logoImg from '../../assets/logo-nlw-esports.png';

import {styles} from "./styles";
import {Heading} from "../../componentes/Heading";
import {GameCard} from "../../componentes/GameCard";
import {GAMES} from '../../utils/games';

export function Home() {
    return (
        <View style={styles.container}>
            <Image
                source={logoImg}
                style={styles.logo}
            />

            <Heading
                title="Encontre o seu duo!"
                subtitle="Selecione o game que deseja jogar..."
            />

            <GameCard
                data={GAMES[0]}
            />
        </View>
    );
}