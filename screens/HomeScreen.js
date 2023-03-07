import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
    const MyButton = ({ backgroundColor, color, text, path }) => {
        return (
            <TouchableOpacity
                style={{ ...styles.button, backgroundColor }}
                onPress={() => navigation.navigate(path)}
            >
                <Text style={{ ...styles.text, color }}>{text}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <MyButton
                backgroundColor="orange"
                color="white"
                text="component screen"
                path="ComponentScreen"
            />
            <MyButton
                backgroundColor="purple"
                color="white"
                text="list screen"
                path="ListScreen"
            />
            <MyButton
                backgroundColor="cyan"
                color="white"
                text="list screen exercise"
                path="ListScreenExercise"
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    },
    container: {
        marginHorizontal: 20,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center'
    }
});