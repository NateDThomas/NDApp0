import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, ViewPagerAndroid } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button color="rgb(255,0,0)" title="Whats the phone number????????????"></Button>
      <Text>HUdiojk</Text>
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
