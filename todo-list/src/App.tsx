import { Input } from './components/Input'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'

function App() {

  const tasks = [
    {
      title: "estudar",
      completed: false
    },

    {
      title: "comer",
      completed: false
    },
    {
      title: "banhar",
      completed: true
    },
    {
      title: "dormir",
      completed: false
    },

  ]

  return (
    <main>
      <div className='content'>
      <header>
        <h1>You To Do</h1>
        <div className='input-container'>
          <Input />
          <Button>+</Button>
        </div>
      </header>
      <section className='list'>
        {tasks.map((task, index) => (<Card key={index} id={index} title={task.title} completed={task.completed} />))}
      </section>
      <footer className='footer'>

      </footer>
      </div>
      <span className='counter'>
        <p className='message'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
      </span>
    </main>
  )
}

export default App
