package mx.unam.aragon.tsp.ccmich.pizzas.webController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import mx.unam.aragon.tsp.ccmich.pizzas.businessLayer.BebidasBusinessLayer;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.BebidaDtoIn;

@Controller 
public class BebidaWebController {
    private BebidasBusinessLayer bebidasBusinessLayer;

    public BebidaWebController(BebidasBusinessLayer bebidasBusinessLayer) {
        this.bebidasBusinessLayer = bebidasBusinessLayer;
    }

    @GetMapping("/bebidas")
    public String index(Model model){
        model.addAttribute("bebidas", bebidasBusinessLayer.obtenerTodas());
        return "bebidas/index"; // Retorna a la carpeta de plantillas de bebidas
    }
    
    @GetMapping ("/bebidas/crear")
    public String crear(){
        return "bebidas/crear";
    }

    @PostMapping ("/bebidas/crear")
    public String guardar(@RequestBody BebidaDtoIn bebidaDtoIn){
        bebidasBusinessLayer.Agregar(bebidaDtoIn);
        return "redirect:/bebidas";
    }

    // Agrega también los métodos @GetMapping y @PostMapping para editar y borrar igual que en pizzas
}