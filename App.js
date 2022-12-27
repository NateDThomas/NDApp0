import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, ViewPagerAndroid } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Whats the phone number???????????????"></Button>
      <StatusBar style="auto" />
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
