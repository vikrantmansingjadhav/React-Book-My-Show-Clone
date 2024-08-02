
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CardData from './Cardsdata';

  
  const Cards = () =>{

     return(


       <>

       <br /><br /><br />
           
           <div className="container">
          
          <div style={{justifyContent:"space-around"}} className="row">

            <h1>Recommended Movies</h1><br /><br /><br />

            {

              CardData.map((cval) => {
                 
                    return(

                           <>

                      
                            
      <Card style={{ width: '17rem',border:"3px solid white" }}>
      <Card.Img style={{height:"27rem"}} variant="top" src={cval.image} />
      <Card.Body>
        <Card.Title>{cval.name}</Card.Title>
        <Card.Text>

          {cval.sequence}
          
        </Card.Text>
        <Button  variant="dark">Book Show</Button>
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

  export default Cards;