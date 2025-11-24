import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App from './App';

jest.mock('axios'); 

describe('Task Tracker App', () => {
  const tasksMock = [
    { id: 1, description: 'Task 1', created_at: '2025-11-24T17:00:00Z' },
    { id: 2, description: 'Task 2', created_at: '2025-11-24T18:00:00Z' }
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: tasksMock });
  });

  test('renders form and task list', async () => {
    render(<App />);
    
    // Formulario
    expect(screen.getByPlaceholderText(/enter task description/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();

    // Lista de tareas cargadas
    await waitFor(() => {
      expect(screen.getByText('Task 1')).toBeInTheDocument();
      expect(screen.getByText('Task 2')).toBeInTheDocument();
    });
  });

  test('submits a new task', async () => {
    axios.post.mockResolvedValue({ data: { id: 3, description: 'New Task', created_at: '2025-11-24T19:00:00Z' } });

    render(<App />);

    const input = screen.getByPlaceholderText(/enter task description/i);
    const button = screen.getByRole('button', { name: /add task/i });

    userEvent.type(input, 'New Task');
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('New Task')).toBeInTheDocument();
    });

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/tasks', { task: { description: 'New Task' } });
  });

  test('shows error when description is empty', async () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /add task/i });

    userEvent.click(button);

    expect(await screen.findByText("Description can't be blank")).toBeInTheDocument();
  });
});
