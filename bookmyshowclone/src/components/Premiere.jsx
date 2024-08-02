import Premierecards from "./Premierecards";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



      const Premiere = () => {

         return(
         
            <>
            <br />
            
            <div style={{backgroundColor:"black",color:"white",borderRadius:"1rem"}} className="container-fluid">

             <div style={{justifyContent:"space-around"}} className="row">

                          

                <h1>Premiere</h1><br /><br /><br /><br />

               
                     {

         Premierecards.map((cval) => {

       return(

                  <>
                  
                   
                  <Card style={{ width: '18rem',position:"relative",backgroundColor:"black",color:"white" }}>
      <Card.Img variant="top" src={cval.image} />
      <Card.Body>
        <Card.Title>{cval.name}</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button id="premiere" style={{backgroundColor:"yellow"}}  variant="yellow">Watch</Button>
      </Card.Body>
    </Card>

                   
                  
                  </>
               


       )


         })


                   }  


             </div>


            </div>
            
            


            
            
            </>
    

         )


      }

      export default Premiere;