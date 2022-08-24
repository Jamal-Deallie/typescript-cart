import React from 'react';
import storeItems from '../data/items.json';
import StoreItems from '../components/StoreItems';
import { Col, Row } from 'react-bootstrap';
type Props = {};

function Store({}: Props) {
  return (
    <>
      <h1>store items</h1>

      <Row>
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItems {...item} />{' '}
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
