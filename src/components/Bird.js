import React from 'react';
import { connect } from 'react-redux';

const Bird = ({ bird }) => {
  return (
    <div
      style={{
        backgroundColor: 'yellow',
        width: 40,
        height: 40,
        position: 'absolute',
        top: bird.y,
        left: 120,
        transform: `rotate(${bird.deg}deg)`,
        transition: 'transform 100ms, top 300ms'
      }}
    ></div>
  );
};

const mapStateToProps = (state) => ({
  bird: state.bird
});
export default connect(mapStateToProps)(Bird);
