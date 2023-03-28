import { useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, View } from 'react-native'

const MyButton = ({ backgroundColor, color, text, onPress }) => {
    return (
        <TouchableOpacity
            style={{ ...styles.button, backgroundColor }}
            onPress={onPress}
        >
            <Text style={{ ...styles.text, color }}>{text}</Text>
        </TouchableOpacity>
    );
}

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <SafeAreaView style={styles.container}>
            <MyButton
                backgroundColor="blue"
                color="white"
                text="increment"
                onPress={() => setCounter(counter + 1)}
            />
            <MyButton
                backgroundColor="red"
                color="white"
                text="decrement"
                onPress={() => setCounter(counter - 1)}
            />
            <View style={styles.counter}>
                <Text style={styles.countText}>current count</Text>
                <Text style={styles.count}>{counter}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        marginBottom: 20
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center'
    },
    counter: {
        marginTop: 10,
    },
    countText: {
        fontSize: 30,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 600,
    },
    count: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 600,
    },
});

export default Counter