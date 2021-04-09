import React from 'react';
import DataSlider from './DateSlider';
import { render } from '@testing-library/react';
import { dateToSol } from '../services/sols'

describe('DataSlider', () => {
  describe('render', () => {
    it('should return a container', () => {
      const { container } = render(
        <DataSlider earth_date="2017-5-3" onDateChanged={() => {}} />
      );
      expect(container).toBeDefined();
    });

    it('should display a correct date', () => {
      const { getByTestId } = render(
        <DataSlider earth_date="2017-5-3" onDateChanged={() => {}} />
      );
      const date = getByTestId('date-label');
      expect(date).toHaveTextContent("2017-5-3");
    });

    it('should have the correct slider position', () => {
      const { getByTestId } = render(
        <DataSlider earth_date="2017-5-3" onDateChanged={() => {}} />
      );
      const input = getByTestId('date-slider');
      expect(input).toHaveValue(dateToSol('2017-5-3').toString());
    })

  });
});