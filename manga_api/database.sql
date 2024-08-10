CREATE TABLE manga (
    id SERIAL PRIMARY KEY,
    series VARCHAR(255),
    name VARCHAR ARRAY,
    volume INTEGER,
    author VARCHAR ARRAY,
    publisher VARCHAR(255),
    img VARCHAR(255),
    genre VARCHAR ARRAY,
    price INTEGER,
    description VARCHAR(255)
);

INSERT INTO manga (author) VALUES (ARRAY['hello', 'hello']);