\c rps

ALTER SEQUENCE game_id_seq RESTART;
DELETE from move WHERE 1=1;
DELETE from game_history WHERE 1=1;
DELETE from game WHERE 1=1;
DELETE from player WHERE 1=1;
INSERT INTO move (move) VALUES ('rock');
INSERT INTO move (move) VALUES ('paper');
INSERT INTO move (move) VALUES ('scissors');
INSERT INTO player (player_name, password) VALUES ('isaiah', 'password');
INSERT INTO player (player_name, password) VALUES ('malek', 'password');
INSERT INTO player (player_name, password) VALUES ('irene', 'password');
INSERT INTO player (player_name, password) VALUES ('nicholassingh', 'password');
INSERT INTO player (player_name, password) VALUES ('nicholasstorniolo', 'password');
INSERT INTO game (p1, p2, current_turn) VALUES ('isaiah', 'malek', 1);
INSERT INTO game (p1, p2, current_turn) VALUES ('isaiah', 'irene', 1);
INSERT INTO game_history (game_id, turn, p1_move, p2_move, winner) VALUES (2, 1, 'rock', 'scissors', 'isaiah');
UPDATE game SET current_turn = 2 WHERE game_id = 2;
INSERT INTO game_history (game_id, turn, p1_move, p2_move, winner) VALUES (2, 2, 'rock', 'scissors', 'isaiah');
UPDATE game SET current_turn = 3 WHERE game_id = 2;
INSERT INTO game_history (game_id, turn, p1_move, p2_move, winner) VALUES (2, 3, 'scissors', 'paper', 'isaiah');
UPDATE game SET current_turn=4, winner='isaiah' WHERE game_id = 2;
