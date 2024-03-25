package com.example.inclass.rpsjpa.web;

import com.example.inclass.rpsjpa.business.PlayerService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/getAllPlayers")
public class PlayerController {
    private final PlayerService playerService;

    public PlayerController(PlayerService userService) {
        this.playerService = userService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public String getUsers(Model model){
        model.addAttribute("players", this.playerService.getPlayers());
        return "rps-players";
    }
}