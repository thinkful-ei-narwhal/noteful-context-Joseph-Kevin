import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import FolderList from './components/FolderList';
import ExpandedNote from './components/ExpandedNote';
import Header from './components/constants/Header';
import Sidebar from './components/constants/Sidebar';
import StateContext from './components/StateContext';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "folders": [],
      "notes": []
    }
  }

  handleDelete = (noteId) => {
    fetch(`http://localhost:9090/notes/${noteId}/`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })

    let newNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState({
      notes: newNotes
    })
  }

  componentDidMount() {
    fetch(`http://localhost:9090/notes/`)
      .then(res => res.json())
      .then(data => this.setState({notes: data}))

      fetch(`http://localhost:9090/folders/`)
      .then(res => res.json())
      .then(data => this.setState({folders: data}))
  }

  render() {
    return (
      <StateContext.Provider value={{
        state: this.state,
        notes: this.state.notes,
        folders: this.state.folders,
        handleDelete: this.handleDelete
      }}>
        <div className="App">
          <Header />
          <Sidebar state={this.state}/>
          <Switch>
            <Route 
              exact path='/' 
              render={(props) => <Main {...props} />}
            />
            <Route 
              exact path='/folders/:id'
              render={(props) => <FolderList {...props} />}
            />
            <Route 
              exact path='/note/:id' 
              render={(props) => <ExpandedNote {...props} />}
            />
            <Route 
            exact path='/folders/note/:id' 
            render={(props) => <ExpandedNote {...props} />}
            />
          </Switch>
        </div>
      </StateContext.Provider>
    );
  }
}