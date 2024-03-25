\c rps

CREATE TABLE player (
  player_name varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  win int DEFAULT 0,
  loss int DEFAULT 0,
  draw int DEFAULT 0,
  PRIMARY KEY (player_name)
);