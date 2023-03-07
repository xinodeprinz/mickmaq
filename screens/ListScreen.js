import { View, Text, ScrollView, FlatList } from 'react-native'

export default function ListScreen() {
    const friends = [
        { id: 1, name: 'Friend #1' },
        { id: 2, name: 'Friend #2' },
        { id: 3, name: 'Friend #3' },
        { id: 4, name: 'Friend #4' },
        { id: 5, name: 'Friend #5' },
        { id: 6, name: 'Friend #6' },
        { id: 7, name: 'Friend #7' },
        { id: 8, name: 'Friend #8' },
        { id: 9, name: 'Friend #9' },
    ];
    return (
        <ScrollView>
            <FlatList
                // horizontal
                // showsHorizontalScrollIndicator={false}
                data={friends}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}