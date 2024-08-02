import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Events from './Events';

  const Liveevents = () => {

   return(
 
              <>
              <br /><br /><br /><br />

                     <div className="container">

              <div style={{justifyContent:"space-around"}} className="row">

               
               <h1>The Best Of Live Events</h1><br /><br /><br /><br />
                  
                   {

                  Events.map((cval) => {

                     return(

                 <>
                 
                 
                 <Card style={{ width: '15rem',border:"3px solid white" }}>
      <Card.Img style={{borderRadius:"1rem"}} variant="top" src={cval.image} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
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

  export default Liveevents;