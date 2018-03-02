/*
  Checkbox

  react checkbox, created with icons
  ----------------------------------
  TODO: refactor iconStyles to be sizable from props
  TODO: expose icons as props, for cutomization
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/lib/md';
import styles from './styles';

class CheckBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { checked } = this.props;
    this.setState({
      checked
    })
  }

  handleClick(e) {
    const checked = !this.state.checked;
    const { name, type } = this.props;
    this.setState({
      checked
    }, () => {
      // expected .target{} cheat
      this.props.onChange({target:{name, type, checked}})
    })
  }

  render () {
    const iconStyles = {color: '#ccc', size: '20px' };
    return (
      <div style={styles.container} onClick={this.handleClick}>
        <div style={styles.icon}>
          {this.state.checked ?
            <MdCheckBox {...iconStyles} /> :
            <MdCheckBoxOutlineBlank {...iconStyles} />
          }
        </div>
        <div style={styles.text}>
          {this.props.labelText}
        </div>
      </div>
    );
  }
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  checked: PropTypes.bool,
  labeltext: PropTypes.string,
  onChange: PropTypes.func,
}

CheckBox.defaultProps = {
  type: 'checkbox', // internal
  checked: false,
  labeltext: '',
  onChange: () => {},
}


export default CheckBox;
