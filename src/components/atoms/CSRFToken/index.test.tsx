import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('CSRFToken', () => {
  it('CSRFTokenがhiddenタグのvalueに設定されること', async () => {
    const { container } = render(<Default />);
    const input = container.querySelector('input[type="hidden"][name="_token"]');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('value', 'csrf-token');
  });
});
