import Immutable from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'products/GET_REQUEST',
  GET_SUCCESS: 'products/GET_SUCCESS',
  GET_FAILURE: 'products/GET_FAILURE',
  SELECT: 'products/SELECT',
  productSelected: null,
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function products(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_SUCCESS:
      return {
        data: action.payload.data,
        loading: null,
        error: null,
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.SELECT:
      return {
        ...state,
        productSelected: action.payload.product,
      };
    default:
      return state;
  }
}

export const Creators = {
  getProductsRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getProductsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  getProductsFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
  selectProduct: product => ({
    type: Types.SELECT,
    payload: { product },
  }),
};
