import React, { Component, useState } from 'react';
import Rating from 'react-rating';
import Editable from 'react-bootstrap-editable';
import InputMask from "react-input-mask";
import Dropzone from 'react-dropzone';
import {useDropzone} from 'react-dropzone';
import { SketchPicker, PhotoshopPicker, SwatchesPicker} from 'react-color';
import { InputGroup, FormControl, Dropdown} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import ReactTags from 'react-tag-autocomplete';
import Select from 'react-select';
import { Typeahead } from 'react-bootstrap-typeahead';

const barEmptyStyle = {
    display: 'inline-block',
    width: '12px',
    height: '28px',
    backgroundColor: 'rgba(182, 109, 255, 0.6)',
    margin: '1px'
}

const barFullStyle = {
    display: 'inline-block',
    width: '12px',
    height: '28px',
    backgroundColor: 'rgba(182, 109, 255, 1)',
    margin: '1px'
}

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

export class AdvancedElements extends Component {
    constructor() {
        super();
        this.state = {
            files: []
        };
        this.onDrop = (acceptedFiles) => {
            const files = [...this.state.files]
            this.setState({files: [ ...files, ...acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })) ]
            });
        }
    }
    render() {

        const thumbs = this.state.files.map(file => (
            <div style={thumb} key={file.name}>
              <div style={thumbInner}>
                <img
                  src={file.preview}
                  style={img}
                  alt="File preview"
                />
              </div>
            </div>
        ));

        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title"> Advanced form elements </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Advanced elements</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Fontawesome Rating</h4>
                                <p className="card-description"> Simple rating with font-awesome icons</p>
                                <Rating 
                                    initialRating="1"
                                    emptySymbol={<i className="fa fa-star text-muted" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                                    fullSymbol={<i className="fa fa-star text-primary"  style={{fontSize:'20px', marginRight: '2px'}}></i>}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">CSS Rating</h4>
                                <p className="card-description"> CSS star ratig</p>
                                <Rating 
                                    initialRating="1"
                                    emptySymbol={<i className="mdi mdi-star text-muted mr-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                                    fullSymbol={<i className="mdi mdi-star text-primary mr-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">1/10 Rating</h4>
                                <p className="card-description">Rating from 1 to 10</p>
                                <Rating 
                                    start="1"
                                    stop="10"
                                    initialRating="7"
                                    emptySymbol={<span style={barEmptyStyle}></span>}
                                    fullSymbol={<span style={barFullStyle}></span>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Fractional Rating</h4>
                                <p className="card-description"> Enable fractional rating such as 2.5</p>
                                <Rating 
                                    initialRating="2.5"
                                    emptySymbol={<i className="fa fa-star-o text-muted" style={{fontSize:'30px', marginRight: '2px'}}></i>}
                                    fullSymbol={<i className="fa fa-star text-primary"  style={{fontSize:'30px', marginRight: '2px'}}></i>}
                                    fractions={2}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Custom each symbol</h4>
                                <p className="card-description"> Custom symbol for each value</p>
                                <Rating
                                    stop={4}
                                    emptySymbol="fa fa-battery-empty fa-2x text-muted mr-1"
                                    fullSymbol={['fa fa-battery-1 fa-2x text-primary mr-1', 'fa fa-battery-2 fa-2x text-primary mr-1', 'fa fa-battery-3 fa-2x text-primary mr-1', 'fa fa-battery-4 fa-2x text-primary mr-1']}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Reverse Rating</h4>
                                <p className="card-description">Rating from 9 to 1</p>
                                <Rating
                                    start={11}
                                    stop={1}
                                    step={-2}
                                    initialRating={7}
                                    emptySymbol={<span style={barEmptyStyle}></span>}
                                    fullSymbol={<span style={barFullStyle}></span>}
                                    onChange={(rate) => {document.querySelector('#selectedValue').innerHTML= rate || ''}}
                                    onHover={(rate) => {document.querySelector('#hoveredValue').innerHTML= rate || ''}}
                                />
                                <label className="d-block">Selected Value: <span id="selectedValue">7</span></label>
                                <label className="d-block">Hovered Value: <span id="hoveredValue"></span></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Editable form</h4>
                                <p className="card-description">Edit forms inline</p>
                                <div className="template-demo">
                                    <div className="editable-form">
                                        <div className="form-group row">
                                            <label className="col-6 col-lg-4 col-form-label">Simple text field</label>
                                            <div className="col-6 col-lg-8 d-flex align-items-center">
                                            <Editable
                                                initialValue="awesome"
                                                isValueClickable
                                                mode="inline"
                                            />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-6 col-lg-4 col-form-label">Empty text field, required</label>
                                            <div className="col-6 col-lg-8 d-flex align-items-center">
                                            <Editable
                                                initialValue=""
                                                isValueClickable
                                                mode="inline"
                                                validate = {(value) => {
                                                    return (!value) ? 'This field is required': null;
                                                }}
                                            />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-6 col-lg-4 col-form-label">Select, local array, custom display</label>
                                            <div className="col-6 col-lg-8 d-flex align-items-center">
                                            <Editable
                                                initialValue="Male"
                                                isValueClickable
                                                mode="inline"
                                                type="select"
                                                options={[
                                                    'Male',
                                                    'Female',
                                                    'Other'
                                                ]}
                                            />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-6 col-lg-4 col-form-label">Combodate (date)</label>
                                            <div className="col-6 col-lg-8 d-flex align-items-center">
                                            <Editable
                                            initialValue={'15 May 1984'}
                                                isValueClickable
                                                mode="inline"
                                                type="date"
                                            />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-6 col-lg-4 col-form-label">Textarea, buttons below.</label>
                                            <div className="col-6 col-lg-8 d-flex align-items-center">
                                            <Editable
                                                initialValue="awesome user!"
                                                isValueClickable
                                                mode="inline"
                                                type="textarea"
                                            />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Form Mask</h4>
                                <p className="card-description">Gives a preview of input format</p>
                                <form className="form-sample">
                                <div className="form-group row">
                                        <div className="col-lg-12">
                                            <label>Phone:</label>
                                            <InputMask mask="+7 99 999 99" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-12">
                                            <label>Date with default value:</label>
                                            <InputMask mask="99/99/9999" defaultValue="06-10-2019" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-12">
                                            <label>Date with custom placeholder:</label>
                                            <InputMask mask="99/99/9999" placeholder="Enter birth date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-12">
                                            <label>Credit Card <small>(autochange to Amex format if starts with 34 or 37)</small>:</label>
                                            <CreditCardMask />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Dropzone</h4>
                                <Dropzone accept={'image/*'} onDrop={this.onDrop} >
                                    {({getRootProps, getInputProps}) => (
                                        <section>
                                        <div {...getRootProps()} style={{minHeight: '200px', border: '1px solid #ebedf2'}}>
                                            <input {...getInputProps()} />
                                            <p className="text-center my-5">Drag 'n' drop some files here, or click to select files</p>
                                        </div>
                                        <aside style={thumbsContainer}>
                                            {thumbs}
                                        </aside>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Dropzone</h4>
                                <DropzoneDemoTwo />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="row">
                                <div className="col-lg-4 grid-margin grid-margin-lg-0">
                                    <div className="card-body">
                                        <h4 className="card-title">Colorpicker (Sketch)</h4>
                                        <p className="card-description">Click to select color</p>
                                        <SketchColorPicker />
                                    </div>
                                </div>
                                <div className="col-lg-4 grid-margin grid-margin-lg-0">
                                    <div className="card-body">
                                        <h4 className="card-title">Colorpicker (Photoshop)</h4>
                                        <p className="card-description">Click to select color</p>
                                        <PsColorPicker />
                                    </div>
                                </div>
                                <div className="col-lg-4 grid-margin grid-margin-lg-0">
                                    <div className="card-body">
                                        <h4 className="card-title">Colorpicker (Swatches)</h4>
                                        <p className="card-description">Click to select color</p>
                                        <SwatchesColorPicker />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column">
                        <div className="row flex-grow">
                            <div className="col-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Datepicker (Default)</h4>
                                        <p className="card-description">Click to open datepicker</p>
                                        <DefaultDatepicker />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row flex-grow">
                            <div className="col-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Clockpicker (Default)</h4>
                                        <p className="card-description">A simple clockpicker</p>
                                        <DefaultClockpicker />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 stretch-card grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Inline Datepicker</h4>
                            <p className="card-description">An inline datepicker</p>
                            <InlineDatepicker />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Date Range</h4>
                                <p className="card-description">A simple date range picker</p>
                                <DaterangePicker />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card-body">
                                        <h4 className="card-title">Form Repeater</h4>
                                        <p className="card-description">Click the add button to repeat the form</p>
                                        <FormRepeater />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card-body">
                                        <h4 className="card-title">Input Tag</h4>
                                        <p className="card-description">Type to add a new tag </p>
                                        <TagsInput />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">React Select</h4>
                                <p className="card-description">Single select box using react select</p>
                                <Select 
                                    options={[
                                        { value: 'chocolate', label: 'Chocolate' },
                                        { value: 'strawberry', label: 'Strawberry' },
                                        { value: 'vanilla', label: 'Vanilla' }
                                    ]}
                                />
                                <p className="card-description">Multiple select using react select</p>
                                <Select 
                                    isMulti={true}
                                    options={[
                                        { value: 'violet', label: 'Violet' },
                                        { value: 'indigo', label: 'Indigo' },
                                        { value: 'blue', label: 'Blue' },
                                        { value: 'green', label: 'Green' },
                                        { value: 'yellow', label: 'Yellow' },
                                        { value: 'orange', label: 'Orange' },
                                        { value: 'red', label: 'Red' },
                                        { value: 'black', label: 'Black' },
                                        { value: 'white', label: 'White' }
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Typeahead</h4>
                                <p className="card-description">Type and select an option from the suggestions</p>
                                <Typeahead
                                    labelKey="label"
                                    id="typeahead-single"
                                    options={[
                                        { value: 'violet', label: 'Violet' },
                                        { value: 'indigo', label: 'Indigo' },
                                        { value: 'blue', label: 'Blue' },
                                        { value: 'green', label: 'Green' },
                                        { value: 'yellow', label: 'Yellow' },
                                        { value: 'orange', label: 'Orange' },
                                        { value: 'red', label: 'Red' },
                                        { value: 'black', label: 'Black' },
                                        { value: 'white', label: 'White' }
                                    ]}
                                    placeholder="Choose a Color..."
                                />

                                <p className="card-description">Multi select using typeahead</p>
                                <Typeahead
                                    labelKey="label"
                                    id="typeahead-multiple"
                                    multiple={true}
                                    options={[
                                        { value: 'violet', label: 'Violet' },
                                        { value: 'indigo', label: 'Indigo' },
                                        { value: 'blue', label: 'Blue' },
                                        { value: 'green', label: 'Green' },
                                        { value: 'yellow', label: 'Yellow' },
                                        { value: 'orange', label: 'Orange' },
                                        { value: 'red', label: 'Red' },
                                        { value: 'black', label: 'Black' },
                                        { value: 'white', label: 'White' }
                                    ]}
                                    placeholder="Choose a Color..."
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CreditCardMask extends Component {
    state = {
        value: '',
        mask: '9999-9999-9999-9999'
      }
      
      onChange = (event) => {
        var value = event.target.value;
        var newState = {
          mask: '9999-9999-9999-9999',
          value: value
        };
        if (/^3[47]/.test(value)) {
          newState.mask = '9999-999999-99999';
        }
        this.setState(newState);
      }
      
      render() {
        return <InputMask {...this.state} onChange={this.onChange}  className="form-control" />;
      }
}

function DropzoneDemoTwo(props) {
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
      // Disable click and keydown behavior
      noClick: true,
      noKeyboard: true
    });
  
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    return (
      <div>
        <div {...getRootProps({className: 'dropzone'})} style={{minHeight: '200px', border: '1px solid #ebedf2', padding: '15px', display: 'flex', flexDirection: 'column'}}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <button type="button" onClick={open} className="btn btn-primary mt-auto">
            Open File Dialog
          </button>
        </div>
        <aside>
          {(files.length) ? <h5 className="my-2">Files</h5> : null}
          <ul className="list-ticked">{files}</ul>
        </aside>
      </div>
    );
}

function SketchColorPicker() {
    const [color, setColor] = useState('#ffe74c');
    return (
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Color Value"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            />
            <InputGroup.Append>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="px-3" style={{height: '100%', backgroundColor:color, color: color, borderColor: color}}>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <SketchPicker color={color} onChange={(color) => setColor(color.hex)} />
                    </Dropdown.Menu>
                </Dropdown>
            </InputGroup.Append>
        </InputGroup>
    );
}

function PsColorPicker() {
    const [color, setColor] = useState('#6bf178');
    const [menuOpen,toggleMenu]= useState(false);
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Color Value"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={color}
                onChange={(event) => setColor(event.target.value)}
            />
            <InputGroup.Append>
                <Dropdown show={menuOpen}>
                    <Dropdown.Toggle id="dropdown-basic" className="px-3" style={{height: '100%', backgroundColor:color, color: color, borderColor: color}} onClick={()=> {toggleMenu(!menuOpen)}}>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <PhotoshopPicker color={color} onChange={(color) => setColor(color.hex)} onAccept={()=>{toggleMenu(false)}} onCancel={()=>{toggleMenu(false)}} />
                    </Dropdown.Menu>
                </Dropdown>
            </InputGroup.Append>
        </InputGroup>
    );
}

function SwatchesColorPicker() {
    const [color, setColor] = useState('#ff5964');
    return (
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Color Value"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            />
            <InputGroup.Append>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="px-3" style={{height: '100%', backgroundColor:color, color: color, borderColor: color}}>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <SwatchesPicker color={color} onChange={(color) => setColor(color.hex)} />
                    </Dropdown.Menu>
                </Dropdown>
            </InputGroup.Append>
        </InputGroup>
    );
}

const DefaultDatepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="form-control" style={{'z-index':3}}/>
    );
};

const DefaultClockpicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        className="form-control"
        />
    );
};

const InlineDatepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        inline
        />
    );
}

const DaterangePicker = () => {

    const [startDate, setStartDate] = useState(new Date("2014/02/08"));

    const [endDate, setEndDate] = useState(new Date("2014/02/10"));

    return (
      <div className="daterange-picker">
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="form-control"
        />
        <span className="range-seperator"> to </span>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          endDate={endDate}
          minDate={startDate}
          className="form-control"
        />
      </div>
    );
};

class FormRepeater extends Component {
    constructor(){
        super();
        this.state = {
            users: [{id: 1, name: ''}]
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    inputChangeHandler(event, index) {
        const users = this.state.users;
        users[index].name = event.target.value;
        this.setState(users);;
    }

    addUserInput = () => {
        const users =[...this.state.users];
        users.push({id: this.state.users[this.state.users.length - 1].id + 1, name: ''});
        this.setState({users: users});
    }

    deleteUser(index) {
        const users =[...this.state.users];
        users.splice(index, 1);
        this.setState({users: users});
    }

    render() {
        return (
            <form className="form-inline" onSubmit={(event)=>{event.preventDefault();}}>
                <div className="d-flex flex-column">
                    { this.state.users.map((user, index) => {
                        return (
                            <div key={user.id} className="d-flex mb-2">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Add user"
                                        value={user.name}
                                        onChange={(event) => this.inputChangeHandler(event, index)}
                                    />
                                </div>
                                {(index > 0) ? <button className="btn btn-danger btn-sm icon-btn ml-2" onClick={()=>this.deleteUser(index)}><i className="mdi mdi-delete"></i></button> : null }
                            </div>
                        )
                    })}
                </div>
                <button className="btn btn-info btn-sm icon-btn ml-2 mb-2" onClick={ this.addUserInput } ><i className="mdi mdi-plus"></i></button>
            </form>
        )
    }
}

class TagsInput extends Component {
    constructor (props) {
        super(props)
     
        this.state = {
          tags: [
            { id: 1, name: "London" },
            { id: 2, name: "Canada" },
            { id: 3, name: "Australia" },
            { id: 4, name: "Mexico" },
          ],
          suggestions: [
            { id: 5, name: "India" },
            { id: 6, name: "United States of America" },
            { id: 7, name: "Italy" },
            { id: 8, name: "Japan" },
            { id: 9, name: "China" },
            { id: 10, name: "Russia" }
          ]
        }
      }
     
      handleDelete (i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
      }
     
      handleAddition (tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
      }
     
      render () {
        return (
          <ReactTags
            tags={this.state.tags}
            suggestions={this.state.suggestions}
            allowNew={true}
            handleDelete={this.handleDelete.bind(this)}
            handleAddition={this.handleAddition.bind(this)} />
        )
      }
}

export default AdvancedElements
