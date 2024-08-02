   
    import React from 'react';
    import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import showdata from './Bookshow';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';



    
    const Bar = () => {

   
       const [Search , setSearch] = useState("");
       const [Term , setTerm] = useState([]);


     const button = () => {

        const filtercards = showdata.filter(card => 
          
         card.title.toLowerCase().includes(Search.toLowerCase())  
          
          )

          setTerm(filtercards)

     }



      return (

       <>

                 

                   
       <Navbar expand="lg" className="bg-body-black">
      <Container style={{backgroundColor:"black"}}>
        <Navbar.Brand href="#home"><img style={{height:"3rem"}} src="./Assets/images/book.jpg" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            <Nav.Link href="#home"><input style={{width:"26rem",left:"-1rem",position:"relative"}} value={Search} onChange={(e) => setSearch(e.target.value)} className='form-control' type="text" name="" id="" placeholder='Search for Events,Plays,Sports,Activities' /></Nav.Link>

            <Nav.Link href="#link"><button onClick={button} className='btn btn-danger'>Search</button></Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            
              <div className="bar2">




              <Navbar expand="lg" className="bg-body-black">
      <Container style={{backgroundColor:"black"}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <div style={{display:"flex"}} className="buttons">

             
                
            {/* <Dropdown>
      <Dropdown.Toggle variant="black" id="dropdown-basic">
        Movies
      </Dropdown.Toggle> */}

      {/* <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

            
      
          <button style={{backgroundColor:"black"}} className='btn btn-dark'>Plays</button>
          <button style={{backgroundColor:"black"}} className='btn btn-dark'>Sports</button>
           <button style={{backgroundColor:"black"}} className='btn btn-dark'>Activities</button>
           <button style={{backgroundColor:"black"}} className='btn btn-dark'>Events</button>

              

            </div>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

                




              </div>
                



               



    <div className="container">
                    
                    
                    <div style={{justifyContent:"space-around"}} className="row">

                 {

                  Term.map(card => (


                    <Card style={{ width: '16rem',border:"3px solid white" }}>
                    <Card.Img style={{height:"20rem"}} variant="top" src={card.image} />
                    <Card.Body>
                      <Card.Title><h4>{card.name}
                      </h4></Card.Title>
                      <Card.Text>
                       
                      </Card.Text>
                      <NavLink to= "/Daddy" className="nav-link"><Button variant="primary">Watch</Button></NavLink>
                    </Card.Body>
                  </Card>




                  ))
                  
                  
                        
                  
                   
                  
                  
          
          

                 }
                   


                    </div>
                  
                  
                  
                  
                  </div>                   
       
<br />
       
      
       </>
    

            
      );
    };
    
    export default Bar;
    