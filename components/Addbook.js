import React, {Component, PropTypes} from 'react';
import userimage from '../img/user2-160x160.jpg';
import {browserHistory} from 'react-router'


class Addbook extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            book_name: '',
            author_name: '',
            book_description: '',
            pages: '',
            id: '',
            addButtonValue: (props.update == "true" ? "Update" : "Add")

        };


        this.addnewbooks = this.addnewbooks.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }

    componentWillMount() {
        if (this.props.update == "true") {
            let url_string = window.location.href;
            let bookDetails = JSON.parse(url_string.split('?')[1]);

            this.setState({
                book_name: bookDetails.bookname,
                author_name: bookDetails.bookauthor,
                book_description: bookDetails.bookdesc,
                pages: bookDetails.bookpage,
                id: bookDetails.id
            });
        }

    }


    updateBook() {


        let book_obj = {
            bookname: this.state.book_name,
            bookauthor: this.state.author_name,
            bookdesc: this.state.book_description,
            bookpage: this.state.pages,
            id: this.state.id
        };

        this.props.updateBook(book_obj);
        window.location.assign("#/");
        location.reload();


    }

    addnewbooks() {
        let book_obj = {
            bookname: this.state.book_name,
            bookauthor: this.state.author_name,
            bookdesc: this.state.book_description,
            bookpage: this.state.pages
        }
        if (book_obj.bookname == "" || book_obj.bookauthor == "" || book_obj.bookdesc == "" || book_obj.bookpage == "") {
            alert("Please enter all the fields");
        }
        else {
            this.props.addnewbook(book_obj);
            window.location.assign("#/");
            location.reload();
        }
    }

    render() {
        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <div className="wrapper">

                    <header className="main-header">
                        <a href="" className="logo">
                            <span className="logo-lg"><b>Book</b>Store</span>
                        </a>
                        <nav className="navbar navbar-static-top">

                            <div className="navbar-custom-menu">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown user user-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <img src={userimage} className="user-image" alt="User Image"/>
                                            <span className="hidden-xs">Vincent Levi</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="user-header">
                                                <img src={userimage} className="img-circle" alt="User Image"/>

                                                <p>
                                                    Vincent Levi
                                                </p>
                                            </li>
                                            <li className="user-body">
                                                <div className="row">
                                                    <div className="col-xs-4 text-center">
                                                        <a href="#">Followers</a>
                                                    </div>
                                                    <div className="col-xs-4 text-center">
                                                        <a href="#">Sales</a>
                                                    </div>
                                                    <div className="col-xs-4 text-center">
                                                        <a href="#">Friends</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-footer">
                                                <div className="pull-left">
                                                    <a href="#" className="btn btn-default btn-flat">Profile</a>
                                                </div>
                                                <div className="pull-right">
                                                    <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <aside className="main-sidebar">
                        <section className="sidebar">
                            <div className="user-panel">
                                <div className="pull-left image">
                                    <img src={userimage} className="img-circle" alt="User Image"/>
                                </div>
                                <div className="pull-left info">
                                    <p>Vincent Levi</p>
                                </div>
                            </div>
                            <ul className="sidebar-menu" data-widget="tree">
                                <li className="header">MAIN NAVIGATION</li>
                                <li className="active treeview">
                                    <a href="#">
                                        <i className="fa fa-book"></i> <span>Books</span>
                                        <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
            </span>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </aside>

                    <div className="content-wrapper">
                        <section className="content-header">
                            <h1>
                                Add Book
                            </h1>
                            <ol className="breadcrumb">
                                <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                <li><a href="#"><i className="active"></i> Books</a></li>
                                <li className="active">Add Book</li>
                            </ol>
                        </section>

                        <section className="content">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="box">

                                        <div className="box-info no-padding text-center">

                                            <form className="form-horizontal">
                                                <div className="box-body">
                                                    <div className="form-group">
                                                        <label for="inputEmail3"
                                                               className="col-sm-2 control-label">Book Name</label>

                                                        <div className="col-sm-6">
                                                            <input type="text"
                                                                   className="form-control"
                                                                   id="inputEmail3"
                                                                   placeholder="Book Name"
                                                                   value={this.state.book_name}
                                                                   onChange={event => this.setState({book_name: event.target.value})}

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputPassword3" className="col-sm-2 control-label">Author
                                                            Name</label>

                                                        <div className="col-sm-6">
                                                            <input type="text"
                                                                   className="form-control"
                                                                   id="inputPassword3"
                                                                   placeholder="Author Name"
                                                                   value={this.state.author_name}
                                                                   onChange={event => this.setState({author_name: event.target.value})}

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputPassword3" className="col-sm-2 control-label">Description</label>

                                                        <div className="col-sm-6">
                                                            <input type="text"
                                                                   className="form-control"
                                                                   id="inputPassword3"
                                                                   placeholder="Description"
                                                                   value={this.state.book_description}
                                                                   onChange={event => this.setState({book_description: event.target.value})}

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputPassword3" className="col-sm-2 control-label">Pages</label>

                                                        <div className="col-sm-6">
                                                            <input type="text"
                                                                   className="form-control"
                                                                   id="inputPassword3"
                                                                   placeholder="Pages"
                                                                   value={this.state.pages}
                                                                   onChange={event => this.setState({pages: event.target.value})}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box-footer">
                                                    <button type="button" className="btn btn-default"><a href="#/">Cancel</a>
                                                    </button>
                                                    <button type="button"
                                                            onClick={() => ( this.props.update == "true" ? this.updateBook() : this.addnewbooks()) }
                                                            className="btn btn-info t">
                                                        {this.state.addButtonValue}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <footer className="main-footer">
                        <div className="pull-right hidden-xs">
                            <b>Version</b> 1.0.0
                        </div>
                        <strong>Copyright &copy; 2017 <a href="#">NeoSoft</a>.</strong> All rights
                        reserved.
                    </footer>
                </div>
            </div>

        )
    }
}

Addbook.contextTypes = {
    router: PropTypes.object.isRequired
};


export default Addbook;