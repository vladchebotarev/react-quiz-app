import Layout from './hoc/Layout/Layout'
import {Component} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import {connect} from 'react-redux'
import Logout from './components/Logout/Logout'
import withRouter from './hoc/withRouter'
import {autoLogin} from './store/actions/auth'

class App extends Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render() {
    let routes = (
      <Routes>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/quiz/:id" element={<Quiz/>}/>
        <Route path="/logout/*" element={<Logout/>}/>
        <Route path="/" element={<QuizList/>}/>
      </Routes>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Routes>
          <Route path="/quiz-creator" element={<QuizCreator/>}/>
          <Route path="/quiz/:id" element={<Quiz/>}/>
          <Route path="/logout/*" element={<Logout/>}/>
          <Route path="/" exect element={<QuizList/>}/>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      )
    }

    return (
      <Layout>
        { routes }
      </Layout>
    )

  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
