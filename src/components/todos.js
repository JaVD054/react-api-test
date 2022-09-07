import { Component } from "react"
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";


class Todos extends Component {
    state = { 

     } 
    render() { 
        const pro = this.props
        return (
            <Col lg={7} >
                <Card className="mt-3" >
                    <Card.Header>Post ID: {pro.todo.id}</Card.Header>
                    <Card.Body>
                        <Card.Text>User id: {pro.todo.userId}</Card.Text>
                        <Card.Title>{pro.todo.title}</Card.Title>
                        <Card.Text>{pro.todo.body}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}
 
export default Todos;
