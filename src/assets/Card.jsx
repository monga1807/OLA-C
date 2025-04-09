import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css"


// function DetailCard({image,title}) {
//   console.log(image , title , 'Yjddldl')
//   return  <div>
//     <img src={image} />
//     <p>{title}</p>
//   </div>

// }
function DetailCard({ image, title, text, text2, text3, text4, text5, b1, b2, onClick }) {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={image} className="main-image" />
      <Card.Body className="card-body">
        <div className="t-image">
        <Card.Img src={title} className="title-image" />
        </div>
        <Card.Text className="card-text1">{text}</Card.Text>
        <hr className='hr'/>
        <div className="e-price">
          <Card.Text className="card-text2">{text2}</Card.Text>
          <Card.Text className="card-text3">{text3}</Card.Text>
          <div className="f-price">
            <Card.Text className="card-text4">{text4}</Card.Text>
            <Card.Text className="card-text5">{text5}</Card.Text>
          </div>
        </div>
        <div className="card-button">
          <Button className="button-B1" onClick={onClick}>
            {b1}
          </Button>
          <Button className="button-B2">{b2}</Button>
        </div>
      </Card.Body>
    </Card>
  );
}


export default DetailCard;