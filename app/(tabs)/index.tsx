import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

interface CartaPokemon {
  id: string;
  nome: string;
  tipo: string;
  raridade: string;
  hp: string;
  ataque: string;
  image: any;
  isChase: boolean;
}

const cartasPokemon: CartaPokemon[] = [
  {
    id: "1",
    nome: "Charizard ex",
    tipo: "Fogo",
    raridade: "Chase",
    hp: "280",
    ataque: "Explosão Ígnea",
    image: require("@/assets/images/charizard_ex.png"),
    isChase: true,
  },
  {
    id: "5",
    nome: "Raikou ex",
    tipo: "Elétrico",
    raridade: "Chase",
    hp: "220",
    ataque: "Relâmpago Selvagem",
    image: require("@/assets/images/raikou_ex.png"),
    isChase: true,
  },
  {
    id: "2",
    nome: "Pikachu",
    tipo: "Elétrico",
    raridade: "Comum",
    hp: "60",
    ataque: "Choque do trovão",
    image: require("@/assets/images/pikachu.png"),
    isChase: false,
  },
  {
    id: "3",
    nome: "Blastoise",
    tipo: "Água",
    raridade: "Rara",
    hp: "120",
    ataque: "Jato d'água",
    image: require("@/assets/images/blastoise.png"),
    isChase: false,
  },
  {
    id: "4",
    nome: "Gardevoir",
    tipo: "Psíquico",
    raridade: "Incomum",
    hp: "90",
    ataque: "Explosão Psíquica",
    image: require("@/assets/images/gardevoir.png"),
    isChase: false,
  },
];

const CartaPokemonItem = ({ carta }: { carta: CartaPokemon }) => (
  <View style={[styles.card, carta.isChase && styles.chaseCard]}>
    <Text style={styles.title}>{carta.nome}</Text>
    <Image source={carta.image} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.details}>Tipo: {carta.tipo}</Text>
      <Text style={styles.details}>Raridade: {carta.raridade}</Text>
      <Text style={styles.details}>HP: {carta.hp}</Text>
      <Text style={styles.details}>Ataque: {carta.ataque}</Text>
    </View>
  </View>
);

export default function SurgingSparksChase() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Surging Sparks Chase Cards</Text>
      <FlatList
        data={cartasPokemon}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartaPokemonItem carta={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: "center",
    flexDirection: "column",
  },
  chaseCard: {
    borderColor: "gold",
    borderWidth: 3,
    shadowColor: "gold",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 63 / 88,
  },
  info: {
    padding: 10,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    width: "100%",
  },
  details: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});