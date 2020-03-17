import * as React from 'react';
import {render} from '@testing-library/react';
import { HotelCard } from './hotel-card.component';
import { HotelEntityVm } from '../hotel-collection.vm';

describe ('Tests del componente HotelCard', () => {
  it ('Devuelve un hotel con la dirección informada en el parámetro', () => {
    //Arrange
    const param = {
      id: 'idHotel',
      picture: 'urlPicture',
      description: 'description',
      rating: 0,
      address: 'addressHotelTest'
    } as HotelEntityVm;

    //Act
    const { getByText } = render(<HotelCard hotel={param} />);
    const textoAddress = getByText('addressHotelTest');

    //Assert
    expect(textoAddress).toHaveTextContent('addressHotelTest');

  });
});
