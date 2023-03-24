import { SafeAreaView, StyleSheet, View } from "react-native";

const ScreenFour = () => {
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
        backgroundColor: '#281c44',
        rowGap: 40,
    },
    section: {
        flex: 1,
        width: '50%',
    },
});

export default ScreenFour