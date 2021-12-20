import React, { Component } from 'react';
// import brace from "brace";

import AceEditor from "react-ace";

// Import a Mode (language)
import "brace/mode/java";
import "brace/mode/html";
import "brace/mode/sass";
import "brace/mode/json";
import "brace/mode/php";

// Import a Theme (okadia, github, xcode etc)
import "brace/theme/github";
import "brace/theme/monokai";

const aceHeight = {
  minHeight: "300px"
};

export class CodeEditor extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Code editors </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Editors</a></li>
              <li className="breadcrumb-item active" aria-current="page">Code editors</li>
            </ol>
          </nav>
        </div>  
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Ace Editor</h4>
                <div className="row">
                  <div className="col-md-6 grid-margin">
                    <h5 className="card-subtitle">HTML Mode</h5>
                    <AceEditor style={aceHeight}
                      mode="html"
                      theme="monokai"
                      name="firstEditor"
                      onChange={this.onChange}
                      editorProps={{ $blockScrolling: true }}
                      placeholder="Placeholder Text"
                      onLoad={this.onLoad}
                      fontSize={14}
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      height="100%"
                      width="100%"
                      value={`
<div className="panel panel-default">
  <div className="panel-heading">
    <h5 className="panel-title">
      Panel Title
      <span className="text-semibold">Default</span>
      <small>Full featured toolbar</small>
    </h5>
    <ul className="panel-heading-icons">
      <li>
        <a href="!#" onClick={event => event.preventDefault()} data-panel="collapse"><i className="icon-arrow-down2"></i></a>
      </li>
      <li>
        <a href="!#" onClick={event => event.preventDefault()} data-panel="reload"><i className="icon-reload"></i></a>
      </li>
      <li>
        <a href="!#" onClick={event => event.preventDefault()} data-panel="move"><i className="icon-move"></i></a>
      </li>
      <li>
        <a href="!#" onClick={event => event.preventDefault()} data-panel="close"><i className="icon-close"></i></a>
      </li>
    </ul>
  </div>
  <div className="panel-body">
    Panel body
  </div>
</div>`}
                    />
                  </div>
                  <div className="col-md-6 grid-margin">
                    <h5 className="card-subtitle">Javascript Mode</h5>
                    <AceEditor style={aceHeight}
                      mode="java"
                      theme="monokai"
                      name="javaeditorEditor"
                      editorProps={{ $blockScrolling: true }}
                      placeholder="Placeholder Text"
                      onLoad={this.onLoad}
                      fontSize={14}
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      height="100%"
                      width="100%"
                      value={`
/**
  * In fact, you're looking at ACE right now. Go ahead and play with it!
  *
  * We are currently showing off the JavaScript mode. ACE has support for 45
  * language modes and 24 color themes!
*/
    
    function add(x, y) {
      var resultString = "Hello, ACE! The result of your math is: ";
      var result = x + y;
      return resultString + result;
    }
    
    var addResult = add(3, 2);
    console.log(addResult);`}
                      />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 grid-margin">
                    <h5 className="card-subtitle">CSS Mode</h5>
                    <AceEditor style={aceHeight}
                      mode="css"
                      theme="monokai"
                      name="cssEditor"
                      editorProps={{ $blockScrolling: true }}
                      placeholder="Placeholder Text"
                      onLoad={this.onLoad}
                      fontSize={14}
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      height="100%"
                      width="100%"
                      value={`
  .nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .nav li {
    display: inline-block;
  }
  
  .nav a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
                      `}
                    />
                  </div>
                  <div className="col-md-6 grid-margin">
                    <h5 className="card-subtitle">scss Mode</h5>
                    <AceEditor style={aceHeight}
                      mode="sass"
                      theme="monokai"
                      name="sassEditor"
                      editorProps={{ $blockScrolling: true }}
                      placeholder="Placeholder Text"
                      onLoad={this.onLoad}
                      fontSize={14}
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      height="100%"
                      width="100%"
                      value={`
  .nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  
    li {
      display: inline-block;
    }
  
    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }`}
                      />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 grid-margin">
                    <h5 className="card-subtitle">Json Mode</h5>
                    <AceEditor style={aceHeight}
                      mode="json"
                      theme="monokai"
                      name="jsonEditor"
                      editorProps={{ $blockScrolling: true }}
                      placeholder="Placeholder Text"
                      onLoad={this.onLoad}
                      fontSize={14}
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      height="100%"
                      width="100%"
                      value={`
  {
    "firstName": "John",
    "lastName": "Smith",
    "isAlive": true,
    "age": 27,
    "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
    },
    "phoneNumbers": [
      {
        "type": "home",
        "number": "212 555-1234"
      },
      {
        "type": "office",
        "number": "646 555-4567"
      },
      {
        "type": "mobile",
        "number": "123 456-7890"
      }
    ],
    "children": [],
    "spouse": null
  }
                      `}
                    />
                  </div>
                  <div className="col-md-6 grid-margin">
                    <h5 className="card-subtitle">PHP Mode</h5>
                    <AceEditor style={aceHeight}
                      mode="php"
                      theme="monokai"
                      name="phpEditor"
                      editorProps={{ $blockScrolling: true }}
                      placeholder="Placeholder Text"
                      onLoad={this.onLoad}
                      fontSize={14}
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      height="100%"
                      width="100%"
                      value={`
  <?php

  function nfact($n) {
    if ($n == 0) {
      return 1;
    }
    else {
      return $n * nfact($n - 1);
    }
  }

  echo "\n\nPlease enter a whole number ... ";
  $num = trim(fgets(STDIN));


  // ===== PROCESS - Determing the factorial of the input number =====

  $output = "\n\nFactorial " . $num . " = " . nfact($num) . "\n\n";
  echo $output;

?>
`}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CodeEditor
