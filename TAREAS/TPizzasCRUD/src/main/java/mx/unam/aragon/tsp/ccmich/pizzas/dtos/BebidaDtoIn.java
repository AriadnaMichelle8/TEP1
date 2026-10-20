package mx.unam.aragon.tsp.ccmich.pizzas.dtos;

public class BebidaDtoIn {
    String nombre;
    double precio;
    
    // Agrega los Getters
    public BebidaDtoIn() {
    }

    public BebidaDtoIn(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    //Setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

}