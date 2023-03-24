import { useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

const DATA = [
    { id: 1, name: 'Mumbai' },
    { id: 2, name: 'New York' },
    { id: 3, name: 'Los Angeles' },
    { id: 4, name: 'Chicago' },
    { id: 5, name: 'Houston' },
    { id: 6, name: 'Phoenix' },
    { id: 7, name: 'Philadelphia' },
    { id: 8, name: 'London' },
    { id: 9, name: 'Whashington DC' },
    { id: 10, name: 'Yaounde' },
    { id: 11, name: 'Douala' },
    { id: 12, name: 'Bamenda' },
    { id: 13, name: 'Baffousam' },
    { id: 14, name: 'Accra' },
    { id: 15, name: 'Lagos' },
    { id: 16, name: 'Abuja' },
];

const Item = ({ text }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{text}</Text>
    </View>
);

const AssignmentThree = () => {
    const [show, setShow] = useState(true);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.btns}>
                <TouchableOpacity style={styles.show}
                    onPress={() => setShow(true)}>
                    <Text style={styles.text}>Show</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.hide}
                    onPress={() => setShow(false)}>
                    <Text style={styles.text}>Hide</Text>
                </TouchableOpacity>
            </View>
            {show && <FlatList
                data={DATA}
                renderItem={({ item }) => <Item text={item.name} />}
                keyExtractor={item => item.id}
            />}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: 10,
    },
    item: {
        backgroundColor: '#0047AB',
        borderColor: '#0047AB',
        borderWidth: 2,
        padding: 10,
        marginVertical: 8,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        textTransform: 'capitalize',
        fontSize: 25,
        color: 'blue',
        textAlign: 'center',
        color: 'gold',
    },
    heading: {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 20,
        color: 'blue',
    },
    btns: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    show: {
        marginRight: 10,
        backgroundColor: 'green',
        padding: 10,
        flex: 1,
        textAlign: 'center',
        borderRadius: 5,
    },
    hide: {
        backgroundColor: 'red',
        padding: 10,
        flex: 1,
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
});

export default AssignmentThree;