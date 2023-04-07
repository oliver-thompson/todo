package com.oliver.todo.service;

import com.oliver.todo.model.Todo;
import com.oliver.todo.repository.TodoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class TodoService {
    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public Todo getTodo(int todoId) {
        Optional<Todo> todo = todoRepository.findById(todoId);
        if (todo.isPresent()){
            return todo.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No todo exists with id " + todoId);
        }
    }

    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public void deleteTodo(int todoId) {
        try{
            todoRepository.deleteById(todoId);
        } catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No todo exists with id " + todoId);
        }
    }
}
