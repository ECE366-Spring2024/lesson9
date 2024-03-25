\c rps

CREATE TABLE game_history (
    game_id int NOT NULL,
    turn int NOT NULL,
    p1_move varchar(50) NOT NULL,
    p2_move varchar(50) NOT NULL,
    winner varchar(50) NOT NULL,
    PRIMARY KEY (game_id, turn),
    FOREIGN KEY (game_id) REFERENCES game(game_id),
    FOREIGN KEY (p1_move) REFERENCES move(move),
    FOREIGN KEY (p2_move) REFERENCES move(move),
    FOREIGN KEY (winner) REFERENCES player(player_name)
);