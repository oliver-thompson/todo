package com.oliver.todo.controller;

import com.oliver.todo.model.Todo;
import com.oliver.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/todos")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping("/{id}")
    public Todo getTodo(@PathVariable(name="id") int todoId){
        return todoService.getTodo(todoId);
    }

    @PostMapping("")
    public Todo createTodo(Todo todo){
        return todoService.createTodo(todo);
    }
}
