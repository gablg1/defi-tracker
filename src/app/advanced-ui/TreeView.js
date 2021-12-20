import React, { Component } from 'react';
import {Treebeard} from 'react-treebeard';

const data = {
    name: 'Electronics',
    toggled: true,
    children: [
        {
            name: 'Mobiles',
            toggled: true,
            children: [
                { name: 'Mi' },
                { name: 'Samsung' },
                { name: 'Oppo' },
                { name: 'Vivo' },
                { name: 'Nokia' },
                { name: 'Oneplus' },
                { name: 'Apple' },
                { 
                    name: 'Accessories' ,
                    toggled: true,
                    children: [
                        {
                            name: 'Headphones & Headsets',
                            children: [
                                {name: 'JBL'},
                                {name: 'Skullcandy'},
                                {name: 'Sony'},
                                {name: 'Samsung'},
                                {name: 'Mi'},
                            ]
                        },
                        {name: 'Power Banks'},
                        {name: 'Mobile Cases'},
                        {name: 'Screen Guards'},
                        {name: 'Memmory Cards'},
                    ]
                }
            ]
        },
        {
            name: 'Appliances',
            children: [
                {name: 'TV'},
                {name: 'Fridge'},
                {name: 'Washing Machine'},
                {name: 'Microwave Owen'},
            ]
        },
        {
            name: 'Laptops',
            loading: true,
            children: []
        },
        { name: 'Wearables' },
        {
            name: 'Camera',
            children: [
                {name: 'DSLR & Mirrorless'},
                {name: 'Compact & Bridge Cameras'},
                {name: 'Sports & Action'},
            ]
        },

    ]
};

export class TreeView extends Component {
    constructor(props){
        super(props);
        this.state = {data};
        this.onToggle = this.onToggle.bind(this);
    }

    treeStyle = {
        tree: {
            base: {
                padding: '20px',
                background: 'inherit',
                color: '#ffffff'
            },
            node: {
                base: {
                    position: 'relative'
                },
                link: {
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '0px 5px',
                    display: 'block'
                },
                activeLink: {
                    background: '#ffffff'
                },
                toggle: {
                    base: {
                        position: 'relative',
                        display: 'inline-block',
                        verticalAlign: 'top',
                        marginLeft: '-5px',
                        height: '24px',
                        width: '24px'
                    },
                    wrapper: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        margin: '-7px 0 0 -7px',
                        height: '14px'
                    },
                    height: 14,
                    width: 14,
                    arrow: {
                        fill: '#ffffff',
                        strokeWidth: 0
                    }
                },    
                header: {
                    base: {
                        display: 'inline-block',
                        verticalAlign: 'top',
                        color: '#ffffff'
                    },
                    connector: {
                        width: '2px',
                        height: '12px',
                        borderLeft: 'solid 2px black',
                        borderBottom: 'solid 2px black',
                        position: 'absolute',
                        top: '0px',
                        left: '-21px'
                    },
                    title: {
                        lineHeight: '24px',
                        verticalAlign: 'middle'
                    }
                },
                subtree: {
                    listStyle: 'none',
                    paddingLeft: '19px'
                },    
            }
        }
    }

    onToggle(node, toggled){
        const {cursor, data} = this.state;
        if (cursor) {
            this.setState(() => ({cursor, active: false}));
        }
        node.active = true;
        if (node.children) { 
            node.toggled = toggled; 
        }
        this.setState(() => ({cursor: node, data: Object.assign({}, data)}));
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        Tree View
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Tree View</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Tree View Beard</h4>
                                <p className="card-description">React Tree View Component. Data-Driven, Fast, Efficient and Customisable</p>
                                <div className="template-demo">
                                    <Treebeard
                                        data={data}
                                        onToggle={this.onToggle}
                                        style={this.treeStyle}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TreeView
