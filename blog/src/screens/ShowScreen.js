import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    return (
        <View>
            <Text>Title : {blogPost.title} </Text>
            <Text>Title : {blogPost.content} </Text>
        </View>
    )
}
ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <MaterialCommunityIcons name="pencil-circle" size={30} style={{ alignItems: "center", marginRight: 20 }} />
            </TouchableOpacity>
        )

    }
}

export default ShowScreen

const styles = StyleSheet.create({})
