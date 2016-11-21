CREATE TABLE todolist (
id SERIAL PRIMARY KEY,
description VARCHAR(300) NOT NULL,
status VARCHAR(20) NOT NULL
);

INSERT INTO todolist (description, status)
VALUES ('Eat Cheese Pizza', 'incomplete'),
('Pet My Cats', 'complete');
