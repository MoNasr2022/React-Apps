import {
  Container,
  ListGroup
} from 'react-bootstrap';

const Results =  () => {
    return(
        <Container>
       <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" disabled>
        Link 2
      </ListGroup.Item>
     
      
    </ListGroup>
    </Container>
    )
};


export default Results;