import React from 'react';
import { Container, Row, Col, Input, Label, CustomInput, Button } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member_since: "",
            is_corporate_client: "",
            first_name: "",
            last_name: "",
            primary_phone: "",
            secondery_phone: "",
            email: "",
            caregiver_notes: "",
            admin_notes: "",
            employer: "",
            occupation: "",
            father: "",
            father_phone: "",
            payment_detail: "",
            is_active: false,
            primary_caregiver: 1,
            secondary_caregiver: 1,
            street_address: "A-10 Alyuminium",
            apartment: "Silicon City",
            city: "Noida",
            state: "U P ",
            postal_code: "110034",
            country: "India"
        }
    }

    inputHandler = (e) => {
        console.log(e)
        console.log(e.target)
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
        });
    }

    dateChangeHandler = (e) => {
        console.log(e)
        console.log(e.target)
        const value = e.target.value;
        this.setState({
            [e.target.name]: value
        });
    }

    submitHandler = () => {
        console.log(this.state);
        axios.post("http://3.14.67.238:9000/api/client/create", this.state)
            .then(res => {
                console.log(res);
                if (res.data) {
                    this.props.history.push('/datatable');
                }
            })
            .catch(err => {
                console.log(err)
                console.log(err.Response)
            })
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <Container>
                <h5>Create Client</h5>
                <Row className="margin">
                    <Col md={3}>Profile Image</Col>
                    <Col md={3}>
                        <input type='file'></input>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>Member Since</Col>
                    <Col md={3}>
                        <Input type="date" name="member_since"
                            value={this.state.member_since}
                            onChange={(e) => { this.dateChangeHandler(e) }}></Input>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>Corporate Client?</Col>
                    <Col md={3}>
                        <CustomInput type="select" id="corporateClient" name="is_corporate_client"
                            onChange={(e) => { this.inputHandler(e) }} >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </CustomInput>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>FirstName</Col>
                    <Col md={3}>
                        <Input type="text" name="first_name"
                            value={this.state.first_name}
                            onChange={(e) => this.inputHandler(e)}>
                        </Input>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>LastName</Col>
                    <Col md={3}>
                        <Input type="text" name="last_name"
                            value={this.state.last_name}
                            onChange={(e) => this.inputHandler(e)}>
                        </Input>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>Primary Cell</Col>
                    <Col md={3}>
                        <Input type="text" name="primary_phone"
                            value={this.state.primary_phone}
                            onChange={(e) => this.inputHandler(e)}>
                        </Input>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>Secondary Phone</Col>
                    <Col md={3}>
                        <Input type="text" name="secondery_phone"
                            value={this.state.secondery_phone}
                            onChange={(e) => this.inputHandler(e)}>
                        </Input>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>Email</Col>
                    <Col md={3}>
                        <Input type="email" name="email"
                            value={this.state.email}
                            onChange={(e) => this.inputHandler(e)}>
                        </Input>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>Secondary Email</Col>
                    <Col md={3}>
                        <Input type="email" name="email"
                            value={this.state.email}
                            onChange={(e) => this.inputHandler(e)}>
                        </Input>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>Primary Caregiver</Col>
                    <Col md={3}>
                        <CustomInput type="select" id="primarycaregiver"
                            name="primary_caregiver"
                            onChange={(e) => this.inputHandler(e)}>
                            <option value="">Select Value</option>
                            <option value={180}>ChildCare</option>
                            <option value={180}>value 2</option>
                        </CustomInput>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>Secondary Caregiver</Col>
                    <Col md={3}>
                        <CustomInput type="select" id="secondarycaregiver"
                            name="secondary_caregiver"
                            onChange={(e) => this.inputHandler(e)}>
                            <option value="">Select Value</option>
                            <option value={180}>ChildCare</option>
                            <option value={180}>value 2</option>
                        </CustomInput>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>Notes for Caregiver</Col>
                    <Col md={3}>
                        <Input type="textarea" name="caregiver_notes"
                            value={this.state.caregiver_notes}
                            onChange={(e) => this.inputHandler(e)}>
                        </Input>
                    </Col>
                </Row>
                <Row className="margin">
                    <Col md={3}>Admin Notes</Col>
                    <Col md={3}>
                        <Input type="textarea" name="admin_notes"
                            value={this.state.admin_notes}
                            onChange={(e) => this.inputHandler(e)}>
                        </Input>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Button type='button' onClick={this.submitHandler}>Submit</Button>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default withRouter(Form);