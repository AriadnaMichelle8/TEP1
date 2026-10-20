package mx.unam.aragon.tsp.ccmich.pizzas.webController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import mx.unam.aragon.tsp.ccmich.pizzas.businessLayer.ClientesBusinessLayer;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.ClientesDto;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.ClientesDtoIn;

@Controller 
public class ClientesWebController {
    private ClientesBusinessLayer clientesBusinessLayer;

    public ClientesWebController(ClientesBusinessLayer clientesBusinessLayer) {
        this.clientesBusinessLayer = clientesBusinessLayer;
    }

    @GetMapping("/clientes")
    public String index(Model model){
        model.addAttribute("clientes", clientesBusinessLayer.obtenerTodos());
        return "clientes/index"; 
    }
    
    @GetMapping ("/clientes/crear")
    public String crear(){
        return "clientes/crear";
    }

    @PostMapping ("/clientes/crear")
    public String guardar(@ModelAttribute ClientesDtoIn clienteDtoIn){
        clientesBusinessLayer.agregar(clienteDtoIn);
        return "redirect:/clientes";
    }

    @GetMapping ("/clientes/editar/{id}")
    public String editar(@PathVariable("id") int id, Model model){
        ClientesDto cliente = clientesBusinessLayer.obtenerPorId(id);
        model.addAttribute("cliente", cliente);
        return "clientes/editar";
    }

    @PostMapping ("/clientes/actualizar/{id}")
    public String actualizar(@PathVariable("id") int id, @ModelAttribute ClientesDtoIn clienteDtoIn){
        clientesBusinessLayer.actualizar(id, clienteDtoIn);
        return "redirect:/clientes";
    }

    @PostMapping ("/clientes/borrar/{id}")
    public String borrar(@PathVariable("id") int id){
        clientesBusinessLayer.borrar(id);
        return "redirect:/clientes";
    }
}