package com.oliver.todo.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Entity
@Table(name="todo")
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "todo_id", columnDefinition = "INT NOT NULL AUTO_INCREMENT")
    @Getter @Setter
    private int id;

    @Column(name = "description")
    @Getter @Setter
    private String description;

    @Column(name = "date")
    @Getter @Setter
    private Date date;

    public Todo(int id){
        this.id = id;
    }
}
