import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default (Component) => {
  class Toggle extends PureComponent {
    state = {
      toggle: this.props.toggle,
    };

    toggleHandler = () => this.setState(({ toggle }) => ({ toggle: !toggle }));

    render() {
      const { toggle } = this.state;

      return (
        <Component
          toggleHandler={this.toggleHandler}
          {...this.props}
          toggle={toggle}
        />
      );
    }
  }

  Toggle.propTypes = {
    toggle: PropTypes.bool, // visible flag
  };

  Toggle.defaultProps = {
    toggle: false,
  };

  return Toggle;
};
