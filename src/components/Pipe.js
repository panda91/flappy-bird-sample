import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { APP_HEIGHT } from '../config/constants';

const Pipe = ({ pipeState }) => {
  const { pipes } = pipeState;

  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      {pipes.length
        ? pipes.map((pipe) => (
            <Fragment>
              <div
                style={{
                  backgroundColor: 'green',
                  width: 50,
                  height: pipe.topHeight,
                  position: 'absolute',
                  top: 0,
                  left: pipe.x,
                  transition: 'left 300ms'
                }}
              ></div>
              <div
                style={{
                  backgroundColor: 'green',
                  width: 50,
                  height: APP_HEIGHT - pipe.topHeight - 100,
                  position: 'absolute',
                  top: pipe.topHeight + 100,
                  left: pipe.x,
                  transition: 'left 300ms'
                }}
              ></div>
            </Fragment>
          ))
        : ''}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pipeState: state.pipe
});

export default connect(mapStateToProps)(Pipe);
