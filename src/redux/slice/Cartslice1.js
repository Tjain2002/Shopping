import {createSlice} from '@reduxjs/toolkit';

export const Cartslice1= createSlice({

    name:"cart",
    initialState:[],
    reducers:{
        add:(state,actions)=>{
            state.push(actions.payload)

        },
        remove:(state,actions)=>{

            return state.filter((item)=>item.id!=actions.payload);
        },
    }


})

export const{add,remove}= Cartslice1.actions;
export default Cartslice1.reducer;
