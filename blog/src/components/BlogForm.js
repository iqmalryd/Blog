import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const BlogForm = ({ initialTitle, initialContent, onSave }) => {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);

    return (
        <View style={styles.body}>
            <View style={styles.containerTitle}>
                <Text style={styles.label}>Title :  </Text>
                <TextInput
                    style={styles.titleInput}
                    value={title}
                    onChangeText={(title) => setTitle(title)}
                    underlineColorAndroid='transparent'
                />
            </View>
            <View style={styles.contentContainer}>
                <TextInput
                    style={styles.contentInput}
                    multiline={true}
                    value={content}
                    numberOfLines={10}
                    placeholder='Description here'
                    onChangeText={(content) => setContent(content)}
                />
            </View>
            <View style={styles.saveContainer}>
                <TouchableOpacity
                    style={styles.savebtn}
                    onPress={() => {
                        onSave(title, content)
                    }}>
                    <Text style={{ color: 'white' }}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default BlogForm

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 40
    },
    containerTitle: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        alignItems: "center",
    },
    titleInput: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    contentInput: {
        textAlignVertical: 'top'
    },
    contentContainer: {
        justifyContent: 'flex-start',
        backgroundColor: '#e3e3e3',
        marginTop: 15,
        padding: 10,
        borderRadius: 5,
    },
    saveContainer: {
        marginVertical: 15,
        alignItems: 'flex-end'
    },
    savebtn: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: '#333',
        borderRadius: 5,
    }
})
