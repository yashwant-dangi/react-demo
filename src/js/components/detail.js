import React from 'react';
import { Container, Col, Row, Label } from 'reactstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';

class FormDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            first_name: undefined,
            last_name: undefined,
            primary_phone: undefined,
            secondery_phone: undefined,
            email: undefined
        }
    }

    componentDidMount() {
        let id = localStorage.getItem("itemID");
        axios.get("http://3.14.67.238:9000/api/client/" + id)
            .then(res => {

                console.log(res.data);
                this.setState({
                    ...res.data
                }, () => {
                    this.setState({
                        isLoading: false
                    })
                })

            })
            .catch(err => {
                console.log(err);
            })
    }



    render() {
        if (this.state.isLoading) {
            return (
                <p>Loading...</p>
            )
        }
        else {
            return (
                <Container>
                    <h1>Detail Page</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/datatable">List</Link>
                        </li>
                        <li>
                            <Link to="/detail">Detail</Link>
                        </li>
                    </ul>
                    <Row>
                        <Col>
                            <Label>{this.state.first_name}</Label>
                            <br />
                            <Label>{this.state.last_name}</Label>
                            <br />
                            <Label>{this.state.primary_phone}</Label>
                            <Label>{this.state.secondery_phone}</Label>
                            <Label>{this.state.email}</Label>
                            <hr />
                            <Label>{this.state.primary_caregiver.first_name}</Label>
                            <br />
                            <Label>{this.state.secondary_caregiver.first_name}</Label>
                        </Col>
                        <Col>
                            <h5>Billing Address</h5>
                        </Col>
                        <Col>
                            <h5>Background</h5>
                        </Col>

                    </Row>
                </Container>
            )
        }
    }
}

export default FormDetail;