  import React from 'react';
                                                                                    
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,} from 'react-bootstrap'
  import { useNavigate } from 'react-router-dom';
  import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import {logout} from "../actions/userActions"


const Header = ({setSearch}) => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const userLogin=useSelector((state)=>state.userLogin);
  const {userInfo}=userLogin;
  
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/")
  };
    return (
      <Navbar bg="primary" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand >
      <Link to='/'>Note zipper</Link>
      
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="m-auto">
      <Form inline>
        <FormControl
        type="text"
        placeholder="search"
        className="mr-sm-2"
        onChange={(e)=>setSearch(e.target.value)}
        />
      </Form>
      </Nav>
      <Nav>
        <Nav.Link href="/mynotes">
          <Link to="/mynotes">   my notes</Link>
       
          </Nav.Link>
     
               <NavDropdown title="Piyush Agarwal" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1" >My profile</NavDropdown.Item>
          
          <NavDropdown.Divider />
          <NavDropdown.Item 
          onClick={logoutHandler}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>  
        
      </Nav>
   
    </Navbar.Collapse>
  </Container>
</Navbar>    )
}

export default Header
