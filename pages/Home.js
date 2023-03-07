import { Button, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  return (
   <SafeAreaView style={styles.container}>
     <View style={styles.btn1}>
        <Button
            title="Assignment One"
            onPress={() =>
                navigation.navigate('AssignmentOne')
            }
        />
     </View>
    <Button
        title="Assignment Two"
        onPress={() =>
            navigation.navigate('AssignmentTwo')
        }
    />
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  btn1: {
    marginBottom: 40,
    marginTop: 100,
  }
});

export default Home;