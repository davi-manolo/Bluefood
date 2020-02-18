/*******************************************************************************
 * MIT License
 *
 * Copyright (c) 2019 Softblue
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *******************************************************************************/
function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	
	if ((charCode >= 48 && charCode <= 57) || charCode <= 31) {
		return true;
	}
	
	return false;
}

function searchRest(categoriaId) {
	
	var t = document.getElementById("searchType");
	
	if (categoriaId == null) {
		t.value = "Texto";
	
	} else {
		t.value = "Categoria";
		document.getElementById("categoriaId").value = categoriaId;
	}
	
	document.getElementById("form").submit();
}

function setCmd(cmd) {
	document.getElementById("cmd").value = cmd;
	document.getElementById("form").submit();
}

function filterCardapio(categoria) {
	document.getElementById("categoria").value = categoria;
	document.getElementById("filterForm").submit();
}