FROM postgres

# Copy the SQL files to the container
COPY 0_setup.sql /docker-entrypoint-initdb.d/0_setup.sql
COPY 1_player.sql /docker-entrypoint-initdb.d/1_player.sql
COPY 2_move.sql /docker-entrypoint-initdb.d/2_move.sql
COPY 3_game.sql /docker-entrypoint-initdb.d/3_game.sql
COPY 4_game_history.sql /docker-entrypoint-initdb.d/4_game_history.sql
COPY 5_sample_data.sql /docker-entrypoint-initdb.d/5_sample_data.sql