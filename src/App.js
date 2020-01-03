import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      names: []
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
  }

  componentDidMount() {
    console.log("componet is mounted");
    fetch('https://jsonplaceholder.typicode.com/todos/1', { headers: { Accept: 'application/json' } })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } 
        else {
          throw new Error('Something went wrong on api server!');
        }
      })
      .then(json => console.log(json));

      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      // .then(response => response.json())
      // .then(json => console.log(json))
  }

  handleFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  handleLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  handleAdd(e) {
    e.preventDefault();
    let sc = e.target;
    console.log("Handle Add is Clicked");
    console.log(e.target.firstname.value);
    console.log(e.target.lastname.value);
    console.log(sc.firstname.value);
    console.log(sc.lastname.value);
    let obj = {
      firstName: sc.firstname.value,
      lastName: sc.lastname.value
    }
    let nameArray = this.state.names;
    nameArray.push(obj);
    this.setState({
      names: nameArray,
      firstName: "",
      lastName: ""
    });
  }
  render() {
    let i=0;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.handleAdd}>
                <FormGroup>
                  <Label>FirstName</Label>
                  <Input type="text" name="firstname" value={this.state.firstName} onChange={this.handleFirstName} placeholder="firstName" />
                </FormGroup>
                <FormGroup>
                  <Label>LastName</Label>
                  <Input type="text" name="lastname" value={this.state.lastName} onChange={this.handleLastName} placeholder="lastName" />
                </FormGroup>
                <Button type="submit">Add</Button>
                <br />
                <br />
                <ListGroup>
                  {this.state.names.map(name => {
                    return (
                      <ListGroupItem key={i}>{name.firstName}{" "}{name.lastName}</ListGroupItem>
                    )
                  })}
                </ListGroup>

              </Form>
              <hr style={{ backgroundColor: "black" }} />
              <Button type="submit">Submit</Button>
            </Col>
          </Row>

        </Container>

      </div>
    )
  }
}

export default App;
