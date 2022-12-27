import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, ViewPagerAndroid } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button color="rgb(255,0,0)" title="Test"/>
      <Button color="rgb(0,255,0)" title="Tester"/>
      <Button color="rgb(255,0,255)" title="Testest"/>
      <Text>Text</Text>
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
