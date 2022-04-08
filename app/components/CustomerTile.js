import React from 'react';
import PropTypes from 'prop-types';
import './CustomerTile.css';

const CustomerTile = ({ customer, card }) => (
  <div className="customer__item">
    <div className="customer__title-container">
      <p className="customer__item-title">{`${customer.first_name} ${
        customer.last_name
      }`}</p>
      <span
        className={`customer__status ${
          card.status === 'valid' ? 'active' : 'inactive'
        }`}
      >
        {card.status}
      </span>
    </div>
    <div>
      <p className="customer__info-container">Contact info</p>
      <div>
        <span> tel: </span>
        <a className="customer__info-phone" href={`tel:${customer.phone}`}>
          {customer.phone}
        </a>
      </div>
    </div>
  </div>
);

CustomerTile.propTypes = {
  customer: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
};

export default CustomerTile;
