package com.oliver.todo;

import com.oliver.todo.model.Todo;
import com.oliver.todo.repository.TodoRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.sql.Date;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

class TodoControllerTests {
    private final TodoRepository todoRepository = Mockito.mock(TodoRepository.class);

    @Test
    void todoCanBeCreated(){
        Todo todo = new Todo(1, "test todo", Date.valueOf("2020-01-01"));
        when(todoRepository.save(any(Todo.class))).thenReturn(todoRepository.findById(1).get());
        Todo createdTodo = todoRepository.save(todo);
        assertThat(createdTodo.getId()).isEqualTo(1);
    }
}
