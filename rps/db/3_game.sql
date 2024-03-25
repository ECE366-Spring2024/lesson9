\c rps

CREATE SEQUENCE game_id_seq start with 1;

CREATE TABLE game (
  game_id int NOT NULL DEFAULT nextval('game_id_seq'),
  p1 varchar(50) NOT NULL,
  p2 varchar(50) NOT NULL,
  current_turn int NOT NULL DEFAULT 1,
  num_turn int NOT NULL DEFAULT 5,
  p1_points int NOT NULL DEFAULT 0,
  p2_points int NOT NULL DEFAULT 0,
  winner varchar(50) NULL,
  PRIMARY KEY (game_id),
  FOREIGN KEY (p1) REFERENCES player(player_name),
  FOREIGN KEY (p2) REFERENCES player(player_name),
  FOREIGN KEY (winner) REFERENCES player(player_name)
);