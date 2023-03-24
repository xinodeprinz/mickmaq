import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';

const DATA = [
  { id: 1, name: 'Chinu', age: 50 },
  { id: 2, name: 'Tony', age: 20 },
  { id: 3, name: 'Harvard', age: 40 },
  { id: 4, name: 'Stark', age: 60 },
  { id: 5, name: 'Captian', age: 10 },
  { id: 6, name: 'Rogers', age: 90 },
  { id: 7, name: 'Winter', age: 70 },
  { id: 8, name: 'Payback', age: 100 },
];

const Item = ({ text }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

const FirstItem = ({ name, age }) => (
  <View style={styles.item}>
    <Text style={styles.title}>Name is: {name}</Text>
    <Text style={styles.title}>Age is: {age}</Text>
  </View>
);

const AssignmentOne = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.heading}>assignment 1</Text> */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => <FirstItem name={item.name} age={item.age} />}
        keyExtractor={item => item.id}
      />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item text={`Id is: ${item.id}`} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderColor: 'blue',
    borderWidth: 2,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    // textTransform: 'capitalize',
    fontSize: 18,
    color: 'blue',
  },
  heading: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
    color: 'blue',
  },
});

export default AssignmentOne;