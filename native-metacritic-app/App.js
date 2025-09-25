import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const icon = require('./assets/icon.png');


export default function App() {
  return (
    <View style={styles.container}>
      <Image blurRadius={2} source= {icon} style={{ width: 100, height:100}} resizeMode='contain'/>
      <Image source={{ uri: "https://metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg"}} style={{ width: 215, height: 294}}/>
      <Text>Tenemos aquí la app</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
