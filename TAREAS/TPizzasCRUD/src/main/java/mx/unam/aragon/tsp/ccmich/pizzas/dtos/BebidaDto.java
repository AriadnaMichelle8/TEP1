package mx.unam.aragon.tsp.ccmich.pizzas.dtos;

public class BebidaDto {
    int id;
    String nombre;
    double precio;

    public BebidaDto(int id, String nombre, double precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    // Getters
    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public double getPrecio() {
        return precio;
    }

    // Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    // Constructor vacío
    public BebidaDto() {
    }
}
