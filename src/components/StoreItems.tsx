import { Card, Button } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemsProp = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
};

export default function StoreItems({
  id,
  imgUrl,
  price,
  name,
}: StoreItemsProp) {
  return (
    <Card>
      <Card.Img
        variant='top'
        src={imgUrl}
        height='200px'
        style={{ objectFit: 'cover' }}
      />

      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
        <div className=' mt-auto'>
          <Button className='w-100'> + Add to Cart</Button>
          {/* <div className='d-flex align-items-center justify-content-center'>
            <Button variant='primary' size='sm'>
              +
            </Button>
            <span>
              <span className='fs-3'>1</span> in cart
            </span>
            <Button variant='danger' size='sm'>
              -
            </Button>
          </div> */}
        </div>
      </Card.Body>
    </Card>
  );
}
