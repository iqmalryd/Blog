import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogForm from '../components/BlogForm'
const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    return <BlogForm
        initialTitle=''
        initialContent=''
        onSave={(title, content) => {
            addBlogPost(title, content, () => {
                navigation.navigate('Index')
            })
        }}


    />
}

export default CreateScreen
