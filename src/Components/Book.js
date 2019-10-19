import React from 'react'

class Book extends React.Component{
    render()
    {
        return <div className='bookshelf-books'>
            <ol className='books-grid'>
               {this.props.books.map((book)=>(
                     <li key={book.id}>
                     <div className="book">
                       <div className="book-top">
                         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                         <div className="book-shelf-changer">
                           <select value={book.shelf} onChange={e=>(this.props.onChangeb(book,e.target.value))}>
                             <option value="move" disabled>Move to...</option>
                             <option value="currentlyReading">Currently Reading</option>
                             <option value="wantToRead">Want to Read</option>
                             <option value="read">Read</option>
                             <option value="none">None</option>
                           </select>
                         </div>
                       </div>
                       <div className="book-title">{book.title}</div>
                       <div className="book-authors">{book.authors?book.authors.join(' ,'):'unknown author'}</div>
                     </div>
                   </li>
               ))}
            </ol>
        </div>
    }
}
export default Book