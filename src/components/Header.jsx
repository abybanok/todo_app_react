import { Link } from 'react-router-dom'

function Header(){
  return (
    <header>
      <h2>Список задач</h2>
      <nav>
        <Link to='/'> Задачи </Link> | <Link to='/about'> О приложении </Link>
      </nav>
    </header>
  )
}

export default Header
