import { Card, Button } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

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
  console.log(useShoppingCart());

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

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
          {quantity === 0 ? (
            <Button
              className='w-100'
              onClick={() => {
                increaseCartQuantity(id);
              }}>
              + Add to Cart
            </Button>
          ) : (
            <div
              className='d-flex align-items-center justify-content-center flex-column'
              style={{ gap: '5px' }}>
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ gap: '5px' }}>
                <Button
                  variant='primary'
                  size='sm'
                  onClick={() => {
                    increaseCartQuantity(id);
                  }}>
                  +
                </Button>
                <span>
                  <span>{quantity}</span> in cart
                </span>
                <Button
                  size='sm'
                  onClick={() => {
                    decreaseCartQuantity(id);
                  }}>
                  -
                </Button>
              </div>
              <div>
                <Button
                  variant='danger'
                  size='sm'
                  onClick={() => {
                    removeFromCart(id);
                  }}>
                  Remove
                </Button>
              </div>
            </div>
          )}

          {/*  */}
        </div>
      </Card.Body>
    </Card>
  );
}
