import React from 'react';
import { StyleSheet, View} from 'react-native';
import Ghadi from './Ghadi'

export default function Circle(props) {
    return (
        <View style={styles.CircleShape}>
            <Ghadi/>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        CircleShape: {
            width: 250,
            height: 250,
            borderRadius: 250 / 2,
            backgroundColor: 'lightblue',
        },

    }
)

