package mx.unam.aragon.tsp.ccmich.pizzas.businessLayer;

import java.util.ArrayList;
import org.springframework.stereotype.Service;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.BebidaDto;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.BebidaDtoIn;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.IdDto;

@Service 
public class BebidasBusinessLayer {

    private ArrayList<BebidaDto> bebidas = new ArrayList<>();
    private int contadorId = 1;

    // LEER
    public ArrayList<BebidaDto> obtenerTodas() {
        return bebidas;
    }

    // CREAR
    public IdDto Agregar(BebidaDtoIn bebidaDtoIn) {
        BebidaDto nueva = new BebidaDto(contadorId++, bebidaDtoIn.getNombre(), bebidaDtoIn.getPrecio());
        bebidas.add(nueva);
        return new IdDto(nueva.getId(), "Bebida registrada"); // Reutilizas tu IdDto
    }

    // LEER POR ID
    public BebidaDto ObtenerPorId(int id){
        return bebidas.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
    }

    // ACTUALIZAR
    public void actualizar(int id, BebidaDtoIn bebidaDtoIn){
        BebidaDto bebida = ObtenerPorId(id);
        if(bebida != null){
            bebida.setNombre(bebidaDtoIn.getNombre());
            bebida.setPrecio(bebidaDtoIn.getPrecio());
        }
    }

    // BORRAR
    public void borrar(int id){
        bebidas.removeIf(b -> b.getId() == id);
    }
}