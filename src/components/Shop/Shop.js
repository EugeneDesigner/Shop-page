import React, { Component } from 'react'
import styles from './styles.sass'
import FontAwesome from 'react-fontawesome'


const navigation = ['all', 't-shirts', 'sweaters', 'shorts', 'jackets', 'accessoires']

export default class Shop extends Component {

  render() {
    const selected = ''
    return (
      <div className={styles.shop}>
        <h1 className={styles.shop__header}>Catalog</h1>
        <ul className={styles.shop__navigation}>
          {navigation.map((item, index) => {

            return (
              <li key={index} className={this.props.category && item === this.props.category.toLowerCase() ? styles.selected : null}>{item}</li>
            )
          })
          }
        </ul>
        <div className={styles.shop__products}>
          {this.props.products ? this.props.products.map((product, index) => {
            return (
              <div className={styles.items} key={index}>
                <div className={styles['shop__products--image']}>
                  <img src={index + '.png'}/>
                  {product.status ? <div className={styles['shop__products--new']}>{product.status}</div> : null}
                </div>
                <p className={styles['shop__products--name']}> {product.name}</p>
                <p className={!product.discount ? styles['shop__products--price'] : styles['shop__products--price-discount']}>
                <FontAwesome name="dollar"/>{product.price}
                  {product.discount ? <span className={styles['shop__products--discount']}>  <FontAwesome name="dollar"/>{product.discount}</span>
                  : null}
                </p>
              </div>
            )
          }) : null}
          <div className={styles.load}>Load more ...</div>
        </div>

      </div>
    )
  }
}
