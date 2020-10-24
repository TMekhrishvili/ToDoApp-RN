import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Note = ({ note, remove }) => (
    <View style={styles.container}>
        <Text>{note}</Text>
        <TouchableOpacity style={styles.remove}>
            <Text style={styles.removeText} onPress={remove}>x</Text>
        </TouchableOpacity>
    </View>
)
const styles = StyleSheet.create({
    container: {
    }
});
export default Note