import React from 'react'
import Book from './Book'

class AddButton extends React.Component{
    render(){
        return <div className='bookshelf'>
            <h1 className='bookshelf-title'>{this.props.value}</h1>
            <Book books={this.props.booksfilter} onChangeb={this.props.onChange}/>
        </div>
 
    }
}
export default AddButton