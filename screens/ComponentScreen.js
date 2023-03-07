import { View, Text, StyleSheet } from 'react-native'

export default function ComponentScreen() {
    const greeting = <Text>Hello to you!</Text>
    const name = 'Nde';
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Getting started with react native</Text>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    greeting: {
        marginVertical: 10,
        fontSize: 23
    },
    subHeaderStyle: {
        fontSize: 20,
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 20
    }
});