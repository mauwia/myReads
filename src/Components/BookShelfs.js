import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'


class BookShelfs extends React.Component{
    render(){
    let bookf=this.props.books
        return <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf booksfilter={bookf.filter(book=>book.shelf==='currentlyReading')} value='Currently Reading' onChange={this.props.onChange} />
        <BookShelf booksfilter={bookf.filter(book=>book.shelf==='wantToRead')} value='Want To Read' onChange={this.props.onChange} />
        <BookShelf booksfilter={bookf.filter(book=>book.shelf==='read')} value='Read' onChange={this.props.onChange} />
        <div className="open-search">
        <Link to='search'>Add a book</Link>
      </div>
        </div>
    }
}

export default BookShelfs