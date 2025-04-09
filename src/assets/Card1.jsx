import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card1.css"

function CardP1(props) {
  return (
    <Card  className= "custom-card "
    // style={{ width: '18rem' }}
    >
      {/* <Card.Img variant="top" 
        src= {props.image}
        className='main-image'
       /> */}
      <Card.Body className='card-body'>
        <Card.Img src={props.Title} className='title-image1'/>
        
        <Card.Text className='card-text6'>
          {props.Text}
        </Card.Text>
        <div className="e-price">
        <Card.Text className='card-text2'>
          {props.Text2}
        </Card.Text>
        <Card.Text className='card-text3'>
          {props.Text3}
        </Card.Text>
        <div className='f-price'>
        <Card.Text className='card-text4'>
          {props.Text4}
        </Card.Text>
        <Card.Text className='card-text5'>
          {props.Text5}
        </Card.Text>
        </div>
        </div>
        <div className="card-button">
        <Button className='button-B1'>{props.B1}</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardP1;