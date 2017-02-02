import React, {Component} from 'react';
import TopMenu from '../components/TopMenu'
import Footer from '../components/Footer'
import styles from './app.css'


export default class Layout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <TopMenu/>
        {this.props.children}
        <Footer/>
      </div>

    )
  }
}
