import React, {useState} from "react";
import './Support.css';
import Logo from '../../Assets/nobackgroundwhlogo.png';
import { Modal, Input, Button } from "antd"; 

const Support = () => {
    const [customerMessage, setCustomerMessage] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [category, setCategory] = useState('');

    const [messages, setMessages] = useState([
        { id: 1, category: "Link", message: "Need help with my order.", date: "2024-09-01", status: "answered" },
        { id: 2, category: "Payment", message: "Issue with payment.", date: "2024-09-02", status: "not answered" },
        { id: 3, category: "Account", message: "Can't access my account.", date: "2024-09-03", status: "pending" },
    ]);
    
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (customerName.trim() && category.trim() && customerMessage.trim()) {
            const newMessage = {
                id: messages.length + 1,
                customer: customerName,
                message: customerMessage,
                date: new Date().toLocaleDateString(),
                status: "pending",
                category
            };
            setMessages([...messages, newMessage]);
            setCustomerName('');
            setCategory('');
            setCustomerMessage('');
        }
    };

    const getStatusTag = (status) => {
        switch (status) {
            case "answered":
                return <span className="badge bg-success">Answered</span>;
            case "not answered":
                return <span className="badge bg-danger">Not Answered</span>;
            case "pending":
                return <span className="badge bg-warning text-dark">Pending</span>;
            default:
                return null;
        }
    };

    return (
        <div>
            <h2  className="heading">Support</h2>
            <p style={{color: 'black', fontSize: '20px', textAlign: 'center'}}>If you have any questions or issues, feel free to reach out to us. Our support team is here to help you!</p>
            <div style={{padding: '30px'}}>
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((msg) => (
                            <tr key={msg.id} >
                                <td>{msg.id}</td>
                                <td>{msg.category}</td>
                                <td>{msg.message}</td>
                                <td>{msg.date}</td>
                                <td>{getStatusTag(msg.status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Customer Message Form */}
            <h3 className="mt-5 heading">Send a Message</h3>
            <div className="messageSection">
                <div className="info">
                    <h2>Send us a message.</h2>
                    <img src={Logo} alt='Logo' style={{ width: '100px', height: 'auto', paddingTop: '20px' }} className="icon ion-ios-ionic-outline" aria-hidden="true" />
                    <p>If you are facing anything just send us a message we will get back to you.</p>
                </div>

                <form onSubmit={handleSendMessage} className="messageForm">
                    <h2>Send Message</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="customerName" className="form-label"></label>
                            <input
                                type="text"
                                className="form-control inputFields"
                                id="customerName"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                placeholder="Enter your name"
                                required
                            />
                        </li>
                        <li>
                            <label htmlFor="category" className="form-label"></label>
                            <select
                                className="form-select inputFields"
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="Order Inquiry">Link Inquiry</option>
                                <option value="Payment Issues">Payment Issues</option>
                                <option value="Account Issues">Account Issues</option>
                                <option value="General Questions">General Questions</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="customerMessage" className="form-label"></label>
                            <textarea
                                className="form-control inputFields"
                                id="customerMessage"
                                rows="4"
                                value={customerMessage}
                                onChange={(e) => setCustomerMessage(e.target.value)}
                                placeholder="Type your message here..."
                                required
                            />
                        </li>
                        <li>
                            <button type="submit" className="btn btn-primary" id="join-btn">Send Message</button> 
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}

export default Support;