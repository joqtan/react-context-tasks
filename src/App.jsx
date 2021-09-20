import './App.css'
import { Route, Switch } from 'react-router-dom'
import Heading from './components/Heading'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

const App = () => {
  return (
    <div className="h-screen text-white text-center p-10">
      <div className="container mx-auto h-full">
        <Heading />
        <Switch>
          <Route path="/" component={TaskList} exact />
          <Route path="/add" component={TaskForm} />
        </Switch>
      </div>
    </div>
  )
}

export default App
