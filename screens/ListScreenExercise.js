import { Text, ScrollView, FlatList, StyleSheet, View } from 'react-native'

export default function ListScreenExercise() {
    const friends = [
        { id: 1, age: 20 },
        { id: 2, age: 45 },
        { id: 3, age: 32 },
        { id: 4, age: 27 },
        { id: 5, age: 53 },
        { id: 6, age: 30 },
        { id: 7, age: 25 },
    ];

    const Item = ({ id, age }) => {
        return (
            <View style={styles.item}>
                <Text>Friend {id} - Age {age}</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={friends}
                renderItem={({ item }) => <Item id={item.id} age={item.age} />}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 30
    },
    item: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
    }
});