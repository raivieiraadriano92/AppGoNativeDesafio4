import Immutable from 'seamless-immutable';

export const Types = {
  ADD: 'cart/ADD',
  REMOVE: 'cart/REMOVE',
  CHANGE_AMOUNT: 'cart/CHANGE_AMOUNT',
};

const initialState = Immutable({
  data: [],
});

export default function cart(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      if (state.data.find(product => product.id === action.payload.product.id)) {
        return state;
      }

      return {
        ...state,
        data: [
          {
            ...action.payload.product,
            amount: 1,
          },
          ...state.data,
        ],
      };
    case Types.REMOVE:
      state.data.splice(state.data.findIndex(product => product.id === action.payload.productId), 1);

      return {
        data: state.data,
      };
    case Types.CHANGE_AMOUNT:
      const index = state.data.findIndex(product => product.id === action.payload.productId);

      const product = state.data[index];
      product.amount = action.payload.amount;

      state.data[index] = product;

      return {
        ...state,
        data: state.data,
      };
    default:
      return state;
  }
}

export const Creators = {
  addProduct: product => ({
    type: Types.ADD,
    payload: { product },
  }),
  removeProduct: productId => ({
    type: Types.REMOVE,
    payload: { productId },
  }),
  changeAmountProduct: (productId, amount) => ({
    type: Types.CHANGE_AMOUNT,
    payload: { productId, amount },
  }),
};
