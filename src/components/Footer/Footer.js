import React, { Component } from 'react'
import styles from './styles.sass'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <h1 className={styles.icon}>C<span>&</span>B</h1>
          <ul className={styles.shop__list}>
            <li>Home</li>
            <li>Catalog</li>
            <li>News</li>
            <li>Sale</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className={styles.sign}> &#64;2010 - 2016 All rights reserved</div>
        </div>
      </footer>
    )
  }

}
