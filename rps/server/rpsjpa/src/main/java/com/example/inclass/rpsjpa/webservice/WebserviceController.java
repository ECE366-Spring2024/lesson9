package com.example.inclass.rpsjpa.webservice;


import com.example.inclass.rpsjpa.business.PlayerService;
import com.example.inclass.rpsjpa.data.Player;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class WebserviceController {
    private final PlayerService playerService;

    public WebserviceController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping("/getAllPlayers")
    public List<Player> getPlayers(){
        System.out.println("getPlayers");
        return this.playerService.getPlayers();
    }

    @PostMapping("/createNewPlayerJpa")
    public boolean createNewPlayer(@RequestBody String json) throws JsonProcessingException {
        System.out.println(json);
        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, String> inputMap = objectMapper.readValue(json, Map.class);

        return this.playerService.createNewPlayer(
                inputMap.get("playerName"),
                inputMap.get("password"),
                Integer.parseInt(inputMap.get("loss"))
        );

    }

}