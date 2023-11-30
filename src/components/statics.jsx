import React from 'react'
import {useSelector} from 'react-redux'
import styles from './statics.module.css'

export default function Statics() {
    const bdg=useSelector(state=>state.Budget.budget)
    const Depenses=useSelector(state=>state.Budget.depenses)
    const totale=Depenses.reduce((smme,dep)=>smme+dep.montant,0)
  return (
    <div id={styles.statics}>
        <div><span>BUDGET:</span>{bdg}dh</div>
        <div><span>DEPENSES:</span>{totale}dh</div>
        <div><span>ECART:</span>{bdg-totale}dh</div>
    </div>
  )
}
