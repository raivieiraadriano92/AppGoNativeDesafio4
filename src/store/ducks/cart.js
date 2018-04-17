import Immutable from 'seamless-immutable';

export const Types = {
  ADD: 'cart/ADD',
  REMOVE: 'cart/REMOVE',
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
        data: [action.payload.product, ...state.data],
      };
    case Types.REMOVE:
      const { data } = state;
      const index = data.findIndex(product => product.id === action.payload.productId);

      data.splice(index, 1);

      return {
        data,
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
};
