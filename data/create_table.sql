CREATE TABLE todos (
	todo_id int NOT NULL AUTO_INCREMENT,
    description varchar(250),
    date DATE,
    PRIMARY KEY (todo_id));
INSERT INTO todos (description, date)
VALUES("create todo application", '2023-04-14');