import React from 'react';

export default class MyCoolInput extends React.Component {

  onChange(event) {
    this.props.handleChange(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange.bind(this)} placeholder="Search..." />
      </div>
    )
  }
}
MyCoolInput.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
};