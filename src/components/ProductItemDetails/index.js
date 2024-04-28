import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

class ProductItemDetails extends Component {
  state = {}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `http://localhost:3000/products/${id}`
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="bg-container">
        <Header />
      </div>
    )
  }
}

export default ProductItemDetails
