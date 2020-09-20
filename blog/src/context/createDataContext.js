import React, { useReducer } from 'react'

export default (reducer, actions, initialState) => {
    // actions will contain an object from Blog Context

    const Context = React.createContext()
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const boundAction = {};
        // Looping isi dari action
        for (let key in actions) {
            // masukan tiap tiap objek dari action ke objek boundAction
            boundAction[key] = actions[key](dispatch);
            // boundAction.addBlogPost = addBlogPost(dispatch => return ()=> dalem fungsinya)
        }


        //  kembalikan state dan semua isi dari boundAction
        return <Context.Provider value={{ state, ...boundAction }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider }
};