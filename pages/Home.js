import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  const MyButton = ({ text, backgroundColor, color, route }) => (
    <TouchableOpacity onPress={() => navigation.navigate(route)}
      style={{ ...styles.btn, backgroundColor }}>
      <Text style={{ ...styles.btnText, color }}>{text}</Text>
    </TouchableOpacity>
  );
  const Heading = ({ text }) => (
    <Text style={styles.heading}>{text}</Text>
  );
  return (
    <SafeAreaView style={styles.container}>
      <MyButton
        color='white'
        backgroundColor='blue'
        text="screen one"
        route="ScreenOne"
      />
      <MyButton
        color='white'
        backgroundColor='brown'
        text="screen two"
        route="ScreenTwo"
      />
      <MyButton
        color='white'
        backgroundColor='purple'
        text="screen three"
        route="ScreenThree"
      />
      <View style={styles.line} />
      <Heading text="assignment three" />
      <MyButton
        color='white'
        backgroundColor='green'
        text="Flex Screen One"
        route="FlexScreenOne"
      />
      <MyButton
        color='white'
        backgroundColor='indigo'
        text="Flex Screen Two"
        route="FlexScreenTwo"
      />
      <MyButton
        color='white'
        backgroundColor='red'
        text="Flex Screen Three"
        route="FlexScreenThree"
      />
      <MyButton
        color='white'
        backgroundColor='magenta'
        text="Flex Screen Four"
        route="FlexScreenFour"
      />
      <View style={styles.line} />
      <MyButton
        color='white'
        backgroundColor='#444'
        text="Assignment Four"
        route="AssignmentFour"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  btn: {
    padding: 12,
    marginBottom: 20,
  },
  btnText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 15,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 15,
  },
  heading: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 600,
    marginBottom: 10,
    fontSize: 20,
  }
});

export default Home;