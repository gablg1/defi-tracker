import React, { Component } from 'react'

export class Email extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Email
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={evt =>evt.preventDefault()}>Apps</a></li>
              <li className="breadcrumb-item active" aria-current="page">Email</li>
            </ol>
          </nav>
        </div>
        <div className="email-wrapper wrapper">
          <div className="row align-items-stretch">
            <div className="mail-sidebar d-none d-lg-block col-xl-2 pt-3 bg-dark">
              <div className="menu-bar">
                <ul className="menu-items">
                  <li className="compose mb-3"><button className="btn btn-primary btn-block">Compose</button></li>
                  <li className="active"><a href="!#" onClick={evt =>evt.preventDefault()}><i className="mdi mdi-email-outline"></i> Inbox</a><span className="badge badge-pill badge-success">8</span></li>
                  <li><a href="!#" onClick={evt =>evt.preventDefault()}><i className="mdi mdi-share"></i> Sent</a></li>
                  <li><a href="!#" onClick={evt =>evt.preventDefault()}><i className="mdi mdi-file-outline"></i> Draft</a><span className="badge badge-pill badge-warning">4</span></li>
                  <li><a href="!#" onClick={evt =>evt.preventDefault()}><i className="mdi mdi-upload"></i> Outbox</a><span className="badge badge-pill badge-danger">3</span></li>
                  <li><a href="!#" onClick={evt =>evt.preventDefault()}><i className="mdi mdi-star-outline"></i> Starred</a></li>
                  <li><a href="!#" onClick={evt =>evt.preventDefault()}><i className="mdi mdi-delete"></i> Trash</a></li>
                </ul>
                <div className="wrapper">
                  <div className="online-status d-flex justify-content-between align-items-center">
                  <p className="chat">Chats</p> <span className="status offline online"></span></div>
                </div>
                <ul className="profile-list">
                  <li className="profile-list-item"> <a href="!#" onClick={evt =>evt.preventDefault()}> <span className="pro-pic"><img src={require("../../assets/images/faces/face1.jpg")} alt="user"/></span><div className="user"><p className="u-name">David</p><p className="u-designation">Python Developer</p></div> </a></li>
                  <li className="profile-list-item"> <a href="!#" onClick={evt =>evt.preventDefault()}> <span className="pro-pic"><img src={require("../../assets/images/faces/face2.jpg")} alt="user"/></span><div className="user"><p className="u-name">Stella Johnson</p><p className="u-designation">SEO Expert</p></div> </a></li>
                  <li className="profile-list-item"> <a href="!#" onClick={evt =>evt.preventDefault()}> <span className="pro-pic"><img src={require("../../assets/images/faces/face20.jpg")} alt="user"/></span><div className="user"><p className="u-name">Catherine</p><p className="u-designation">IOS Developer</p></div> </a></li>
                  <li className="profile-list-item"> <a href="!#" onClick={evt =>evt.preventDefault()}> <span className="pro-pic"><img src={require("../../assets/images/faces/face12.jpg")} alt="user"/></span><div className="user"><p className="u-name">John Doe</p><p className="u-designation">Business Analyst</p></div> </a></li>
                  <li className="profile-list-item"> <a href="!#" onClick={evt =>evt.preventDefault()}> <span className="pro-pic"><img src={require("../../assets/images/faces/face25.jpg")} alt="user"/></span><div className="user"><p className="u-name">Daniel Russell</p><p className="u-designation">Tester</p></div> </a></li>
                  <li className="profile-list-item"> <a href="!#" onClick={evt =>evt.preventDefault()}> <span className="pro-pic"><img src={require("../../assets/images/faces/face10.jpg")} alt="user"/></span><div className="user"><p className="u-name">Sarah Graves</p><p className="u-designation">Admin</p></div> </a></li>
                  <li className="profile-list-item"> <a href="!#" onClick={evt =>evt.preventDefault()}> <span className="pro-pic"><img src={require("../../assets/images/faces/face23.jpg")} alt="user"/></span><div className="user"><p className="u-name">Sophia Lara</p><p className="u-designation">UI/UX</p></div> </a></li>
                  <li className="profile-list-item"> <a href="!#" onClick={evt =>evt.preventDefault()}> <span className="pro-pic"><img src={require("../../assets/images/faces/face11.jpg")} alt="user"/></span><div className="user"><p className="u-name">Catherine Myers</p><p className="u-designation">Business Analyst</p></div> </a></li>
                  <li className="profile-list-item"> <a href="!#" onClick={evt =>evt.preventDefault()}> <span className="pro-pic"><img src={require("../../assets/images/faces/face9.jpg")} alt="user"/></span><div className="user"><p className="u-name">Tim</p><p className="u-designation">PHP Developer</p></div> </a></li>
                </ul>
              </div>
            </div>
            <div className="mail-list-container col-xl-3 pt-4 pb-4 border-right bg-dark">
              <div className="border-bottom pb-4 mb-3 px-3">
                <div className="form-group">
                  <input className="form-control w-100" type="search" placeholder="Search mail" id="Mail-rearch"/>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">David Moore</p>
                  <p className="message_text">Hi Emily, Please be informed that the new project presentation is due Monday.</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline"></i>
                </div>
              </div>
              <div className="mail-list new_mail">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input" defaultChecked /><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">Microsoft Account Password Change</p>
                  <p className="message_text">Change the password for your Microsoft Account using the security code 35525</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline favorite"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">Sophia Lara</p>
                  <p className="message_text">Hello, last date for registering for the annual music event is closing in</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">Stella Davidson</p>
                  <p className="message_text">Hey there, can you send me this year’s holiday calendar?</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline favorite"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">David Moore</p>
                  <p className="message_text">FYI</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline favorite"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">Daniel Russel</p>
                  <p className="message_text">Hi, Please find this week’s update..</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"><label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">Sarah Graves</p>
                  <p className="message_text">Hey, can you send me this year’s holiday calendar ?</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">Bruno King</p>
                  <p className="message_text">Hi, Please find this week’s monitoring report in the attachment.</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">Me, Mark</p>
                  <p className="message_text">Hi, Testing is complete. The system is ready to go live.</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">Catherine Myers</p>
                  <p className="message_text">Template Market: Limited Period Offer!!! 50% Discount on all Templates.</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline favorite"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">Daniel Russell</p>
                  <p className="message_text">Hi Emily, Please approve my leaves for 10 days from 10th May to 20th May.</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">Sarah Graves</p>
                  <p className="message_text">Hello there, Make the most of the limited period offer. Grab your favorites</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">John Doe</p>
                  <p className="message_text">This is the first reminder to complete the online cybersecurity course</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline"></i>
                </div>
              </div>
              <div className="mail-list">
                <div className="form-check"> <label className="form-check-label"> <input type="checkbox" className="form-check-input"/><i className="input-helper"></i> </label></div>
                <div className="content">
                  <p className="sender-name">Bruno</p>
                  <p className="message_text">Dear Employee, As per the regulations all employees are required to complete</p>
                </div>
                <div className="details">
                  <i className="mdi mdi-star-outline"></i>
                </div>
              </div>
            </div>
            <div className="mail-view d-none d-md-block col-xl-7 bg-dark">
              <div className="row">
                <div className="col-md-12 mb-4 mt-4">
                  <div className="btn-toolbar">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary"><i className="mdi mdi-share-alt text-primary mr-1"></i> Reply</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><i className="mdi mdi-share-alt text-primary mr-1"></i>Reply All</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><i className="mdi mdi-share text-primary mr-1"></i>Forward</button>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary"><i className="mdi mdi-attachment text-primary mr-1"></i>Attach</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><i className="mdi mdi-delete text-primary mr-1"></i>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-body">
                <div className="sender-details">
                  <img className="img-sm rounded-circle mr-3" src={require("../../assets/images/faces/face11.jpg")} alt="user"/>
                  <div className="details">
                    <p className="msg-subject">
                      Weekly Update - Week 19 (May 8, 2017 - May 14, 2017)
                    </p>
                    <p className="sender-email">
                      Sarah Graves
                      <a href="!#" onClick={evt =>evt.preventDefault()}>itsmesarah268@gmail.com</a>
                      &nbsp;<i className="mdi mdi-account-multiple-plus"></i>
                    </p>
                  </div>
                </div>
                <div className="message-content">
                  <p>Hi Emily,</p>
                  <p>This week has been a great week and the team is right on schedule with the set deadline. The team has made great progress and achievements this week. At the current rate we will be able to deliver the product right on time and meet the quality that is expected of us. Attached are the seminar report held this week by our team and the final product design that needs your approval at the earliest.</p>
                  <p>For the coming week the highest priority is given to the development for <a href="https://www.bootstrapdash.com/" target="_blank" rel="noopener noreferrer">https://www.bootstrapdash.com/</a> once the design is approved and necessary improvements are made.</p>
                  <p><br/><br/>Regards,<br/>Sarah Graves</p>
                </div>
                <div className="attachments-sections">
                  <ul>
                    <li>
                      <div className="thumb"><i className="mdi mdi-file-pdf"></i></div>
                      <div className="details">
                        <p className="file-name">Seminar Reports.pdf</p>
                        <div className="buttons">
                          <p className="file-size">678Kb</p>
                          <a href="!#" onClick={evt =>evt.preventDefault()} className="view">View</a>
                          <a href="!#" onClick={evt =>evt.preventDefault()} className="download">Download</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="thumb"><i className="mdi mdi-file-image"></i></div>
                      <div className="details">
                        <p className="file-name">Product Design.jpg</p>
                        <div className="buttons">
                          <p className="file-size">1.96Mb</p>
                          <a href="!#" onClick={evt =>evt.preventDefault()} className="view">View</a>
                          <a href="!#" onClick={evt =>evt.preventDefault()} className="download">Download</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Email
