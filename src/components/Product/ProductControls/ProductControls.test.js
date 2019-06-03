import React from 'react';

import { configure, shallow } from 'enzyme';
import Adaper from 'enzyme-adapter-react-16';

import ProductControls from './ProductControls';
import ProductControl from './ProductControl/ProductControl';
import list from '../../../products/products.json'

configure({adapter: new Adaper()});

describe('<productControls />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProductControls
      products={list.products}
      addToCart={() => {}}
      cartQuantity={() => {}}
      removeFromCart={() => {}}
      purchasable={() => {}}
      orderSummary={() => {}}
      price={0}/>)
    })

  it('should render a list of products', () => {
    expect(wrapper.find(ProductControl)).toHaveLength(13);
  })
})
