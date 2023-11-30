import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addDepenses,depensee} from '../redux/BudgetSlice'
import uuid from 'react-uuid'
import styles from './addDepense.module.css'
import swal from 'sweetalert'
import {useSelector} from 'react-redux'

export default function AddDepence() {
    const [dpns,setDpns]=useState("")
    const [ttle,setTtle]=useState("")
    const dispatch=useDispatch()

    const bdg=useSelector(state=>state.Budget.budget)
    const Depenses=useSelector(state=>state.Budget.depenses)
    const totale=Depenses.reduce((smme,dep)=>smme+dep.montant,0)

    const handleClick=()=>{
      if(dpns===""||ttle===""){
        swal("erreur","Remplir tous les champs s'ils vous plaît","info")
        setDpns("");
        setTtle("")
      }else if(Number(dpns)>(bdg-totale)){
        swal("warning","Votre budjet est insuffisant","warning")
        setDpns("");
        setTtle("")
      }else{
        dispatch(addDepenses({id:uuid(),nom:ttle,montant:Number(dpns)}))
        setDpns("");
        setTtle("")
    }}

  return (
    <div id={styles.addDepence}>
        <input type="text" value={ttle} placeholder='Saisir titre' onChange={(e)=>setTtle(e.target.value)}/><br/>
        <input type="number" value={dpns} placeholder='Saisir Depense' onChange={(e)=>setDpns((e.target.value))}/><br/>
        <button onClick={handleClick}>Ajouter Depence</button>
    </div>
  )
}
