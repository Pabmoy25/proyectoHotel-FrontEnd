import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import PaginaPrincipal from './components/pages/PaginaPrincipal'
import PaginaAdministrador from './components/pages/PaginaAdministrador';
import { Container } from 'react-bootstrap';



function App() {
  

  return (
    <>
    <Menu></Menu>
    <PaginaPrincipal></PaginaPrincipal>
    <Container className="container-fluid">
    <PaginaAdministrador></PaginaAdministrador>
    </Container>
    <Footer></Footer>
    </>
  )
}

export default App
