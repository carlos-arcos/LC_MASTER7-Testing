import * as React from 'react';
import {render} from '@testing-library/react';
import { HotelCollectionComponent } from './hotel-collection.component';
import { HotelEntityVm } from './hotel-collection.vm';

describe ('Tests del componente HotelCollection', () => {
  it ('Devuelve un hotel con la dirección informada en el parámetro', () => {
    //Arrange
    const param = [{
      id: 'idHotel',
      picture: 'urlPicture',
      description: 'description',
      rating: 0,
      address: 'addressHotelTest'
    }] as HotelEntityVm[];

    //Act
    const { getByText } = render(<HotelCollectionComponent hotelCollection={param} />);
    const textoAddress = getByText('addressHotelTest');

    //Assert
    expect(textoAddress).toHaveTextContent('addressHotelTest');

  });

});

