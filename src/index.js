/*
  Checkbox

  react checkbox, created with emoji icons

  Some checkmark options ( any emoticon)
  ✓ ✔ ︎ ✅ √ ☑️ 🏁 ✓ ✔︎ ✔️ ✓ 𐄂
  🍄 🖖🏻 🍒 🚀 🔥 ⏺ 👎🏻 👍🏻
  ----------------------------------
  TODO: refactor iconStyles to be sizable from props
  TODO: expose icons as props, for cutomization
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

class CheckBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { checked } = this.props;
    this.setState({
      checked
    });
  }

  handleClick() {
    const checked = !this.state.checked;
    const { name, type } = this.props;
    this.setState({
      checked
    }, () => {
      // mock expected input target{}
      this.props.onChange({target:{name, type, checked}});
    });
  }
  renderIcon() {
    const { unCheckedIcon, checkedIcon } = this.props;
    const icon = this.state.checked ? checkedIcon : unCheckedIcon;
    return (
      <div style={styles.icon} className="xs-checkbox-icon">
        {icon}
      </div>
    );
  }

  renderText() {
    const { text, checkedText, unCheckedText } = this.props;
    const { checked } = this.state;
    let labelText = '';
    if (text.length === 0) {
      labelText = checked ? checkedText : unCheckedText;
    } else {
      labelText = text;
    }

    return (
      <div style={styles.text} className="xs-checkbox-label">
        {labelText}
      </div>
    );
  }

  render () {
    return (
      <div style={styles.container} onClick={this.handleClick} className="xs-checkbox">
        { this.renderIcon() }
        { this.renderText() }
      </div>
    );
  }
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  checked: PropTypes.bool,
  text: PropTypes.string,
  checkedText: PropTypes.string,
  unCheckedText: PropTypes.string,
  onChange: PropTypes.func,
  checkedIcon: PropTypes.string,
  unCheckedIcon: PropTypes.string,
};

CheckBox.defaultProps = {
  type: 'checkbox', // internal
  checked: false,
  text: '',
  checkedIcon: '✔' ,
  unCheckedIcon: ' ' ,
  checkedText: PropTypes.string,
  unCheckedText: PropTypes.string,
  onChange: () => {},
};

export default CheckBox;
