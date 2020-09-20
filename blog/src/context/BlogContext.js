import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

// untuk mengeksekusi code sesuai type
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogPost':
            // we return all of response from api
            return action.payload;
        case 'delete_blogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
}
const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogpost', { title, content });
        if (callback) {
            callback()
        }
    }

}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogpost/${id}`)
        // dispatch() tetap digunakan untuk menghapus dari local state
        dispatch({ type: 'delete_blogPost', payload: id })
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogpost/${id}`, {
            title,
            content
        })
        // dispatch({ type: 'edit_blogPost', payload: { id, title, content } });
        callback();
    }
}

const getBlogPost = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogpost');
        dispatch({ type: 'get_blogPost', payload: response.data })
    }
}


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
    []
);