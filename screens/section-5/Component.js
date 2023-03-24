import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Component = ({ title }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require(`../../assets/section-5/beach.jpg`)}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        display: 'flex',
    },
    image: {
        width: 200,
        height: 150,
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 600,
        fontSize: 20,
    },
});

export default Component