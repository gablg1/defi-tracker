import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from "react-contextmenu";

export class ContextMenuPage extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Context menu
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Context menu</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">simple</h4>
                <p className="card-description">
                  A simple context menu
                </p>
                <div className="card card-inverse-info">
                  <ContextMenuTrigger id="simpleContextMenu">
                    <div className="card-body">
                      <p className="card-text">Right click somewhere in this colored area for simple context menu</p>
                    </div>
                  </ContextMenuTrigger>
            
                  <ContextMenu id="simpleContextMenu">
                    <MenuItem>
                      Edit
                    </MenuItem>
                    <MenuItem>
                      Cut
                    </MenuItem>
                    <MenuItem>
                      Copy
                    </MenuItem>
                    <MenuItem>
                      Paste
                    </MenuItem>
                    <MenuItem>
                      Delete
                    </MenuItem>
                    <MenuItem>
                      Quit
                    </MenuItem>
                  </ContextMenu>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Access keys</h4>
                <p className="card-description">
                  Context menu with actions
                </p>
                <div className="card card-inverse-success">
                  <ContextMenuTrigger id="actionContextMenu">
                    <div className="card-body">
                      <p className="card-text">Right click somewhere in this colored area for simple context menu</p>
                    </div>
                  </ContextMenuTrigger>
            
                  <ContextMenu id="actionContextMenu">
                    <MenuItem data={{item: 'Edit'}} onClick={this.handleClick}>
                      Edit
                    </MenuItem>
                    <MenuItem data={{item: 'Cut'}} onClick={this.handleClick}>
                      Cut
                    </MenuItem>
                    <MenuItem data={{item: 'Copy'}} onClick={this.handleClick}>
                      Copy
                    </MenuItem>
                    <MenuItem data={{item: 'Paste'}} onClick={this.handleClick}>
                      Paste
                    </MenuItem>
                    <MenuItem data={{item: 'Delete'}} onClick={this.handleClick}>
                      Delete
                    </MenuItem>
                    <MenuItem data={{item: 'Quit'}} onClick={this.handleClick}>
                      Quit
                    </MenuItem>
                  </ContextMenu>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Multi-Level Menu</h4>
                <p className="card-description"> Context menu with sub menu </p>
                <div className="card card-inverse-success">
                  <ContextMenuTrigger id="multiLevelContextMenu">
                    <div className="card-body">
                      <p className="card-text">Right click somewhere in this colored area for simple context menu</p>
                    </div>
                  </ContextMenuTrigger>
                  
                  <ContextMenu id='multiLevelContextMenu'>
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 1' }}>Menu Item 1</MenuItem>
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 2' }}>Menu Item 2</MenuItem>
                    <SubMenu title='A SubMenu'>
                      <MenuItem onClick={this.handleClick} data={{ item: 'subitem 1' }}>SubItem 1</MenuItem>
                      <SubMenu title='Another SubMenu'>
                        <MenuItem onClick={this.handleClick} data={{ item: 'subsubitem 1' }}>SubSubItem 1</MenuItem>
                        <MenuItem onClick={this.handleClick} data={{ item: 'subsubitem 2' }}>SubSubItem 2</MenuItem>
                      </SubMenu>
                      <SubMenu title='Yet Another SubMenu'>
                        <MenuItem onClick={this.handleClick} data={{ item: 'subsubitem 3' }}>SubSubItem 3</MenuItem>
                        <MenuItem onClick={this.handleClick} data={{ item: 'subsubitem 4' }}>SubSubItem 4</MenuItem>
                      </SubMenu>
                      <MenuItem onClick={this.handleClick} data={{ item: 'subitem 2' }}>SubItem 2</MenuItem>
                    </SubMenu>
                  </ContextMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  handleClick(e, data) {
    alert('clicked : ' + data.item);
  }
}

export default ContextMenuPage
