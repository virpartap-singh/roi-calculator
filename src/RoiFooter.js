import React from 'react';
import './RoiFooter.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function RoiFooter() {
    return (
        <div>
            <div className='hide_details'>
            <p>Hide Details</p>
            <ExpandLessIcon />
            </div>
            <div className='apy'>
                <h3>APY</h3>
                <h2>9.0 %</h2>
            </div>

            <div className='calculation'>
                <ul>
                    <li>Calculated based on current rates.</li>
                    <li>All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.</li>
                </ul>
            </div>

        </div>
    )
}

export default RoiFooter
