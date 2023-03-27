package com.oliver.todo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Entity
@Table(name="todos")
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "todo_id", columnDefinition = "INT NOT NULL AUTO_INCREMENT")
    @Getter @Setter
    private int id;

    @Column(name = "description")
    @Getter @Setter
    private String description;


    @Schema(type = "string", format = "date")
    @Column(name = "date")
    @Getter @Setter
    private Date date;

    public Todo(int id){
        this.id = id;
    }
}
