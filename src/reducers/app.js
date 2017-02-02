import { APP_LOAD } from 'constants/action-types';

const shop = [

  {
    image: '0.png',
    name: 'Printed swimsuit',
    price: '23',
    status: '',
    discount: ''
  },
  {
    image: '1.png',
    name: 'Jogging bermuda shorts',
    price: '36',
    status: '',
    discount: '12'
  },
  {
    image: '2.png',
    name: 'Basic beach flip flops',
    price: '9',
    status: 'new',
    discount: ''
  },
  {
    image: '3.png',
    name: 'Black sunglasses',
    price: '29',
    status: '',
    discount: ''
  },
  {
    image: '4.png',
    name: 'Long sleeved twill shirt',
    price: '20',
    status: '',
    discount: ''
  },
  {
    image: '5.png',
    name: 'Basic swimsuit',
    price: '36',
    status: '',
    discount: ''
  },
  {
    image: '6.png',
    name: 'Bleached shorts',
    price: '12',
    status: '',
    discount: ''
  },
  {
    image: '7.png',
    name: 'T-shirt with lower panel',
    price: '32',
    status: '',
    discount: '12'
  }
]



const initialState = {
  loaded: false,
  products: shop,
  category: 'All'
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    default:
      return state;
  }
}
