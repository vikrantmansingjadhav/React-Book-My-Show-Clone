// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Musicstudio from './Musicstudio';



  const Music = () => {

      return(

         <>

         <br /><br /><br /><br />
         
          <div className="container">


            <div style={{justifyContent:"space-around"}} className="row">

              <h1>Your Music Studio</h1><br /><br /><br />

                
                  {

         Musicstudio.map((cval) => {

         return(
             

            <>
            
             
            <Card style={{ width: '18rem',border:"3px solid white" }}>
      <Card.Img variant="top" src={cval.image} />
      <Card.Body>
        <Card.Title>{cval.name}</Card.Title>
        <Card.Text>
          {cval.description}
        </Card.Text>
        
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

  export default Music;