import * as React from 'react';
import {render} from '@testing-library/react';
import {TextField} from './text-field';

describe('Tests del componente TextField', () => {
   it ('Devuelve un mensaje de error si está informado el texto del error y la propiedad touched = true ', () => {
      //Arrange
      const props = {
         input: {
            name: "fieldName",
            value: "fieldValue"
         } as any,
         meta: {
            error: 'error test',
            touched: true
         },
         "data-testid": "testid"
      };

      //Act
      const { getByTestId, getByText } = render(<TextField {...props} />);
      const element = getByTestId('testid');
      const textoError = getByText('error test');

      //Assert
      expect(element).toBeInTheDocument();
      expect(textoError).toHaveTextContent('error test');
   });

   it ('No devuelve un mensaje de error si no está informado el texto del error y la propiedad touched = false ', () => {
      //Arrange
      const props = {
         input: {
            name: "fieldName",
            value: "fieldValue"
         } as any,
         meta: {
            error: undefined,
            touched: false
         },
         "data-testid": "testid"
      };

      //Act
      const { getByTestId, queryByText } = render(<TextField {...props} />);
      const element = getByTestId('testid');
      const textoError = queryByText('error test');

      //Assert
      expect(element).toBeInTheDocument();
      expect(textoError).toBeNull();
   });

});
