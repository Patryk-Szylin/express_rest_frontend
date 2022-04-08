import React, { useState, useEffect } from 'react';
import CustomerTile from '../../components/CustomerTile';

export default function HomePage() {
  const [customersData, setCustomersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCustomerInfo = async () => {
      try {
        const res = await fetch('http://localhost:3000/v1/customers', {
          method: 'GET',
        });

        const data = await res.json();
        setCustomersData(data);
        setIsLoading(false);
      } catch (error) {
        console.log('An error occured. Needs handling...');
      }
    };

    getCustomerInfo();
  }, []);

  const renderCustomers = () =>
    customersData.map(({ customer, card }) => (
      <CustomerTile key={customer.id} customer={customer} card={card} />
    ));

  return (
    <div>
      {isLoading ? (
        <p>Loading customers...</p>
      ) : (
        <div className="customer-list">{renderCustomers()}</div>
      )}

      <div />
    </div>
  );
}
