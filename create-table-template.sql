create table movie (
    movie_id SERIAL PRIMARY KEY,
    title text NOT NULL, 
    release_year INT NOT NULL,
    genre text NOT NULL,
    duration INT NOT NULL
);

create table actor(
    actor_id SERIAL PRIMARY KEY,
    name text NOT NULL, 
    date_of_birth DATE NOT NULL,
    nationality text NOT NULL
);

create table movie_cast(
    movie_cast_id SERIAL PRIMARY KEY,
    movie_id INT REFERENCES movie(movie_id) ON DELETE CASCADE, 
    actor_id INT REFERENCES actor(actor_id) ON DELETE CASCADE,
    role text NOT NULL
);

create table earnings(
    earnings_ID SERIAL PRIMARY KEY,
    movie_id INT REFERENCES movie(movie_id) ON DELETE CASCADE,
    country text NOT NULL, 
    revenue INT NOT NULL
);

insert into actor (name, date_of_birth, nationality) 
values ('tom cruise', '07-20-1978', 'american')


select * from actor


insert into actors (name, date_of_birth, nationality) values ('Tom Hanks', '1978-07-20', 'American')