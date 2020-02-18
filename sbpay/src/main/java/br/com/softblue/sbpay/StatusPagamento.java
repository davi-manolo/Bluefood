package br.com.softblue.sbpay;

public enum StatusPagamento {

	Autorizado("Autorizado"),
	NaoAutorizado("N�o autorizado pela institui��o financeira"),
	CartaoInvalido("Cart�o inv�lido ou bloqueado");
	
	String descricao;
	
	StatusPagamento(String descricao) {
		this.descricao = descricao;
	}
	
	public String getDescricao() {
		return descricao;
	}
}
