import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoslice  = createSlice({
    name:'todos',
    initialState:{
        todo:[{
            title:'hello world',
            id: nanoid()
        }]
    },
    reducers:{
        addtodo : (state,action)=>{
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        removetodo : (state , action)=>{

            state.todo.splice(action.payload.index, 1)
        },
        editodo : (state , action)=>{

            state.todo.splice(action.payload.index, 1 ,{
                title:action.payload.title,
                id: nanoid()
            })
        }

    }
})

export const {addtodo , removetodo,editodo} = todoslice.actions
export default  todoslice.reducer