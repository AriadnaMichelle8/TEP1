package mx.unam.aragon.tsp.ccmich.pizzas.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import mx.unam.aragon.tsp.ccmich.pizzas.dtos.IdDto;

@RestController 
public class SaludoController {
    @GetMapping("/api/v1/saludos")
    public IdDto Saludar(){
        IdDto idDto = new IdDto(1, "Hola mundo");
        return idDto;
    }
}
