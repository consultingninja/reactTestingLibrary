import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test('Passes Snapshot', () => {
  const container = render(<App />)
  expect(container.firstChild).toMatchSnapshot()
});

test('renders App Component', () => {
  render(<App />);

  const appComponent = document.getElementsByClassName('app')
  expect(appComponent[0]).toBeInTheDocument();

});

test('renders Nav Component', () => {
  render(<App />);
  const navComponent = screen.getByText(/Navbar/);
  expect(navComponent).toBeInTheDocument();

});

test('renders Form', () => {
  render(<App />);
  const formComponent = screen.getByLabelText("user-form");
  expect(formComponent).toBeInTheDocument();
});

test('Name rejects numbers', () => {
  render(<App />);
  const nameInput = screen.getByLabelText('name');
  fireEvent.change(nameInput, {target: {value: '2'}});
  expect(nameInput.value).toBe("");
});

test('Name rejects specials', () => {
  render(<App />);
  const nameInput = screen.getByLabelText('name');
  fireEvent.change(nameInput, {target: {value: '@'}});
  expect(nameInput.value).toBe("");
});

test('Email accepts characters ', () => {
  render(<App />);
  const emailInput = screen.getByLabelText('email');
  fireEvent.change(emailInput, {target: {value: 'bob@gmail.com'}})
  expect(emailInput.value).toBe('bob@gmail.com')
});

test('Phone rejects characters ', () => {
  render(<App />);
  const nameInput = screen.getByLabelText('phone');
  fireEvent.change(nameInput, {target: {value: 'characters'}})
  expect(nameInput.value).toBe('')

});

test('Submit renders success message ', () => {
  render(<App />);
  const buttonInput = screen.getByText(/submit/);
  fireEvent.click(buttonInput)
  const success = screen.getByText(/success/);
  expect(success).toBeInTheDocument()

});

test('renders Home Component', () => {
  render(<App />);

  const homeComponent = screen.getByText(/Home/);
  expect(homeComponent).toBeInTheDocument();

});

test('renders Footer Component', () => {
  render(<App />);

  const footerComponent = screen.getByText(/Footer/);
  expect(footerComponent).toBeInTheDocument();

});
