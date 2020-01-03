import React from 'react';
import ReactDatatable from '@ashvin27/react-datatable';
import DataTable from 'react-data-table-component';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: []
        }

        this.columns = [
            {
                selector: "last_name",
                name: "Last Name",

            },
            {
                selector: "firstName",
                name: "First Name",
            },
            {
                selector: "email",
                name: "Email",
            },
            {
                selector: "primary_phone",
                name: "Phone",
            },
            {
                selector: "is_active",
                name: "Status",
            },
            {
                selector: "service_area",
                name: "Service Area",
            },
            {
                selector: "member_since",
                name: "Member Since",
            }
        ]
    }

    componentDidMount() {
        axios.get("http://3.14.67.238:9000/api/client/list")
            .then(res => {
                console.log(res.data);
                res.data = res.data.map((item) => {
                    item.firstName = item.first_name
                    if (item.is_active == true) {
                        item.is_active = "true"
                    }
                    else {
                        item.is_active = "false"
                    }
                    item.service_area = item.address.city
                    item.member_since = item.created_at
                    return item;
                })
                this.setState({
                    records: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleRowClick = (data) => {
        console.log(data)
        localStorage.setItem("itemID", data.id)
        this.props.history.push('/detail');
    }

    render() {
        return (
            <div>
                <h2>Clients</h2>
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

                {/* <ReactDatatable
                    records={this.state.records}
                    columns={this.columns}
                    extraButtons={this.extraButtons}
                    onRowClicked={(record) => this.handleRowClick(record)}
                    //onClicked={this.handleRowClick}
                /> */}

                <DataTable
                    columns={this.columns}
                    data={this.state.records}
                    onRowClicked={this.handleRowClick}
                />
            </div>
        )
    }
}

export default withRouter(Table);