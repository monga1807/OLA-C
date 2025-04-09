import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card2.css'

function CardP2(props) {
  return (
    <Card style={{ display:'flex' , height:'105px' , margin:'30px' , padding:'10px' }} >
      <Card.Img variant="top" className='card-img1'src={props.image} />
      <Card.Body className='card-body1'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className='card-textn'>
          {props.text}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardP2;