var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {id, text, completed} = this.props;

    return (
      //<div>
        <div onClick={(e) => {
            e.preventDefault();
            this.props.onToggle(id);
          }}>
          <input type="checkbox" checked={completed}/>
          {text}
        </div>
      //</div>
    );
  }
});

module.exports = Todo;
