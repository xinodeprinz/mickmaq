import { SafeAreaView, StyleSheet, View } from "react-native";

const ScreenOne = () => {
    const Section = ({ backgroundColor }) => (
        <View style={{ ...styles.section, backgroundColor }} />
    )
    return (
        <SafeAreaView style={styles.container}>
            <Section backgroundColor="#fac455" />
            <Section backgroundColor="#4c3c74" />
            <Section backgroundColor="#3c9ca4" />
            <Section backgroundColor="#24647c" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    section: {
        flex: 1,
    },
});

export default ScreenOne