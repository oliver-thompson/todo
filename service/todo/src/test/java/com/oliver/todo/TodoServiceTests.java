package com.oliver.todo;

import com.oliver.todo.model.Todo;
import com.oliver.todo.repository.TodoRepository;
import com.oliver.todo.service.TodoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.web.server.ResponseStatusException;

import java.sql.Date;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class TodoServiceTests {
    private final TodoRepository todoRepository = Mockito.mock(TodoRepository.class);
    private TodoService todoService;

    @BeforeEach
    void setup() {
        this.todoService = new TodoService(todoRepository);
    }

    @Test
    void todoCanBeCreated() {
        Todo todo = new Todo(1, "test todo", Date.valueOf("2020-01-01"));
        when(todoRepository.save(any(Todo.class))).thenReturn(todo);
        Todo createdTodo = todoService.createTodo(todo);
        assertThat(createdTodo.getDescription()).isEqualTo(todo.getDescription());
        assertThat(createdTodo.getDate()).isEqualTo(todo.getDate());
        assertThat(createdTodo.getId()).isEqualTo(todo.getId());
    }

    @Test
    void getTodoByIdReturnsCorrectTodo() {
        Todo todo2 = new Todo(2, "2nd todo", Date.valueOf("2020-02-02"));
        when(todoRepository.findById(anyInt())).thenReturn(Optional.of(todo2));
        Todo retrievedTodo = todoService.getTodo(2);
        assertThat(retrievedTodo).isEqualTo(todo2);
    }

    @Test
    void getTodoByIdThrowsExceptionForBadId() {
        int todoId = 3;
        when(todoRepository.findById(anyInt())).thenReturn(Optional.ofNullable(null));
        assertThrows(ResponseStatusException.class, () -> {
            todoService.getTodo(todoId);
        });
    }

    @Test
    void todoCanBeDeleted() {
        Todo todo3 = new Todo(3, "todo to delete", Date.valueOf("2020-03-03"));
        todoService.delete(todo3.getId());
        verify(todoRepository).deleteById(3);
    }
}
