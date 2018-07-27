import React from 'react';
import reactLogo from '../../assets/images/react.png';
import classes from './logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={reactLogo} alt="react" width={props.width} height={props.height} />
    </div>
);

export default logo;