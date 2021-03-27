$(function(){
    $(':input').css('backgroundColor', 'yellow');
    $(':text').css('backgroundColor', 'gray');
    $(':password').css('backgroundColor', 'green');
    $(':radio').parent().css('backgroundColor', '#ff00ff');
    $(':submit').css('backgroundColor', '#bbb');
    AlterarTexto();
});

AlterarTexto = () => {
    $(':text').val($('#combobox option:selected').text());
}

<select id="combobox" onclick="AlterarTexto()" name="sl" class="input">
                <option value="0">Selecione</option>
                <option value="M" >Matutino</option>
                <option value="T">Vespertino</option>
                <option value="N" selected>Noturno</option>
            </select>