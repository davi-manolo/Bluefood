package br.com.softblue.bluefood.domain.pedido;

@SuppressWarnings("serial")
public class RestauranteDiferenteException extends Exception {

	public RestauranteDiferenteException() {
		super();
	}

	public RestauranteDiferenteException(String message) {
		super(message);
	}
}
