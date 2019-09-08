import React from 'react';
import { connect } from 'dva';

const Count = ({ dispatch, count }) => {
  return (
    <div>
      <h2>{ count }</h2>
      <button key="add" onClick={() => { dispatch({type: 'count/add'})}}>+</button>
      <button key="minus" onClick={() => { dispatch({type: 'count/minus'})}}>-</button>
    </div>
  );
};

// export default Count;
export default connect(({ count }) => ({
  count,
}))(Count);