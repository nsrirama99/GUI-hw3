import React, { Component } from 'react';
import { Product } from '../models';
import { ReviewList } from './reviewList';
import { ReviewForm } from './reviewForm';
import { Navbar, Jumbotron } from 'react-bootstrap';
//TODO: Put things in a JumboTron React Component
export class ProductDetails extends Component {
    state = {
        product: new Product(1, "Jif Peanut Butter, 40 ounce", `7g of Protein per serving
            with no preservatives, artificial flavors or colors.`, 7.99,
            "http://johnlawrimore.com/smu/101.png", []) 
    }

    render() {
        return (
            <>
            <Navbar></Navbar>
            <nav className="navbar navbar-inverse navbar-static-top">
                <ul className="nav navbar-nav navbar-right">
                    <ul className="breadcrumb list-inline">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Jif Peanut Butter</a></li>
                    </ul>
                </ul>
            </nav>

            <img src={this.state.product.imageURL} alt="RIP the pic my dude"/>
            <h1>{this.state.product.name}</h1>
            <div className="badge badge-info">{this.state.product.price}</div>
            <p>{this.state.product.descr}</p>

            <ReviewList reviews={this.state.product.reviews}/>
            
            </>
        );
    }
}