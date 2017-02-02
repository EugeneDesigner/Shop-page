import React, { Component } from 'react'
import styles from './styles.sass'
import FontAwesome from 'react-fontawesome'
export default class HeaderSection extends Component {
  render() {
    return (
      <div className={styles.subscribe}>
        <div>
          <h3>Subscribe</h3>
          <h1>Stay updated on news</h1>
          <div className={styles.subscribe__form}>
          <FontAwesome name="angle-right"/>
          <input type="email" placeholder="Your email address"/>
          </div>
        </div>
        </div>
    )
  }
}
