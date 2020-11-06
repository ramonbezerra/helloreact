import React, { Component } from 'react';

const Header = props => <h1>{props.title}</h1>;

const FileItem = props => { 
    return (
        <div>
            <strong>{props.itemName}</strong>
            <hr/>
            <p>{props.itemSize}</p>
        </div>
    );
}

class FilesList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [
                { name: "tcc.doc", size: 50 },
                { name: "tcc.pdf", size: 25 }
            ]
        };
    }

    render() {
        return (
            <div>
                <Header title="Files From My Computer"/>
                <br/>
                <FileItem 
                    itemName={this.state.items[0].name} 
                    itemSize={this.state.items[0].size}
                />
                <FileItem 
                    itemName={this.state.items[1].name} 
                    itemSize={this.state.items[1].size}
                />
            </div>
        );
    }
}

export default FilesList;