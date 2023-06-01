package com.oliver.todo.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Entity
@Table(name="_todo")
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "todo_id", nullable = false)
    private int id;

    @Column(name = "description")
    private String description;


    @Schema(type = "string", format = "date")
    @Column(name = "date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User _user;

    public Todo(int id){
        this.id = id;
    }

    public Todo(int id, String description, Date date){
        this.id = id;
        this.description = description;
        this.date = date;
    }
}
