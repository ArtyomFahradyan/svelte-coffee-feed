/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';

import Card from './Card.svelte';

describe('Component List', () => {
  test('Renders', () => {
    const { getByText } = render(Card, { coffee: {
        id: 6428,
        uid: "d87426ed-8e68-4f15-9858-5675cdc7e98c",
        blend_name: "Red America",
        origin: "Nuevo Oriente, Guatemala",
        variety: "San Ramon",
        notes: "tart, tea-like, cranberry, vanilla, quakery",
        intensifier: "quick"
      }, index: 1 });
    expect(getByText('San Ramon')).toBeInTheDocument();
    expect(getByText('Nuevo Oriente, Guatemala')).toBeInTheDocument();
    expect(getByText('Red America')).toBeInTheDocument();
  });
});