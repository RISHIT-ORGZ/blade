import React from 'react';
import { Text } from '../';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.web';

describe('<Text />', () => {
  it('should render Text with default properties', () => {
    const displayText = 'Displaying some text';
    const { container } = renderWithTheme(<Text>{displayText}</Text>);
    expect(container).toMatchSnapshot();
  });

  it('should render Text with variant "body" and contrast "high"', () => {
    const displayText = 'Displaying some text';
    const { container } = renderWithTheme(
      <Text type="normal" variant="body" weight="bold" truncateAfterLines={3} contrast="high">
        {displayText}
      </Text>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render Text with variant "body"', () => {
    const displayText = 'Displaying some text';
    const { container } = renderWithTheme(
      <Text type="normal" variant="body" weight="bold" truncateAfterLines={3}>
        {displayText}
      </Text>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render Text with color', () => {
    const displayText = 'Displaying some text';
    const { container } = renderWithTheme(
      <Text color="action.text.link.default">{displayText}</Text>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render Text with variant "caption"', () => {
    const displayText = 'Displaying some text';
    const { container } = renderWithTheme(
      <Text type="normal" variant="body" weight="bold">
        {displayText}
      </Text>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render Text with variant "body" and size "small"', () => {
    const displayText = 'Displaying some text';
    const { container } = renderWithTheme(
      <Text type="normal" variant="body" weight="bold" truncateAfterLines={3} size="small">
        {displayText}
      </Text>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render Text with center textAlign', () => {
    const displayText = 'Displaying some text';
    const { container } = renderWithTheme(<Text textAlign="center">{displayText}</Text>);
    expect(container).toMatchSnapshot();
  });

  it('should throw error when variant is "caption" and size "small" is passed', () => {
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation();
    const displayText = 'Displaying some text';
    expect(() =>
      renderWithTheme(
        // @ts-expect-error testing failure case when size='small' is passed with variant='caption'
        <Text type="normal" variant="caption" truncateAfterLines={3} size="small">
          {displayText}
        </Text>,
      ),
    ).toThrow(`[Blade: Text]: size cannot be 'small' when variant is 'caption'`);
    mockConsoleError.mockRestore();
  });

  it('should accept testID', () => {
    const displayText = 'Displaying some text';
    const { getByTestId } = renderWithTheme(<Text testID="text-test">{displayText}</Text>);
    expect(getByTestId('text-test')).toBeTruthy();
  });
});
