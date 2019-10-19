import React from 'react'
import {Link} from 'react-router-dom'
import * as BookAPI from './BookAPI'
import Book from './Book'

class SearchBar extends React.Component{
    state={searchBook:[]}
    
    update(books){
        let allBook=this.props.books
        for (let book of books){
          book.shelf='none'
        }
        for(let book of books){
          for(let b of allBook){
            if(b.id===book.id){
              book.shelf=b.shelf
            }
          }
        }
        return books
    }
    searcher(){
      let query=this.props.query
      if(query){
        BookAPI.search(query).then(books=>{
            if(books.length){
              books=books.filter(book=>(book.imageLinks))
              books=this.update(books)
              this.setState({searchBook:books})
            // console.log(this.state.searchBook)
              
            }
        })
      }
    }
    render(){
      this.searcher()
        return <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.props.query} onChange={e=>(this.props.onHandleSearch(e.target.value))}/>
          </div>
        </div>
        <div className='search-books-results'>
            <Book onChangeb={this.props.onChange} books={this.state.searchBook}/>
          </div>
        </div>
    }
}







export default SearchBar