import React from 'react'
import {useSelector} from 'react-redux'
import styles from './listeDip.module.css'

export default function ListDipends() {
    const listeDeps=useSelector(state=>state.Budget.depenses)
  return (
    <div id={styles.listDipends}>
        <table>
            <tr>
                <td>Titre</td>
                <td>Montant</td>
            </tr>
            {
                listeDeps.map(d=>(
                    <tr><td>{d.nom}</td><td>{d.montant}</td></tr>
                ))
            }
        </table>
    </div>
  )
}
