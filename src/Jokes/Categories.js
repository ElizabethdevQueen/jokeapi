import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default class Categories extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        //fetch joke categories
        this.fetchCategoriesFromJokesAPI()
    }

    fetchCategoriesFromJokesAPI = () => {
        const url = 'https://sv443.net/jokeapi/v2/categories'

        fetch(url).then(response => response.json()).then(result => {
            this.setState({
                categories: result.categories
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const { categories } = this.state
        return (
            <div>
                <h3 className="heading">
                    <i class="fa fa-smile-o fa-3x" aria-hidden="true"></i>
                    JOKE CATEGORIES</h3>
                {categories.map((category, idx) =>
                    <Link to={"/jokes/" + category} key={idx} >
                        <p> {idx + 1}. {category} </p>
                    </Link>
                )}
            </div>
        )

    }
}