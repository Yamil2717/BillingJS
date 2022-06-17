$(document).ready(function(){
    let IdItem=0;
    $(".pesos").before("$");
    $(".iva").after("%");
    $(".descuento").before("-");
    $(".descuento").after("%");
    $(".add-file").click(function(){
        IdItem=IdItem+1;
        let clone=$("#fila_clon").after($("#fila_clon").clone(true));
        $('#tabla_factura').find('#fila_clon').find('input').val('');
        $('#tabla_factura').find('#fila_clon').find('div').empty();
        $('#tabla_factura').find('#fila_clon').find('.cod_producto').val(IdItem);
    });
    $(".remove-file").click(function(){
        let filas=$('#tabla_factura tr').length;
        filas=filas-1;
        if(filas<=1){
            alert("No se puede eliminar, sí se elimina no se podra agregar más items.");
        } else{
            IdItem=IdItem-1;
            $(this).parent().parent().remove();
        }
    });
    
    $(document).on('keyup','.campo_calcular', function(){
        let campo_p_total;
        let campo_precio = parseInt($(this).find(".campo_precio").val() || 0);
        let cantidad = parseInt($(this).find(".cantidad").val() || 0);
        let campo_iva = parseInt($(this).find(".campo_iva").val() || 0);
        let campo_descuento = parseInt($(this).find(".campo_descuento").val() || 0);
        campo_p_total=campo_precio*cantidad;
        campo_p_total+=(campo_p_total*(campo_iva/100));
        campo_p_total-=(campo_p_total*(campo_descuento/100));
        $(this).find(".valortotal").val(campo_p_total);
        let precio;
        $(".valortotal").each(function(){
            precio+=$(this).val();
            $('.totaldown').val(precio);
        });
    });
});