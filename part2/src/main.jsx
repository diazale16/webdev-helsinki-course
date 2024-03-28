import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App></App>
  )
}

refresh()

