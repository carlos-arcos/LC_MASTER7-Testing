import * as React from 'react';
import {render} from '@testing-library/react';
import { HotelCollectionContainer } from './hotel-collection.container';
import * as hotelCollectionHooks from './hotel-collection.hook';
import { HotelEntityVm } from './hotel-collection.vm';

describe('Test de container', () => {
  it ('Debe devolver un elemento HotelCollectionContainer', () => {
    //Arrange
    const param = [{
      id: 'idHotel',
      picture: 'urlPicture',
      description: 'description',
      rating: 0,
      address: 'addressHotelTest'
    }] as HotelEntityVm[];

    const useHotelCollectionHook = jest
      .spyOn(hotelCollectionHooks, 'useHotelCollection')
      .mockReturnValue(({
        hotelCollection: param,
        loadHotelCollection: jest.fn()
      }));

    //Act
    const {getByText} = render(<HotelCollectionContainer />);
    const textoAddress = getByText('addressHotelTest');

    //Assert
    expect(textoAddress).toHaveTextContent('addressHotelTest');

  });

});
