import React, { Component } from 'react'
import styles from './styles.sass'
import FontAwesome from 'react-fontawesome'

export default class TopMenu extends Component {
  render() {
    return (
      <div className={styles.topbar}>
        <div>
        <ul>
          <li>Delivery</li>
          <li>FAQ</li>
          <li>Help</li>
        </ul>
        <ul className={styles.topbar__right}>
          <li>Dollars<span><FontAwesome name="angle-down"/></span></li>
          <li>En<FontAwesome name="angle-down"/></li>
        </ul>
        </div>
      </div>
    )
  }
}
