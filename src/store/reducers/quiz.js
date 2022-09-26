import {
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZZES_ERROR,
  FETCH_QUIZZES_START,
  FETCH_QUIZZES_SUCCESS,
  FINISH_QUIZ,
  QUIZ_NEXT_QUESTION,
  QUIZ_RETRY,
  QUIZ_SET_STATE
} from '../actions/actionTypes'

const initialState = {
  quizzes: [],
  loading: false,
  error: null,
  results: {}, // { [id]: 'success' 'error }
  isFinished: false,
  activeQuestion: 0,
  answerState: null, // { [id]: 'success' 'error }
  quiz: null
    /*{
        id: 1,
        question: 'What color is the sky?',
        rightAnswerId: 2,
        answers: [
            {text: 'Black', id: 1},
            {text: 'Blue', id: 2},
            {text: 'Red', id: 3},
            {text: 'Green', id: 4}
        ]
    },
    {
        id: 2,
        question: 'What year did WW2 start?',
        rightAnswerId: 2,
        answers: [
            {text: '1914', id: 1},
            {text: '1939', id: 2},
            {text: '1941', id: 3},
            {text: '1945', id: 4}
        ]
    }*/
}

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZZES_START:
      return {
        ...state, loading: true
      }
    case FETCH_QUIZZES_SUCCESS:
      return {
        ...state, loading: false, quizzes: action.quizzes
      }
    case FETCH_QUIZZES_ERROR:
      return {
        ...state, loading: false, error: action.error
      }
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state, loading: false, quiz: action.quiz
      }
    case QUIZ_SET_STATE:
      return {
        ...state, answerState: action.answerState, results: action.results
      }
    case FINISH_QUIZ:
      return {
        ...state, isFinished: true
      }
    case QUIZ_NEXT_QUESTION:
      return {
        ...state, answerState: null, activeQuestion: action.number
      }
    case QUIZ_RETRY:
      return {
        ...state, results: {}, isFinished: false, activeQuestion: 0, answerState: null
      }
    default:
      return state
  }
}