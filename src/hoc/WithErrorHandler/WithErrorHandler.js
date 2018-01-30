import React , {Component} from 'react'
import PropTypes from 'prop-types'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Auxiliar'

const withErrorHandler = (WrapedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }
    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req
      })
      axios.interceptors.response.use(null,error => {
        this.setState({error: error})
      });
    }

    erroConfirmedHandler = () => (
      this.setState({error: null})
    )
    render () {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.erroConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapedComponent {...this.props} />
        </Aux>
      );
    }
  }
}


export default withErrorHandler;
