package mx.unam.aragon.tsp.ccmich.pizzas.dtos;

public class TamanoDto {
    private int id;
    private String nombre; // Ej. Chico, Mediano, Familiar

    public TamanoDto(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
}