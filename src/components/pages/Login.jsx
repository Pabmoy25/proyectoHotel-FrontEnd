import { Form, Button } from "react-bootstrap";


const Login = () => {
  return (
    <section>
      <div className="mt-5"><h1>Iniciar sesión</h1></div>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>
            Contraseña
          </Form.Label>

          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-5">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default Login;
