package mx.unam.aragon.tsp.ccmich.pizzas.webController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import mx.unam.aragon.tsp.ccmich.pizzas.businessLayer.TamanosBusinessLayer;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.TamanoDto;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.TamanoDtoIn;

@Controller 
public class TamanoWebController {
    private TamanosBusinessLayer tamanosBusinessLayer;

    public TamanoWebController(TamanosBusinessLayer tamanosBusinessLayer) {
        this.tamanosBusinessLayer = tamanosBusinessLayer;
    }

    @GetMapping("/tamanos")
    public String index(Model model){
        model.addAttribute("tamanos", tamanosBusinessLayer.obtenerTodos());
        return "tamanos/index"; 
    }
    
    @GetMapping ("/tamanos/crear")
    public String crear(){
        return "tamanos/crear";
    }

    @PostMapping ("/tamanos/crear")
    public String guardar(@ModelAttribute TamanoDtoIn tamanoDtoIn){
        tamanosBusinessLayer.agregar(tamanoDtoIn);
        return "redirect:/tamanos";
    }

    @GetMapping ("/tamanos/editar/{id}")
    public String editar(@PathVariable("id") int id, Model model){
        TamanoDto tamano = tamanosBusinessLayer.obtenerPorId(id);
        model.addAttribute("tamano", tamano);
        return "tamanos/editar";
    }

    @PostMapping ("/tamanos/actualizar/{id}")
    public String actualizar(@PathVariable("id") int id, @ModelAttribute TamanoDtoIn tamanoDtoIn){
        tamanosBusinessLayer.actualizar(id, tamanoDtoIn);
        return "redirect:/tamanos";
    }

    @PostMapping ("/tamanos/borrar/{id}")
    public String borrar(@PathVariable("id") int id){
        tamanosBusinessLayer.borrar(id);
        return "redirect:/tamanos";
    }
}