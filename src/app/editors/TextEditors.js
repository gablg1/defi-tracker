import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import ReactQuill from 'react-quill';
import SimpleMDE from "react-simplemde-editor";

export class TextEditors extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            QuillText: '', 
            mdeValue: '',
        }
        this.handleQuillChange = this.handleQuillChange.bind(this)
    }

    handleQuillChange(value) {
        this.setState({ QuillText: value });
    }

    handleMdeChange = value => {
        this.setState({ mdeValue: value });
      };

    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        Text Editors
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Editors</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Text Editors</li>
                        </ol>
                    </nav>
                </div>
                <div className="row grid-margin">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    Tinymce Editor
                                </h4>
                                <Editor
                                    initialValue="<p>This is the initial content of the editor</p>"
                                    init={{height: 500, mobile:{theme: 'silver'}}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row grid-margin">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    Quill Editor
                                </h4>
                                <ReactQuill 
                                    value={this.state.QuillText}
                                    onChange={this.handleQuillChange} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row grid-margin">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    SimpleMDE Editor
                                </h4>
                                <div className="simple-mde-container">
                                    <SimpleMDE onChange={this.handleMdeChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditors
