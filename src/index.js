import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Longform extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const {
      children
    } = this.props

    return (
      <div className='longform'>
        {children}
      </div>
    )
  }
}
