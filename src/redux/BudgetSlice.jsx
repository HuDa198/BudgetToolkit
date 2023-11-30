import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid'

const budgetSlice = createSlice({
  name: "Budget",
    initialState: {
    budget:100000,
    depenses:[{    
        id: uuid(), 
        nom: "voiture", 
        montant: 40000
        },
        {
            id: uuid(), 
            nom: "vente PC", 
            montant: 50000 
        },
        {
            id: uuid(), 
            nom: "Achat Cartable", 
            montant: 4500 
        }
    ]},
    reducers:{
        addBudjet:(state,action)=>{
            state.budget+=action.payload
        },
        addDepenses:(state,action)=>{
            state.depenses=[...state.depenses,action.payload]
        },
        depensee:(state,action)=>{
            state.budget-=action.payload
        }
    }
})

export const {addBudjet,addDepenses,depensee}=budgetSlice.actions
export default budgetSlice.reducer