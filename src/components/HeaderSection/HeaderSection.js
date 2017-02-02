import React, { Component } from 'react'
import styles from './styles.sass'
import FontAwesome from 'react-fontawesome'

export default class HeaderSection extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div>
          <h1 className={styles.header__icon}>C<span>&</span>B</h1>
          <ul className={styles.header__list}>
            <li>Home</li>
            <li>Catalog</li>
            <li>News</li>
            <li className={styles.sale}>Sale</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className={styles.header__bag}>
            <li>Your bag</li>
            <li className={styles['header__bag--count']}>2</li>
            <li><FontAwesome name="search"/></li>
          </ul>
        </div>
      </div>
    )
  }
}
