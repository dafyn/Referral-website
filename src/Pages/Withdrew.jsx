import React, { useState, useEffect } from 'react';
import { Card, Table, Radio, Select } from 'antd';
import { Button } from 'react-bootstrap';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Withdrew = () => {
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [balance, setBalance] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState('withdrew');
    const [selectedNetwork, setSelectedNetwork] = useState('mtn');

    const handleRadioselect = (e) => {
        setSelectedRadio(e.target.value);
    };

    const handleNetwork = (value) => {
        setSelectedNetwork(value);
    };

    // useEffect(() => {
    //     if (clicked) {
    //       setLoading(true);
    //       fetch('https://api.example.com/balance') 
    //         .then(response => response.json())
    //         .then(data => {
    //           setBalance(data.balance); 
    //           setLoading(false);
    //         })
    //         .catch(error => {
    //           console.error("Error fetching balance:", error);
    //           setLoading(false);
    //         });
    //     }
    //   }, [clicked]);
    
    // const handleCardClick = () => {
    // setClicked(true);
    // };

    const handleCardClick = () => {
    setClicked(true);
    setBalance(123456); 
    setTimeout(() => {
        setBalance(null);
        setClicked(false);
      }, 5000);
    };

    const columns = [
        {
            title: 'No.',
            dataIndex: 'no',
            key: 'no',
            render: (text, record, index ) => index+1 ,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Remark',
            dataIndex: 'remarks',
            key: 'remarks'
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount'
        }
    ]

    const staticdata = [
        {
            date: '12/09/2020',
            remarks: 'Withdrew',
            amount: 'SHS 200,000'
        },
        {
            date: '02/06/2021',
            remarks: 'Deposit',
            amount: 'SHS 45,000'
        },
        {
            date: '10/07/2000',
            remarks: 'Withdrew',
            amount: 'SHS 600,000'
        },
        {
            date: '07/09/2024',
            remarks: 'Deposit',
            amount: 'SHS 1,000,000'
        },
        {
            date: '12/09/2020',
            remarks: 'Withdrew',
            amount: 'SHS 200,000'
        },
    ]
    return (
        <div className='withdrewcontianer' style={{marginLeft: '60px', marginTop: '30px'}}>
            <div className='balance' style={{justifyContent: 'center'}}>
                <Card
                    title= "Mr. Joe Smith"
                    bordered= {false}
                    size='small'
                    style={{width: '300px', color: 'blue', textAlign: 'center', cursor: 'pointer'}}
                    onClick={handleCardClick}
                >
                {clicked ? (
                <p>{balance}</p>
                ) : (
                <p>Tap to view balance</p>
                )}
                </Card>
            </div>
            <div className='withdrew' style={{marginTop: '40px'}}>
                <h3>Withdrew/ Deposit money to mobile money</h3>
                <Radio.Group onChange={handleRadioselect} defaultValue='withdrew'>
                    <Radio.Button value="withdrew">Withdrew</Radio.Button>
                    <Radio.Button value="deposit">Deposit</Radio.Button>
                </Radio.Group>

                { selectedRadio === 'withdrew' && (
                    <div className='withdrewcontent'>
                        <p>Select the service provider :-</p>
                        <Select defaultValue='mtn' onChange={handleNetwork} style={{ width: '100px'}} >
                            <Select.Option value="mtn">MTN</Select.Option>
                            <Select.Option value="airtel">AIRTEL</Select.Option>
                        </Select>
                        <div className='inputbutton'>
                            <span>
                                <PhoneInput
                                    className='phoneInput'
                                    placeholder='Enter number'
                                    value='phoneNumber'
                                    defaultCountry='ug'
                                    onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
                                />
                                <Button className='enterbutton' >
                                    Enter →
                                </Button>
                            </span>
                        </div>
                    </div>
                )}
                { selectedRadio === 'deposit' && (
                    <div className='depositcontent'>
                        <p>Select the service provider :-</p>
                        <Select defaultValue='mtn' onChange={handleNetwork} style={{ width: '100px'}}>
                            <Select.Option value= 'mtn'>MTN</Select.Option>
                            <Select.Option value = 'airtel'>AIRTEL</Select.Option>
                        </Select>
                        <div className='inputbutton'>
                            <span>
                                <PhoneInput
                                    className='phoneInput'
                                    placeholder='Enter number'
                                    value='phoneNumber'
                                    defaultCountry='ug'
                                    onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
                                />
                                <Button className='enterbutton' >
                                    Enter →
                                </Button>
                            </span>
                        </div>
                    </div>
                )}    
            </div>

            <div className='ministatement' style={{marginTop: '40px'}}>
                <h3>Mini Statement</h3>
                <Table
                    columns={columns}
                    dataSource={staticdata}
                    size='small'
                    style={{ margin: '20px 0'}}
                />
            </div>
            
        </div>
    );
}

export default Withdrew ;