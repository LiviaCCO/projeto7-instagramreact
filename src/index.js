import ReactDOM from 'react-dom'
import NavBar from './NavBar'
import Corpo from './Corpo'

function App() {
    return (
        <>
        <NavBar/>
        <Corpo/>
        </>
    )
}

const aplicativo = App()
ReactDOM.render(aplicativo, document.querySelector(".root"))