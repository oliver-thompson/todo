package com.oliver.todo;

import com.oliver.todo.model.Todo;
import com.oliver.todo.repository.TodoRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Date;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
class TodoApplicationTests {

	@Test
	void contextLoads() {
	}
}
