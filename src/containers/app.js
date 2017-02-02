import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadApp } from 'actions/app'
import styles from './app.css'
import HeaderSection from '../components/HeaderSection/HeaderSection'
import Shop from '../components/Shop'
import Subscribe from '../components/Subscribe'



class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(loadApp());
  }


  render() {
    if (!this.props.loaded) {
      return null;
    }
    return (
      <div className={styles.container}>
        <HeaderSection/>
        <Shop products={this.props.products} category={this.props.category}/>
        <Subscribe/>
      </div>
    )
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded,
    products: state.app.products,
    category: state.app.category
  };
}

export default connect(mapStateToProperties)(AppContainer)
