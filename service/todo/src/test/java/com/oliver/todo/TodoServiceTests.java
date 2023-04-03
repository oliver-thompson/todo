package com.oliver.todo;

import com.oliver.todo.controller.TodoController;
import com.oliver.todo.model.Todo;
import com.oliver.todo.repository.TodoRepository;
import com.oliver.todo.service.TodoService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.sql.Date;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

class TodoServiceTests {
    private final TodoRepository todoRepository = Mockito.mock(TodoRepository.class);
    private final TodoService todoService = new TodoService(todoRepository);

    @Test
    void todoCanBeCreated(){
        Todo todo = new Todo(1, "test todo", Date.valueOf("2020-01-01"));
        when(todoService.createTodo(any(Todo.class))).thenReturn(todo);
        Todo createdTodo = todoService.createTodo(todo);
        assertThat(createdTodo).isEqualTo(todo);
    }
}
