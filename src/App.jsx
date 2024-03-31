import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import PaginaPrincipal from './components/pages/PaginaPrincipal'
import PaginaAdministrador from './components/pages/PaginaAdministrador';



function App() {
  

  return (
    <>
    <Menu></Menu>
    <PaginaPrincipal></PaginaPrincipal>
    <PaginaAdministrador></PaginaAdministrador>
    <Footer></Footer>
    </>
  )
}

export default App
