import Immutable from 'seamless-immutable';

export const Types = {
  ADD: 'cart/ADD',
};

const initialState = Immutable({
  data: [],
});

export default function cart(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        data: [action.payload.product, ...state.data],
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
};
