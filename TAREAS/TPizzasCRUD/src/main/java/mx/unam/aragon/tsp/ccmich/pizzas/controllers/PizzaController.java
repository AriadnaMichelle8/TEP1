package mx.unam.aragon.tsp.ccmich.pizzas.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.RestController;

import mx.unam.aragon.tsp.ccmich.pizzas.businessLayer.PizzasBusinessLayer;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.PizzaDto;
import org.springframework.web.bind.annotation.GetMapping;

@RestController  
public class PizzaController {
    
    private PizzasBusinessLayer pizzaBusinessLayer;

    public PizzaController(PizzasBusinessLayer pizzaBusinessLayer) {
        this.pizzaBusinessLayer = pizzaBusinessLayer;
    }

    @GetMapping("/api/v1/pizzas")
    public ArrayList<PizzaDto> obtenerTodas(){
        ArrayList<PizzaDto> pizzas;
        pizzas = pizzaBusinessLayer.obtenerTodas();
        return pizzas;
}
}