import { basePicturesUrl } from 'core';
import * as apiModel from './hotel-collection.api';
import * as viewModel from './hotel-collection.vm';

export const mapFromApiToVm = (hotel: apiModel.HotelEntityApi): 
    viewModel.HotelEntityVm => {
  if (hotel === null || hotel === undefined) {
    return null;
  }else {
    return {
      id: hotel.id,
      picture: `${basePicturesUrl}${hotel.thumbNailUrl}`,
      name: hotel.name,
      description: hotel.shortDescription,
      rating: hotel.hotelRating,
      address: hotel.address1,
    }
  }
};
