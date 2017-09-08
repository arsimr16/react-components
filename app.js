var GroceryList = (props) => (
  <ul>
    {props.items.map((item, i) => 
      <GroceryListItem key={i} item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		hover: false
  	};
  }

  onListItemHover() {
  	this.setState({
  		hover: !this.state.hover
  	});
  }

  render() {
    var style = {
    	fontWeight: this.state.hover ? 'bold' : 'normal'
    };

  	return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
  	);
  }
}

ReactDOM.render(<GroceryList items={['cucumber', 'kale', 'ice cream']}/>, document.getElementById('app'));