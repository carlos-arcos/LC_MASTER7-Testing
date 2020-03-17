import { mapToCollection } from './collection.mapper';


describe('Tests del mapper collection', () => {
   it ('Devuelve un array vacio cuando recibe un array no válido', () => {
      //Arrange
      const paramA = undefined;
      const paramB = (p: number) => p+1;
      const returnValue = [];

      //Act
      const result = mapToCollection(paramA, paramB);

      //Assert
      expect(result).toEqual(returnValue);
   });

   it ('Devuelve un array transformado por la función pasada como parámetro', () => {
      //Arrange
      const paramA = [1,2,3];
      const paramB = (p: number) => p+1;
      const returnValue = [2,3,4];

      //Act
      const result = mapToCollection(paramA, paramB);

      //Assert
      expect(result).toEqual(returnValue);
   });

   it ('Devuelve un array vacio cuando recibe un array vacío', () => {
      //Arrange
      const paramA = [];
      const paramB = (p: number) => p+1;
      const returnValue = [];

      //Act
      const result = mapToCollection(paramA, paramB);

      //Assert
      expect(result).toEqual(returnValue);
   });

});