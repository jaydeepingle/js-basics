class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    render() {
      return <div ref={this.myRef} />;
    }
  }



class UserForm extends Component {
    handleSubmit = () => {
      console.log("Input Value is: ", this.input.value)
    }
    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            ref={(input) => this.input = input} /> // Access DOM input in handle submit
          <button type='submit'>Submit</button>
        </form>
      )
    }
  }