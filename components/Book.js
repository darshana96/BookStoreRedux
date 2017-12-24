import React, {PropTypes} from 'react';
import '../css/bootstrap.min.css';
import userimage from '../img/user2-160x160.jpg';
import '../css/AdminLTE.min.css'
import '../css/font-awesome.min.css'
import '../css/skins/_all-skins.min.css'
//import '../actions/index';
let data=[];

class Book extends React.Component {

    constructor(props) {
        super(props);
        this.deleteBook = this.deleteBook.bind(this);
        this.getAllBook = this.getAllBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.state={
            bookList : []
        };
    }

    componentWillMount() {
        this.getAllBook();
    }

    updateBook(bookDetails){
        window.location.assign("#/update?"+JSON.stringify(bookDetails));

    }


    getAllBook(){
        let currentThis = this;
        this.props.getAllBooks()
            .then(function (res) {
                //debugger;
                data = res.payload.data;
                currentThis.setState({bookList:data});
            }, function (err) {
                console.log("res", err);
            })
    }


    deleteBook(bookId) {

        this.props.deleteBook(bookId);

        let currentThis = this;
        // this.props.getAllBooks();
        setTimeout(function () {
            currentThis.getAllBook();
        }, 1200);
    }


    render() {
        return (
            <div className="hold-transition skin-blue sidebar-mini">
                <div className="wrapper">

                    <header className="main-header">
                        <a href="#" className="logo">
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
                                Books
                            </h1>
                            <ol className="breadcrumb">
                                <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                <li className="active">Books</li>
                            </ol>
                        </section>

                        <section className="content">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="box">
                                        <div className="box-header">
                                            <h3 className="box-title">List</h3>
                                            <a href="#/add" className="btn btn-success pull-right" >Add new</a>
                                        </div>
                                        <div className="box-body table-responsive no-padding">
                                            <div className="pull-right">
                                                <div className="box-tools">
                                                    {/*<div className="input-group input-group-sm"*/}
                                                         {/*style={{width: "150px"}}>*/}
                                                        {/*<input type="text" name="table_search"*/}
                                                               {/*className="form-control pull-right"*/}
                                                               {/*placeholder="Search"/>*/}

                                                        {/*<div className="input-group-btn">*/}
                                                            {/*<button type="submit" className="btn btn-default"><i*/}
                                                                {/*className="fa fa-search"></i></button>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                            <table className="table table-hover">
                                                <tbody>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Author</th>
                                                    <th>Pages</th>
                                                    <th className="pull-right">Actions</th>
                                                </tr>
                                                {
                                                    this.state.bookList.map((data1, key) => {
                                                    return (
                                                        <tr>
                                                            <td>{data1.bookname}</td>
                                                            <td>{data1.bookauthor}</td>
                                                            <td>{data1.bookpage}</td>
                                                            <td className="pull-right">
                                                                <div className="btn-group">
                                                                    <a className="btn btn-default"
                                                                       onClick={()=>this.updateBook(data1)}>
                                                                        <i className="fa fa-pencil"></i>
                                                                    </a>
                                                                    <a href="#/details" className="btn btn-default"><i
                                                                        className="fa fa-eye"></i></a>
                                                                    <button type="button" className="btn btn-default"
                                                                            onClick={() => this.deleteBook(data1.id)}><i
                                                                        className="fa fa-trash"></i></button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })

                                                }

                                                </tbody>
                                            </table>
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

export default Book
