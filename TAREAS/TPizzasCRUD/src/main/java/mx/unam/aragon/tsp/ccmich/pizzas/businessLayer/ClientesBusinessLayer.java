package mx.unam.aragon.tsp.ccmich.pizzas.businessLayer;

import java.util.ArrayList;
import org.springframework.stereotype.Service;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.ClientesDto;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.ClientesDtoIn;
import mx.unam.aragon.tsp.ccmich.pizzas.dtos.IdDto;

@Service 
public class ClientesBusinessLayer {
    private ArrayList<ClientesDto> clientes = new ArrayList<>();
    private int contadorId = 1;

    public ArrayList<ClientesDto> obtenerTodos() {
        return clientes;
    }

    public IdDto agregar(ClientesDtoIn clienteDtoIn) {
        ClientesDto nuevo = new ClientesDto(contadorId++, clienteDtoIn.getNombre(), clienteDtoIn.getTelefono(), clienteDtoIn.getDireccion());
        clientes.add(nuevo);
        return new IdDto(nuevo.getId(), "Cliente registrado");
    }

    public ClientesDto obtenerPorId(int id){
        return clientes.stream().filter(c -> c.getId() == id).findFirst().orElse(null);
    }

    public void actualizar(int id, ClientesDtoIn clienteDtoIn){
        ClientesDto cliente = obtenerPorId(id);
        if(cliente != null){
            cliente.setNombre(clienteDtoIn.getNombre());
            cliente.setTelefono(clienteDtoIn.getTelefono());
            cliente.setDireccion(clienteDtoIn.getDireccion());
        }
    }

    public void borrar(int id){
        clientes.removeIf(c -> c.getId() == id);
    }
}
