import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addBudjet } from '../redux/BudgetSlice'
import styles from './addBudget.module.css'
import swal from 'sweetalert'

export default function AddBudget() {
  const [bdg,setbdg]=useState("")
  const dispatch=useDispatch()

  const handleClick=()=>{
    if(bdg===""){
      swal("erreur","Remplir tous les champs s'ils vous plaît","warning")
    }else{
      dispatch(addBudjet(bdg))
      setbdg("");
  }}
  
  return (
    <div id={styles.addBudget}>
        <input type="number" placeholder='Saisir Budget' name="bdj" value={bdg} id={styles.bdgtInp} onChange={(e)=>{setbdg(Number(e.target.value))}}/><br/>
        <button className={styles.btnAddBgt} onClick={handleClick}>Ajouter Budget</button>
    </div>
  )
}
