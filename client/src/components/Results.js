import React from "react";
import "../assets/results.css"
class Results extends React.Component {
    state = {
        books: []
    }
    componentWillReceiveProps() {
        this.setState({ 
            books: this.props.books
        })
        console.log(this.state)
    }
    render() {
        return (
            <div className="results">
                <h1>Search Results</h1>
                
                    {this.state.books.map(book => (
                        <div className="result-box">
                            <hr />
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="title">{book.volumeInfo.title}</p><br />
                                    <p className="authors">Written By: {book.volumeInfo.authors.map(author => (<span>{author} </span>))}</p>
                                </div>
                                <div className="col-md-4">
                                    <button className="save btn">Save</button>
                                    <button className="view btn">View</button>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-md-2">
                            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book cover" />
                            </div>
                            <div className="col-md-10">
                                <p className="description">{book.volumeInfo.description}</p>
                            </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            
        )
    }
};

export default Results;