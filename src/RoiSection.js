import React from 'react';
import './RoiSection.css';
import CloseIcon from '@material-ui/icons/Close';
import CopyrightIcon from '@material-ui/icons/Copyright';
import CustomSwitch from './CustomSwitch';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import RoiFooter from './RoiFooter';

function RoiSection() {
    
    return (
        <div className="roi_cal">
            <div className="roi_cal_head">
                <h1>ROI Calculator</h1>
                <CloseIcon />
            </div>
            <div className="cake">
                <CopyrightIcon />
                <p>CAKE</p>
                <CustomSwitch />
                <p>USD</p>
            </div>

            <div>
                <InputComponent placeholder="0.000 USD"/>
            </div>
            <div className="button_price">
                <button>$1000</button>
                <button>$100</button>
                <div className="button_right">
                    <p>~ CAKE 0.000</p>
                </div>
            </div>
            <div className='time_frame'>
            <h2>Timeframe</h2>
            <div className='time_period'>
            <ButtonComponent title="1 Day" selected/>
            <ButtonComponent title="7 Days"/>
            <ButtonComponent title="30 Days"/>
            <ButtonComponent title="1 year"/>
            <ButtonComponent title="5 year"/>
            </div>
            </div>

            <div className='enable'> 
            <h2>Enable Accelerated APY</h2>
            <CustomSwitch />
            </div>

            <div className='select_tier'>
                <h3>Select Tier</h3>
                <div className='time_period'>
                <ButtonComponent title="Tier 1" selected/>
                <ButtonComponent title="Tier 2"/>
                <ButtonComponent title="Tier 3"/>
                <ButtonComponent title="Tier 4"/>
                <ButtonComponent title="Tier 5"/>
                </div>
                <p>ROI at Current Rates</p>
                <InputComponent placeholder="0.00 USD"/>
                <p>~0.000 CAKE + 0.000000 DON</p>
            </div>

            <RoiFooter />
        </div>
    )
}

export default RoiSection
