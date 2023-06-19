import React, { Suspense } from 'react';
import { render, fireEvent, screen, getAllByLabelText } from '@testing-library/react';
import DateTimeChecker from './DateTimeChecker';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';

describe('DateTimeChecker', () => {
  test('renders without error', () => {
    render(<DateTimeChecker />);
  });

  test('UTCID001', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '30' } });
    fireEvent.change(monthInput, { target: { value: '4' } });
    fireEvent.change(yearInput, { target: { value: '2000' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('30/4/2000 is NOT a correct date time');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID002', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '31' } });
    fireEvent.change(monthInput, { target: { value: '6' } });
    fireEvent.change(yearInput, { target: { value: '2009' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('31/6/2009 is NOT a correct date time');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID003', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '30' } });
    fireEvent.change(monthInput, { target: { value: '5' } });
    fireEvent.change(yearInput, { target: { value: '2000' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for day is incorrect format');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID004', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '32' } });
    fireEvent.change(monthInput, { target: { value: '4' } });
    fireEvent.change(yearInput, { target: { value: '2020' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for day is out of range');
    expect(successMessage).toBeInTheDocument();
  });


  test('UTCID005', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '28' } });
    fireEvent.change(monthInput, { target: { value: '' } });
    fireEvent.change(yearInput, { target: { value: '2018' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for day is null');
    expect(successMessage).toBeInTheDocument();
  });


  test('UTCID006', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '31' } });
    fireEvent.change(monthInput, { target: { value: '5' } });
    fireEvent.change(yearInput, { target: { value: '2020' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('31/5/2020 is a correct date time');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID007', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '29' } });
    fireEvent.change(monthInput, { target: { value: '2' } });
    fireEvent.change(yearInput, { target: { value: '2000' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('29/2/2000 is NOT a correct date time');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID008', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '29' } });
    fireEvent.change(monthInput, { target: { value: '2' } });
    fireEvent.change(yearInput, { target: { value: '2020' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('29/2/2020 is a correct date time');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID009', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '31' } });
    fireEvent.change(monthInput, { target: { value: '6' } });
    fireEvent.change(yearInput, { target: { value: '2018' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('31/6/2018 is NOT a correct date time');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID010', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '' } });
    fireEvent.change(monthInput, { target: { value: '6' } });
    fireEvent.change(yearInput, { target: { value: '2020' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for day is out of range');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID011', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '18' } });
    fireEvent.change(monthInput, { target: { value: '8' } });
    fireEvent.change(yearInput, { target: { value: 'aaaa' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for year is incorrect format');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID012', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: 'a' } });
    fireEvent.change(monthInput, { target: { value: '4' } });
    fireEvent.change(yearInput, { target: { value: '2000' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for day is incorrect format');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID013', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '18' } });
    fireEvent.change(monthInput, { target: { value: '13' } });
    fireEvent.change(yearInput, { target: { value: '2000' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for year is null');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID014', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '15' } });
    fireEvent.change(monthInput, { target: { value: 'May' } });
    fireEvent.change(yearInput, { target: { value: '2018' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for month is incorrect format');
    expect(successMessage).toBeInTheDocument();
  });

  test('UTCID015', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '31' } });
    fireEvent.change(monthInput, { target: { value: '2' } });
    fireEvent.change(yearInput, { target: { value: '2012' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('31/2/2012 is NOT a correct date time');
    expect(successMessage).toBeInTheDocument();

  });


})


