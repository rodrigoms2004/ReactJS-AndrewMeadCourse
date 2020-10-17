// $ live-server public
// babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

class Counter extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      count : 0 //props.count
    }

    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)  
  }
  componentDidMount() {
    const stringCount = localStorage.getItem('count')
    const count = parseInt(stringCount, 10)

    if (!isNaN(count)) {
      this.setState(() => ({ count }))
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }
  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })

    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // })
    // this.setState({count: 0}) // avoid to use this, deprecated in future
    // this.setState({
    //   count: this.state.count + 1
    // })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

// Counter.defaultProps = {
//   count : 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'))


// let count = 0;
// const addOne = () => {
//   count++
//   // console.log('addOne', count)
//   renderCounterApp()
// };

// const minusOne = () => {
//   count--
//   renderCounterApp()
//   // console.log('minusOne')
// };

// const reset = () => {
//   count = 0
//   renderCounterApp()
//   // console.log('reset')
// };

// // console.log(templateTwo)
// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();