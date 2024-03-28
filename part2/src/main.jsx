import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes}></App>
  )
}

refresh()

