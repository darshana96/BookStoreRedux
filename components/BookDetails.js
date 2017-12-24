import React,{ Component } from 'react';
import userimage from '../img/user2-160x160.jpg';
import book2 from '../img/book2.jpg'
import '../css/styles.css';
class BookDetails extends Component{
    constructor(props,context){
        super(props,context)

    }

    render() {
        return(

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
                            View Book
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li><a href="#"><i className="active"></i>Books</a></li>
                            <li className="active">View Book</li>
                        </ol>
                    </section>

                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">

                                    <div className="box-info no-padding text-center">
                                        <div>
                                        <img src={book2} className="image_1" />
                                        </div>
                                        <div className="left_div">
                                            <div> <p className="description">Title:</p><span className="span">Jurassic Park</span></div>

                                            <div> <p className="description">Author Name:</p><span className="span">Michael crichton</span></div>
                                            <div><p className="description">Description:</p></div>
                                        </div>
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


export default BookDetails;