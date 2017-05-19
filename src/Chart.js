import React from 'react';
import PropTypes from 'prop-types';

import Vega from 'react-vega';


class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data, spec: this.props.spec };
  }

  render() {
    return (
      <div>
        <Vega spec={this.state.spec} data={this.state.data} />
      </div>
    );
  }
}

Chart.propTypes = {
  spec: PropTypes.any.isRequired,
  data: PropTypes.any.isRequired,
};

// Chart.defaultProps = {
//   spec: spec1,
//   data: [],
// };


export default Chart;
