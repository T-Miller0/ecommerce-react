import React from 'react';

import { configure, shallow } from 'enzyme';
import Adaper from 'enzyme-adapter-react-16';

import Store from './Store';
import ProductControls from '../../components/Product/ProductControls/ProductControls';

configure({adapter: new Adaper()});

describe('<Store />', () => {
  const thisStore = new Store
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Store />)
  });

  it('addToCartHandler adds product', () => {
    let USERCART = []
    let prd = {category: "Women's Footwear", id: 1, price: 99, qty: 1,
    title: "Almond Toe Shoes"}
    let filterProduct = jest.fn()
    thisStore.addToCartHandler(prd)

    expect(USERCART).toContain({title: 'shorts'})
  })
})
