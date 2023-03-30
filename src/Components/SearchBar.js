import React  from "react";

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = { term: "" };
    this.inputRef = React.createRef() //To focus input on Reload
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term) 
   };

  componentDidMount(){
    this.inputRef.current.focus()
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Image</label>
            <input
              type="text"
              ref={this.inputRef} // To focus on input on reload
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;