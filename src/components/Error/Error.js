import React from 'react';
import styles from './Error.module.css';
import utils from '../../utils/index';

const Error = ({ error }) => {
    console.error(`In component Error has error: ${error}`);
    const { GLOBAL_ERROR_MESSAGE } = utils;
    return (
        <div className={ styles.error }>
            { GLOBAL_ERROR_MESSAGE }
        </div>
    );
}
export default Error;