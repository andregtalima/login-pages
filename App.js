import { ImageBackground, View, StyleSheet, StatusBar } from 'react-native';
import PageOne from './src/pages/PageOne';
import Page1 from './assets/images/page1.png';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Page1} style={styles.image}>
        <PageOne />
      </ImageBackground>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#8C5CB3"
  },
  image: {
      flex: 1,
      resizeMode: 'cover',
  },
})

export default App;