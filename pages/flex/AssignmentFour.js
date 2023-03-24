import { SafeAreaView, StyleSheet, Text, View } from "react-native";


export default function AssignmentFour() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const Box = ({ text }) => (
        <View style={styles.box}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            {letters.map((letter, key) => <Box text={letter} key={key} />)}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#80a4b4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingVertical: 200,
    },
    box: {
        width: 40,
        height: 117,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '33.3%',
    },
    text: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 20,
        fontWeight: 600,
    },
});