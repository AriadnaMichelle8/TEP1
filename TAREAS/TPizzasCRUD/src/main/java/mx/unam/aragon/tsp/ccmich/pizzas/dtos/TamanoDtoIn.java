package mx.unam.aragon.tsp.ccmich.pizzas.dtos;

public class TamanoDtoIn {
    private String nombre;

    public TamanoDtoIn() {}

    public TamanoDtoIn(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
}
