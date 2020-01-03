import React from 'react';

class Repeater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RowData: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let row = {
            firstname: e.target.fname.value,
            lastname: e.target.lname.value,
            id: Date.now()
        }
        this.setState((prevSta) => ({
            RowData: prevSta.RowData.concat(row)
        }));
    }

    removeItem(id) {
        console.log(id);
        let tempArray = this.state.RowData.filter(item => item.id !== id)
        this.setState({ RowData: tempArray });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>FirstName</label>
                                <input type="text" name="fname" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>LastName</label>
                                <input type="text" name="lname" className="form-control"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
                <br />
                <hr />
                <ul className="list-group list-group-flush">
                    {this.state.RowData.map(el => (
                        <li className="list-group-item" key={el.id}>
                            <ul>
                                <div className="row">
                                    <div className="col-md-5">{el.firstname}</div>
                                    <div className="col-md-5">{el.lastname}</div>
                                    <div className="col-md-2">
                                        <button className="btn btn-warning" onClick={() => this.removeItem(el.id)}>X</button>
                                    </div>
                                </div>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Repeater;