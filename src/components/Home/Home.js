import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Note from '../Note/Note';

const Home = () => {
    // hooks
    const [note, setNote] = useState("");
    const [allNotes, setAllNotes] = useState([]);
    // methods
    const addNote = () => {
        setAllNotes(allNotes.concat(note));
        setNote("");
    }
    const removeNote = () => {
        // setAllNotes(note); remove item in array
    }
    // render
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Notes</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {allNotes.map((value, index) => <Note key={index} note={value} remove={() => { removeNote() }} />)}
            </ScrollView>
            <View style={styles.footer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='add note...'
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={text => setNote(text)}
                    value={note}
                >
                </TextInput>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => { addNote() }}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bdfffb'
    },
    header: {
        backgroundColor: '#1b2dcf',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 98,
        backgroundColor: '#62e051',
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 32
    }
});
export default Home