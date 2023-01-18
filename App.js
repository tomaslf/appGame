import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={'My Game'} />
     <StartGame/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
