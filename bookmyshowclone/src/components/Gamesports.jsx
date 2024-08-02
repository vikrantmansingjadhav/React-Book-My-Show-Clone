
import Card from 'react-bootstrap/Card';
import Marathon from './Marathon';

  const Gamessports = () => {

         return(


             <>

             <br /><br /><br />
             
             <div className="container">

        <div style={{justifyContent:"space-around"}} className="row">

       
       <h1>Top Games & Sports Events</h1><br /><br /><br />

                
                {

               Marathon.map((cval) => {

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

  export default Gamessports;