import { renderHook } from '@testing-library/react-hooks'; 
import { useHotelCollection } from './hotel-collection.hook';
import { HotelEntityApi } from './hotel-collection.api';
import * as api from './hotel-collection.api';


describe('Tests de hook', () => {
  it ('Debe devolver un array y una función.', () => {
    //Arrange

    //Act
    const {result} = renderHook(() => useHotelCollection());

    //Assert
    expect(result.current.loadHotelCollection).toEqual(expect.any(Function));
    expect(Array.isArray(result.current.hotelCollection)).toBeTruthy();
  });

  it ('Debe llamar a la api y devolver un array de 2 elementos', async () => {
    //Arrange
    const data = [
      {
        id: 'idHotel1',
        name: 'name1',
        highRate: 1,
        address1: 'addressHotelTest1'
      },
      {
        id: 'idHotel2',
        name: 'name2',
        highRate: 2,
        address1: 'addressHotelTest2'
      }] as HotelEntityApi[];

      const getHotelCollectionStub = jest
      .spyOn(api, 'getHotelCollection')
      .mockResolvedValue(data);
      
      //Act
      const {result, waitForNextUpdate} = renderHook(() => useHotelCollection());
      result.current.loadHotelCollection();
      await waitForNextUpdate();

      //Assert
      expect(getHotelCollectionStub).toHaveBeenCalled();
      expect(result.current.hotelCollection).toHaveLength(2);
  });

});
