import React, { useContext } from 'react'
import { Text } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogForm from '../components/BlogForm'
const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return <BlogForm
        initialTitle={blogPost.title}
        initialContent={blogPost.content}
        onSave={(title, content) => {
            editBlogPost(id, title, content, () => {
                navigation.navigate('Index')
            })

        }}
    />
}
EditScreen.navigationOptions = () => {
    return {
        headerTitle: () => <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Edit</Text>

    }
}


export default EditScreen

