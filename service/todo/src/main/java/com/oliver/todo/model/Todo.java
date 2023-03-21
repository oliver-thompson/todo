package com.oliver.todo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="todo")
public class Todo {
    private int id;
    private String description;
}
