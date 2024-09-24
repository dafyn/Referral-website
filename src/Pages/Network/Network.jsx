import React, { useState } from 'react';
import { Button, Tooltip, Input, message } from 'antd';
import { CopyOutlined, WhatsAppOutlined, XOutlined } from '@ant-design/icons';

const referralLink = "https://example.com";

const Network = () => {
    const [copied, setCopied ] = useState(false);
    const [ currentStep, setCurrentStep ] = useState(2);

    const staticdata = [ 
        {
            step: 1,
            numberOfReferrals: 3,
            referredUsers: [
              { name: 'Alice' },
              { name: 'Bob' },
              { name: 'Charlie' }
            ],
          },
          {
            step: 2,
            numberOfReferrals: 9,
            referredUsers: [
              { name: 'David' },
              { name: 'Eve' },
              { name: 'Alice' },
              { name: 'Bob' },
              { name: 'Charlie' },
              { name: 'Alice' },
              { name: 'Bob' },
              { name: 'Charlie' },
              { name: 'Joe' }
            ],
          },
          {
            step: 3,
            numberOfReferrals: 27,
            referredUsers: [
                { name: 'David' },
              { name: 'Eve' },
              { name: 'Alice' },
              { name: 'Bob' },
              { name: 'Charlie' },
              { name: 'Alice' },
              { name: 'Bob' },
              { name: 'Charlie' },
              { name: 'Joe' },
              { name: 'David' },
              { name: 'Eve' },
              { name: 'Alice' },
              { name: 'Bob' },
              { name: 'Charlie' },
              { name: 'Alice' },
              { name: 'Bob' },
              { name: 'Charlie' },
              { name: 'Joe' }
            ],
        }
    ];

    const dataSource = staticdata.map((stepData) => ({
        key: stepData.step,
        step: stepData.step,
        numberOfReferrals: stepData.numberOfReferrals,
        referredUsers: stepData.referredUsers,
        status: stepData.step <currentStep ? 'Completed' : (stepData.step === currentStep ? 'In Progree' : 'Pending'),
    }));
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink)
          .then(() => {
            setCopied(true);
            message.success('Referral link copied to clipboard!');
          })
          .catch(() => {
            message.error('Failed to copy referral link.');
          });
    };
    
    const shareOnSocialMedia = (platform) => {
        const encodedLink = encodeURIComponent(referralLink);
        const shareText = encodeURIComponent("Check out this digital marketing course!");

        let url= ''
        if (platform === 'twitter') {
            url = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedLink}`;
        } else if (platform === 'whatsapp') {
            url = `https://api.whatsapp.com/send?text=${shareText} ${encodedLink}`;
        }
        window.open(url, '_blank');
    };

    return (
        <div style={{ flex: 1 }}>
          <div className="d-flex justify-content-center my-4">
                <div className="card" style={{ width: '800px' }}>
                    <div className="card-header">
                        <h5 className="card-title">Your Referral Link</h5>
                    </div>
                    <div className="card-body text-center">
                        <Input
                            value={referralLink}
                            readOnly
                            style={{ marginBottom: '10px' }}
                            suffix={
                                <Button
                                    icon={<CopyOutlined />}
                                    onClick={copyToClipboard}
                                    type="text"
                                />
                            }
                        />
                        <div className="d-flex justify-content-center gap-2">
                            <Tooltip title="Copy link">
                                <Button
                                    icon={<CopyOutlined />}
                                    onClick={copyToClipboard}
                                    type="text"
                                />
                            </Tooltip>
                            <Tooltip title="Share on Twitter">
                                <Button
                                    icon={<XOutlined />}
                                    onClick={() => shareOnSocialMedia('twitter')}
                                    type="text"
                                />
                            </Tooltip>
                            <Tooltip title="Share on WhatsApp">
                                <Button
                                    icon={<WhatsAppOutlined />}
                                    onClick={() => shareOnSocialMedia('whatsapp')}
                                    type="text"
                                />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>

          <div style={{ flex: 1, padding: '20px' }}>
                <h2>Referral Steps Overview</h2>
                <div className="table-responsive" style={{padding: '20px'}}>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Step</th>
                                <th>Number of Referrals</th>
                                <th>Person</th>
                                <th>Referred People</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataSource.map((data) => (
                                <tr key={data.key}>
                                    <td>{`Step ${data.step}`}</td>
                                    <td>{data.numberOfReferrals}</td>
                                    <td>John</td>
                                    <td>
                                        <div style={{
                                            maxWidth: '200px',
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            fontSize: '12px',
                                            lineHeight: '1'
                                        }}>
                                            {data.referredUsers.map((user, index) => (
                                                <span key={index}>
                                                    {user.name}
                                                    {index < data.referredUsers.length - 1 && ', '}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`badge ${data.status === 'Completed' ? 'bg-success' : (data.status === 'In Progress' ? 'bg-warning' : 'bg-secondary')}`}>
                                            {data.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {currentStep > 8 && (
                    <p>Congratulations, Joe you have completed the steps.</p>
                )}
            </div>
        </div>
    );
}

export default Network;