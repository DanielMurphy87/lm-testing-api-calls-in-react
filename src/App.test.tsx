import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from "./App";
import { API_BASE_URL } from "./config/config";
import '@testing-library/jest-dom/extend-expect';

const server = setupServer(
    rest.get(`${API_BASE_URL}/people/1/`, (req, res, ctx) => {
        return res(ctx.json([{ id: 1, name: 'Luke Skywalker' }]));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the first person returned by the API', async () => {
    render(<App />);
    const name = await screen.findByText(/Luke Skywalker/i);
    expect(name).toBeInTheDocument();
});