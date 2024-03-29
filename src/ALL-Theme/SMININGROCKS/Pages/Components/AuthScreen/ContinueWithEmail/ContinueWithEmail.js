import React, { useState } from 'react';
import Header from '../../home/Header/Header';
import './ContinueWithEmail.css';
import { Button, CircularProgress, TextField } from '@mui/material';
import Footer from '../../home/Footer/Footer';
import { CommonAPI } from '../../../../Utils/API/CommonAPI';
import { useNavigate } from 'react-router-dom';

export default function ContinueWithEmail() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    // const validateEmail = (email) => {
    //     const regex = /^[a-zA-Z][\w@$&#]*@[a-zA-Z]+\.[a-zA-Z]+$/;
    //     return regex.test(email);
    // };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z][\w@$&#]*@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
        return regex.test(email);
    };

    const handleEmailChange = (event) => {
        const { value } = event.target;
        const trimmedValue = value.trim();
        setEmail(trimmedValue);
        if (!trimmedValue) {
            setEmailError('Email is required.');
        } else if (!validateEmail(trimmedValue)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = async () => {
        const trimmedEmail = email.trim();
        if (!trimmedEmail) {
            setEmailError('Email is required.');
            return;
        }
        if (!validateEmail(trimmedEmail)) {
            setEmailError('Please enter a valid email.');
            return;
        }
        try {
            setIsLoading(true);
            const storeInit = JSON.parse(localStorage.getItem('storeInit'));
            const { FrontEnd_RegNo } = storeInit;

            const combinedValue = JSON.stringify({
                userid: `${trimmedEmail}`, FrontEnd_RegNo: `${FrontEnd_RegNo}`
            });
            const encodedCombinedValue = btoa(combinedValue);
            const body = {
                "con": "{\"id\":\"\",\"mode\":\"WEBVALDNEMAIL\"}",
                "f": "emilValid (handleEmail)",
                p: encodedCombinedValue
            };
            const response = await CommonAPI(body);
            console.log('ressssssss', response);
            if (response.Data.rd[0].stat === 1) {
                navigation('/LoginWithEmail', { state: { email: trimmedEmail } });
            } else {
                navigation('/register', { state: { email: trimmedEmail } });
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='paddingTopMobileSet' style={{ backgroundColor: 'rgba(66, 66, 66, 0.05)' }}>
            {isLoading && (
                <div className="loader-overlay">
                    <CircularProgress className='loadingBarManage' />
                </div>
            )}
            <div>
                <div className='smling-forgot-main'>
                    <p style={{
                        textAlign: 'center',
                        paddingBlock: '60px',
                        marginTop: '15px',
                        fontSize: '25px',
                        // color: '#7d7f85',
                        fontFamily: 'Harmonia'
                    }}
                        className='AuthScreenMainTitle'
                    >Continue With Email</p>
                    <p style={{
                        textAlign: 'center',
                        marginTop: '-70px',
                        fontSize: '15px',
                        // color: '#7d7f85',
                        fontFamily: 'Harmonia'
                    }}

                        className='AuthScreenSubTitle'
                    >We'll check if you have an account, and help create one if you don't.</p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField
                            autoFocus
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            className={`labGrowForgot ${isClicked ? 'clicked' : ''}`}
                            // InputProps={{ style: { height: '50px' } }} 
                            style={{ margin: '15px' }}
                            value={email}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    handleSubmit();
                                }
                            }}
                            onChange={handleEmailChange}
                            onFocus={() => setIsClicked(true)}
                            onBlur={() => setIsClicked(false)}
                            error={!!emailError}
                            helperText={emailError}
                        />

                        <button type='submit' className='submitBtnForgot' onClick={handleSubmit}>SUBMIT</button>
                        <Button style={{ marginTop: '10px', color: '#424242', fontFamily: 'Harmonia' }} onClick={() => navigation('/LoginOption')}>CANCEL</Button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
