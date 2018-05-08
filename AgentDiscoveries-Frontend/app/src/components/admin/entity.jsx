import React from 'react';
import {Button} from 'react-bootstrap';
import Link from 'react-router-dom/Link';

// TODO: This does not render very nicely - probably want to be less generic
export default class Entity extends React.Component {
    constructor (props) {
        super(props);

        // TODO: this assumes that id is the first JSON value
        this.id = Object.values(props.entity)[0];
    }

    render() {
        return (
            <tr key={this.id}>
                {this.getEntityRow()}
                <td key='edit'>
                    {this.getEditButton()}
                </td>
            </tr>
        );
    }

    getEntityRow() {
        return Object.keys(this.props.entity).map(key =>
            <td key={key}>{this.props.entity[key].toString()}</td>);
    }

    getEditButton() {
        if (this.props.type !== 'regions') {
            return (
                <Link to={`/admin/${this.props.type}/edit/${this.id}`}>
                    <Button type='button'>Edit</Button>
                </Link>
            );
        }
    }
}
