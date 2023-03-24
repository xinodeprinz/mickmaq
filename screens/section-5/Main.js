import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Component from './Component'

const Main = () => {
    const titles = ['forest', 'beach', 'mountain'];
    return (
        <SafeAreaView style={styles.container}>
            {titles.map((title, key) => <Component key={key} title={title} />)}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 15,
    },
});

export default Main