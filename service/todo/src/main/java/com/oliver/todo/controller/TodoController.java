package com.oliver.todo.controller;

import com.oliver.todo.model.Todo;
import com.oliver.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping(value = "/todos")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping("/")
    public List<Todo> getAllTodos(){
        return todoService.getAllTodos();
    }

    @GetMapping("/{id}")
    public Todo getTodo(@PathVariable(name="id") int todoId){
        return todoService.getTodo(todoId);
    }

    @PostMapping("/")
    public Todo createTodo(@RequestBody Todo todo){
        return todoService.createTodo(todo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable(name = "id") @RequestBody int todoId){
        todoService.deleteTodo(todoId);
    }

    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable(name = "id") int todoId,
                           @RequestBody Todo todoToUpdate){
        return todoService.updateTodo(todoId, todoToUpdate);
    }
}
