import React from 'react'
import './App.css'
import BookShelfs from './BookShelfs'
import {Route} from 'react-router-dom' 
import SearchBar from './SearchBar'
import * as BooksAPI from './BookAPI'


class App extends React.Component{
    state={query:'',books:[]}
    handleSearch=(value)=>{
        this.setState({query:value})
    }
    componentDidMount(){
        this.getAll()
    }
    getAll=()=>{
        BooksAPI.getAll().then(books=>this.setState({books}))
    }
    updateData=(book,shelf)=>{
        BooksAPI.update(book,shelf).then(()=>this.getAll())
    }
    
    render(){
        return<div className='app'>
            <Route exact path='/' render={()=>(
                <div><BookShelfs books={this.state.books} onChange={this.updateData}/>
                </div>
            )}/>
            <Route path='/search' render={()=>(
                <div>
                <SearchBar query={this.state.query} books={this.state.books} onHandleSearch={this.handleSearch} onChange={this.updateData}/>
                </div>
            )}/>
        </div>
    }
}
export default App