import React, {Component} from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'

class IndecisionApp extends Component {
  state = {
    options: []
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      
      if (options) {
        this.setState(() => ({options}))
      }
  
    } catch (e) {
      // Do nothing at all
    }    
  }
  componentDidUpdate(prevProps, prevState) {

    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    // To test, put it in Chrome console
    // ReactDOM.render(React.createElement('p'), document.getElementById('app'));
  }

  handleDeleteOptions = () => {
    this.setState(() => ( { options: [] } ))
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    } 

    this.setState((prevState) => ( { options: prevState.options.concat(option) } ))
  }
  render() {
    const subtitle = 'Put your live in the hands of a computer'

    return (
      <div>
        <Header  subtitle={subtitle} />
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

export default IndecisionApp