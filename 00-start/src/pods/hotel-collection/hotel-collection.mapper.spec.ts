import * as apiModel from './hotel-collection.api';
import * as viewModel from './hotel-collection.vm';
import { mapFromApiToVm } from './hotel-collection.mapper';

describe('Tests del mapper de hotel-collection', () => {
   it('Devuelve null si el parámetro es null', () => {
      //Arrange
      const param = null;

      //Act
      const result: viewModel.HotelEntityVm = mapFromApiToVm(param);

      //Assert
      expect(result).toBeNull();
   });

   it('Devuelve null si el parámetro es undefined', () => {
      //Arrange
      const param = undefined;

      //Act
      const result: viewModel.HotelEntityVm = mapFromApiToVm(param);

      //Assert
      expect(result).toBeNull();
   });

   it('Devuelve un objeto del tipo viewModel.HotelEntityVm cuando recibe un objeto del tipo apiModel.HotelEntityApi', () => {
      //Arrange
      const param: apiModel.HotelEntityApi = {
         id: "1",
         type: "",
         name: "name",
         created: new Date(),
         modified: new Date(),
         address1: "address1",
         airportCode: "",
         amenityMask: 0,
         city: "",
         confidenceRating: 0,
         countryCode: "",
         deepLink: "",
         highRate: 0,
         hotelId: 0,
         hotelInDestination: false,
         hotelRating: 1,
         location: {latitude: 0, longitude: 0},
         locationDescription: "",
         lowRate: 0,
         metadata: {path: ""},
         postalCode: 0,
         propertyCategory: 0,
         proximityDistance: 0,
         proximityUnit: "",
         rateCurrencyCode: "",
         shortDescription: "description",
         stateProvinceCode: "",
         thumbNailUrl: "/thumbNailUrl",
         tripAdvisorRating: 0,
         tripAdvisorRatingUrl: ""
      };

      const returnValue: viewModel.HotelEntityVm = {
         id: "1", 
         picture: "http://localhost:3000/thumbNailUrl", 
         name: "name", 
         description: "description",
         rating: 1,
         address: "address1"
      };

      //Act
      const result: viewModel.HotelEntityVm = mapFromApiToVm(param);

      //Assert
      expect(result).toEqual(returnValue);
   });

});