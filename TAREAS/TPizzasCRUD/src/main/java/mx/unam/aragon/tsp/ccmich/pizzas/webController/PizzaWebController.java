package mx.unam.aragon.tsp.ccmich.pizzas.webController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable; // IMPORTANTE: Se cambió PathParam por PathVariable

import mx.unam.aragon.tsp.ccmich.pizzas.businessLayer.PizzasBusinessLayer;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.PizzaDto;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.PizzaDtoIn;
import java.util.ArrayList;

@Controller 
public class PizzaWebController {
    private PizzasBusinessLayer pizzaBusinessLayer;

    public PizzaWebController(PizzasBusinessLayer pizzaBusinessLayer) {
        this.pizzaBusinessLayer = pizzaBusinessLayer;
    }

    // LISTAR
    @GetMapping("/pizzas")
    public String index(Model model){
        ArrayList<PizzaDto> pizzas = pizzaBusinessLayer.obtenerTodas();
        model.addAttribute("pizzas", pizzas);
        return "pizzas/index";
    }
    
    // FORMULARIO CREAR
    @GetMapping ("/pizzas/crear")
    public String crear(){
        return "pizzas/crear";
    }

    // GUARDAR NUEVA
    @PostMapping ("/pizzas/crear")
    public String guardar(@RequestBody PizzaDtoIn pizzaDtoIn){
        pizzaBusinessLayer.Agregar(pizzaDtoIn);
        return "redirect:/pizzas"; // Redirige a la tabla principal
    }

    // FORMULARIO EDITAR
    @GetMapping ("/pizzas/editar/{id}")
    public String editar(@PathVariable("id") int id, Model model){
        PizzaDto pizza = pizzaBusinessLayer.ObtenerPorId(id);
        model.addAttribute("pizza", pizza); // Le pasamos la pizza a editar al HTML
        return "pizzas/editar";
    }

    // GUARDAR ACTUALIZACIÓN
    @PostMapping ("/pizzas/actualizar/{id}")
    public String actualizar(@PathVariable("id") int id, @RequestBody PizzaDtoIn pizzaDtoIn){
        pizzaBusinessLayer.actualizar(id, pizzaDtoIn);
        return "redirect:/pizzas";
    }

    // BORRAR
    @PostMapping ("/pizzas/borrar/{id}")
    public String borrar(@PathVariable("id") int id){
        pizzaBusinessLayer.borrar(id);
        return "redirect:/pizzas";
    }
}

