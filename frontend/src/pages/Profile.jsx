import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [referralPeople, setReferralPeople] = useState([]);

    useEffect(() => {
        // Fetch user details
        axios.get('/api/user/profile')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });

        // Fetch user's orders
        axios.get('/api/user/orders')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error('Error fetching user orders:', error);
            });

        // Fetch referral information
        axios.get('/api/user/referrals')
            .then(response => {
                setReferralPeople(response.data);
            })
            .catch(error => {
                console.error('Error fetching referral information:', error);
            });
    }, []);

    return (
        <div>
            <h2>Profile Page</h2>
            {user && (
                <div>
                    <h3>User Details</h3>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    {/* Add more user details as needed */}
                </div>
            )}
            <hr />
            <div>
                <h3>Orders</h3>
                <ul>
                    {orders.map(order => (
                        <li key={order._id}>
                            {/* Display order details */}
                        </li>
                    ))}
                </ul>
            </div>
            <hr />
            <div>
                <h3>Referral Information</h3>
                <ul>
                    {referralPeople.map(referral => (
                        <li key={referral._id}>
                            {/* Display referral details */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfilePage;
