import React, { Component } from 'react';

export class Chats extends Component {
  state = { 
    showChatMenu: false 
  }
  asideToggler = () => {
    this.setState({
      showChatMenu: !this.state.showChatMenu
    })
  };
  render() {
    const menuStatus = this.state.showChatMenu ? 'slide' : 'hide';
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Chats
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={evt =>evt.preventDefault()}>Apps</a></li>
              <li className="breadcrumb-item active" aria-current="page">Chat</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="button" className="btn btn-secondary py-3 mb-4 text-center d-md-none" onClick={this.asideToggler}><i className="mdi mdi-menu mr-0 icon-md"></i></button>
            <div className="card chat-app-wrapper">
              <div className="row mx-0">
                <div className={`col-xl-3 col-md-4 chat-list-wrapper px-0 ${menuStatus}`}>
                  <div className="sidebar-spacer">
                    <div className="input-group chat-search-input">
                      <input type="text" className="form-control" placeholder="Search Inbox" aria-label="Username" />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-magnify"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="chat-list-item-wrapper">
                    <div className="list-item">
                      <div className="profile-image">
                        <div className="dot-indicator sm bg-success"></div>
                        <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile" />
                      </div>
                      <p className="user-name">Peter Moore</p>
                      <p className="chat-time">30min ago</p>
                      <p className="chat-text">Hello everyone, Iam happy to share with you our new company goals..</p>
                    </div>
                    <div className="list-item">
                      <div className="profile-image">
                        <div className="dot-indicator sm bg-primary"></div>
                        <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face5.jpg")} alt="profile" />
                      </div>
                      <p className="user-name">Lillian Woods</p>
                      <p className="chat-time">1 day ago</p>
                      <p className="chat-text">Hello jessica, i will b ein london tomorrow, hope we can meer there</p>
                    </div>
                    <div className="list-item">
                      <div className="profile-image">
                        <div className="dot-indicator sm bg-primary"></div>
                        <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face2.jpg")} alt="profile" />
                      </div>
                      <p className="user-name">Christina Love</p>
                      <p className="chat-time">2 days ago</p>
                      <p className="chat-text">Can you prep the File?</p>
                    </div>
                    <div className="list-item">
                      <div className="profile-image">
                        <div className="dot-indicator sm bg-warning"></div>
                        <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face10.jpg")} alt="profile" />
                      </div>
                      <p className="user-name">Mabelle King</p>
                      <p className="chat-time">3 days ago</p>
                      <p className="chat-text">A new feature has been updated your account.Check it out…</p>
                    </div>
                    <div className="list-item">
                      <div className="profile-image">
                        <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face7.jpg")} alt="profile" />
                      </div>
                      <p className="user-name">Brandon Norton</p>
                      <p className="chat-time">4 days ago</p>
                      <p className="chat-text">Hello, this is an invitation from one of the most interesting teams... </p>
                    </div>
                  </div>
                  <div className="sidebar-spacer">
                    <button className="btn btn-block btn-success py-3" type="button">+ New Chat</button>
                  </div>
                </div>
                <div className="col-xl-6 col-md-8 px-0 d-flex flex-column">
                  <div className="chat-container-wrapper">
                    <div className="chat-bubble incoming-chat">
                      <div className="chat-message">
                        <p>Leo duis ut diam quam nulla porttitor massa id neque. Sed enim ut sem viverra aliquet eget sit. Aenean et tortor at risus viverra.</p>
                        <p>Mi in nulla posuere sollicitudin aliquam ultrices. Mauris a diam maecenas sed enim. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. In cursus turpis massa tincidunt dui. Mattis vulputate enim nulla aliquet porttitor lacus.</p>
                      </div>
                      <div className="sender-details">
                        <img className="sender-avatar img-xs rounded-circle" src={require("../../assets/images/faces/face2.jpg")} alt="profile" />
                        <p className="seen-text">Message seen : 20 min ago</p>
                      </div>
                    </div>
                    <div className="chat-bubble outgoing-chat">
                      <div className="chat-message">
                        <p className="font-weight-bold">Frank Carter</p>
                        <p>Leo duis ut diam quam nulla porttitor massa id neque. Sed enim ut sem</p>
                      </div>
                      <div className="sender-details">
                        <img className="sender-avatar img-xs rounded-circle" src={require("../../assets/images/faces/face3.jpg")} alt="profile" />
                        <p className="seen-text">Message seen : 10 min ago</p>
                      </div>
                    </div>
                    <div className="chat-bubble incoming-chat">
                      <div className="chat-message">
                        <p className="font-weight-bold">Frank Carter</p>
                        <p>Mi in nulla posuere sollicitudin aliquam ultrices. Mauris a diam maecenas sed enim. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris.</p>
                      </div>
                      <div className="sender-details">
                        <img className="sender-avatar img-xs rounded-circle" src={require("../../assets/images/faces/face2.jpg")} alt="profile" />
                        <p className="seen-text">Message seen : 8 min ago</p>
                      </div>
                    </div>
                    <div className="chat-bubble outgoing-chat">
                      <div className="chat-message">
                        <p className="font-weight-bold">Frank Carter</p>
                        <p>Leo duis ut diam quam nulla porttitor massa id neque. Sed enim ut sem</p>
                        <p className="font-weight-medium"><i className="mdi mdi-paperclip mr-2"></i>workfile.pdf</p>
                      </div>
                      <div className="sender-details">
                        <img className="sender-avatar img-xs rounded-circle" src={require("../../assets/images/faces/face3.jpg")} alt="profile" />
                        <p className="seen-text">Message seen : 10 min ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat-text-field mt-auto">
                    <form action="#">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <button type="button" className="input-group-text"><i className="mdi mdi-emoticon-happy-outline icon-sm"></i></button>
                        </div>
                        <input type="text" className="form-control" placeholder="Type a message here" />
                        <div className="input-group-append">
                          <button type="button" className="input-group-text"><i className="mdi mdi-paperclip icon-sm"></i></button>
                        </div>
                        <div className="input-group-append">
                          <button type="submit" className="input-group-text"><i className="mdi mdi-send icon-sm"></i></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-3 d-none d-lg-block px-0 chat-sidebar">
                  <img className="img-fluid w-100" src={require("../../assets/images/chat/profile_image.jpg")} alt="profile" />
                  <div className="px-4">
                    <div className="d-flex pt-4">
                      <div className="wrapper">
                        <h5 className="font-weight-medium mb-0 ellipsis">Cecelia Benson</h5>
                        <p className="mb-0 text-muted ellipsis">General manager</p>
                      </div>
                      <div className="badge badge-success mb-auto ml-auto">Online</div>
                    </div>
                    <div className="pt-3">
                      <div className="d-flex align-items-center py-1">
                        <i className="mdi mdi-whatsapp mr-2"></i>
                        <p className="mb-0 font-weight-medium">225-248-4861</p>
                      </div>
                      <div className="d-flex align-items-center py-1">
                        <i className="mdi mdi-email-outline mr-2"></i>
                        <p className="mb-0 font-weight-medium ellipsis">cecilia.tromp@danny.com</p>
                      </div>
                      <div className="d-flex align-items-center py-1">
                        <i className="mdi mdi-map-marker-outline mr-2"></i>
                        <p className="mb-0 font-weight-medium ellipsis">United Kingdom</p>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="d-flex align-items-center justify-content-center img-sm badge-success">
                        <i className="mdi mdi-cash-multiple icon-sm"></i></div>
                      <div className="wrapper pl-3">
                        <h5 className="font-weight-medium mb-0">$2300</h5>
                        <p className="text-muted mb-0">Deposit</p>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="d-flex align-items-center justify-content-center img-sm badge-danger">
                        <i className="mdi mdi-cash-multiple icon-sm"></i></div>
                      <div className="wrapper pl-3">
                        <h5 className="font-weight-medium mb-0">$2300</h5>
                        <p className="text-muted mb-0">Deposit</p>
                      </div>
                    </div>
                    <div className="list-item border-bottom-0">
                      <div className="d-flex align-items-center justify-content-center img-sm badge-info">
                        <i className="mdi mdi-cash-multiple icon-sm"></i></div>
                      <div className="wrapper pl-3 w-100">
                        <h5 className="font-weight-medium mb-0">$2300</h5>
                        <div className="d-flex">
                          <p className="text-muted mb-0">Deposit</p>
                          <p className="font-weight-bold ml-auto">4.7 GB free</p>
                        </div>
                      </div>
                    </div>
                    <h5 className="font-weight-medium mt-3">Documentation</h5>
                    <div className="list-item">
                      <div className="d-flex align-items-center justify-content-center img-sm badge-primary">
                        <i className="mdi mdi-file-pdf icon-sm"></i></div>
                      <div className="wrapper pl-3 w-100">
                        <h5 className="font-weight-medium mb-0 ellipsis">Company Profile.pdf</h5>
                        <div className="d-flex">
                          <p className="text-muted mb-0">456.54 KB</p>
                          <i className="mdi mdi-arrow-down-bold text-muted ml-auto"></i>
                        </div>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="d-flex align-items-center justify-content-center img-sm badge-primary">
                        <i className="mdi mdi-file-pdf icon-sm"></i></div>
                      <div className="wrapper pl-3 w-100">
                        <h5 className="font-weight-medium mb-0 ellipsis">Proposal.pdf</h5>
                        <div className="d-flex">
                          <p className="text-muted mb-0">1360.54 KB</p>
                          <i className="mdi mdi-arrow-down-bold text-muted ml-auto"></i>
                        </div>
                      </div>
                    </div>
                    <h5 className="font-weight-medium mt-5 mb-4">Share photos</h5>
                    <div className="row">
                      <div className="col-4">
                        <img className="w-100 img-fluid rounded" src={require("../../assets/images/chat/thumb_image1.jpg")} alt="thumb" />
                      </div>
                      <div className="col-4">
                        <img className="w-100 img-fluid rounded" src={require("../../assets/images/chat/thumb_image2.jpg")} alt="thumb" />
                      </div>
                      <div className="col-4">
                        <img className="w-100 img-fluid rounded" src={require("../../assets/images/chat/thumb_image3.jpg")} alt="thumb" />
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-4">
                        <img className="w-100 img-fluid rounded" src={require("../../assets/images/chat/thumb_image4.jpg")} alt="thumb" />
                      </div>
                      <div className="col-4">
                        <img className="w-100 img-fluid rounded" src={require("../../assets/images/chat/thumb_image5.jpg")} alt="thumb" />
                      </div>
                      <div className="col-4">
                        <img className="w-100 img-fluid rounded" src={require("../../assets/images/chat/thumb_image6.jpg")} alt="thumb" />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-4">
                        <img className="w-100 img-fluid rounded" src={require("../../assets/images/chat/thumb_image7.jpg")} alt="thumb" />
                      </div>
                      <div className="col-4">
                        <img className="w-100 img-fluid rounded" src={require("../../assets/images/chat/thumb_image8.jpg")} alt="thumb" />
                      </div>
                      <div className="col-4">
                        <img className="w-100 img-fluid rounded" src={require("../../assets/images/chat/thumb_image4.jpg")} alt="thumb" />
                      </div>
                    </div>
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

export default Chats
