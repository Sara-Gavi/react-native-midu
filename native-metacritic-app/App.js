import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { getLatestGames } from "./lib/metacritic";

const icon = require("./assets/icon.png");

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {games.map((game) => (
        <View key={game.slug} style={styles.card}>
          <Image
            source={{ uri: game.image }}
            style={{
              width: 107,
              height: 147,
              borderRadius: 10,
            }}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: 10,
  },
});
