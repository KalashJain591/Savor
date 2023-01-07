import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import "./FrontSection.css"
function FrontSection() {
  return (
    <Container className='main_div'>
      <Row className='main_container'>
        <Col className='content-section'>
          <p className='Company-name'><span>Savor Naturals</span></p>
          <p className='tagline'>Unaldulterated for your health</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi minus repellat, consequatur beatae aspernatur similique vero eos numquam est, quae distinctio impedit saepe veritatis delectus voluptatem dicta. Blanditiis, voluptas!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi minus repellat, consequatur beatae aspernatur similique vero eos numquam est, quae distinctio impedit saepe veritatis delectus voluptatem dicta. Blanditiis, voluptas!</p>
          <div>
            <button className="btn">Order Now</button>
          </div>
        </Col>
        <Col className='imageSection'>
          <img src="https://www.24mantra.com/wp-content/uploads/2020/09/824-px-x-465-Raggi-Laddu-Recipe-for-a-Perfectly-Healthy-Snack.jpg" alt="" srcSet="" />
        </Col>
      </Row>
    </Container>
  )
}

export default FrontSection
