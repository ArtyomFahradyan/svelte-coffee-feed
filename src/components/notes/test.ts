/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';

import Notes from './Notes.svelte';

describe('Component Notes', () => {
  test('Render notes', () => {
    const { getByText } = render(Notes, { notes: "tart, tea-like, cranberry, vanilla, quakery" });
    expect(getByText('tart')).toBeInTheDocument();
    expect(getByText('tea-like')).toBeInTheDocument();
    expect(getByText('cranberry')).toBeInTheDocument();
    expect(getByText('vanilla')).toBeInTheDocument();
    expect(getByText('quakery')).toBeInTheDocument();
  });
});