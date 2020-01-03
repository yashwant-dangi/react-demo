import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { names: state.firstname }
}
console.log(mapStateToProps);

const connectedList = ({ names }) => {
    return (
        <ul className="list-group list-group-flush">
            {names.map(el => (
                <li className="list-group-item" key={el.id}>
                    {el.name}
                </li>
            ))}
        </ul>
    )
}

const List = connect(mapStateToProps)(connectedList)
export default List;