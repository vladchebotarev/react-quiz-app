import {Component} from 'react'
import {connect} from 'react-redux'
import {Navigate, Route, Routes} from 'react-router-dom'
import {logout} from '../../store/actions/auth'

class Logout extends Component {
  componentDidMount() {
    this.props.logout()
  }

  render() {
    return (
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout)