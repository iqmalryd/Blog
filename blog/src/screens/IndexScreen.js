import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPost } = useContext(Context);

    useEffect(() => {
        // run blogpost
        getBlogPost()
        // when the screen is view, run this, and screen will be re render
        const listener = navigation.addListener('didFocus', () => {
            getBlogPost();
        })
        // after rerender, remove that function to minimaze memory usage, because we dont need to call listener again
        return () => {
            listener.remove()
        }
    }, [])


    return (
        <>
            {state.length == 0 ?
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: '#888' }} >Your Blog is empty</Text>
                </View> :
                <FlatList
                    style={{ marginTop: 10 }}
                    data={state}
                    keyExtractor={(blogPost) => blogPost.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ShowScreen', { id: item.id })}>
                                <View style={styles.container}>
                                    <Text style={styles.font}>{item.title}</Text>
                                    <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                                        <Feather name='trash' style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            }
        </>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => { navigation.navigate('Create') }} >
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )


    }
}

export default IndexScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        elevation: 3,
        marginHorizontal: 10,
        marginVertical: 3,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
    },
    font: {
        fontSize: 14,
        fontWeight: '700'
    },
    icon: {
        fontSize: 18,
        marginRight: 10,
    }

})
