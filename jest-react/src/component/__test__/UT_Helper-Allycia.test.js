import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../UT_Helper-Allycia';
import renderer from 'react-test-renderer';

afterEach(() => {
    cleanup();
});

test('should render non-completed todo component', () => {
    const todo = { id: 1, title: 'wash dishes', completed: false, };
    render(<Todo todo = {todo}/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash dishes');
    expect(todoElement).not.toContainHTML('<strike>');
});

test('should render completed todo component', () => {
    const todo = { id: 2, title: 'wash car', completed: true};
    render(<Todo todo = {todo}/>);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash car');
    expect(todoElement).not.toContainHTML('<strike>');
});
