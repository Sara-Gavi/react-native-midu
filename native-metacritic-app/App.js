import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Pressable,
} from "react-native";

const icon = require("./assets/icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        blurRadius={2}
        source={icon}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />

      <Image
        source={{
          uri: "https://metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg",
        }}
        style={{ width: 215, height: 294 }}
      />

      <Text>Tenemos aquí la app</Text>

      <Button title="pulsa aquí" onPress={() => alert("hola")} />

      <TouchableHighlight
        underlayColor="#09f"
        onPress={() => alert("hola")}
        style={{ borderRadius: 100 }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <Text style={{ color: "white" }}>Pulsa aqui</Text>
        </View>
      </TouchableHighlight>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
        )}
      </Pressable>
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
});
