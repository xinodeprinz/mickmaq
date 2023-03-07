import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';

const DATA = [
  { id: 1, name: 'c' },
  { id: 2, name: 'c++' },
  { id: 3, name: 'java' },
  { id: 4, name: 'stark' },
  { id: 5, name: 'javaScript' },
  { id: 6, name: 'go' },
  { id: 7, name: 'kotlin' },
  { id: 8, name: 'swift' },
  { id: 9, name: 'pascal' },
  { id: 10, name: 'c#' },
  { id: 11, name: 'PHP' },
  { id: 12, name: 'ruby' },
  { id: 13, name: 'python' },
];

const Item = ({text}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

const AssignmentTwo = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.heading}>assignment 2</Text> */}
    <FlatList
        data={DATA}
        renderItem={({item}) => <Item text={item.name} />}
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
    backgroundColor: 'gold',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    textTransform: 'capitalize',
    fontSize: 18,
    color: 'black',
  },
  heading: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
    color: 'gold',
  },
});

export default AssignmentTwo;