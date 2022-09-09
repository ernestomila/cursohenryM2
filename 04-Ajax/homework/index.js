function clear(){
    $("#success").html('');
    $("#successAdd").html('');
    $("#amigo").html('');
    //Inputs
    $("#input").val('');
    $("#inputDelete").val('');
    $("#inputAdd").val('');
    $("#edadAdd").val('');
    $("#emailAdd").val('');
}

$("#boton").click(function(){
    let loading = $("#loading");
    let ul = $("#lista");
    ul.html('');
    clear();
    loading.fadeIn("slow", function(){
        $.get('http://localhost:5000/amigos',function(data){
            loading.fadeOut("slow", function(){
                data.forEach(element => {
                    let li = $('<li></li>');
                    li.attr("id", element.id);
                    li.css("list-style-type", "circle");
                    li.html(element.id + " - " + element.name);
                    ul.append(li);
                });                
            });
        })        
    });
})

$("#search").click(function(){
    let loading = $("#loadingSearch");
    let input = $("#input");
    let amigo = $("#amigo");
    loading.fadeIn("slow", function(){
        $.get('http://localhost:5000/amigos/' + input.val(),function(data){
            loading.fadeOut("slow", function(){
                amigo.html(data.name);              
            });
            console.log(data);
        }).fail(function(){
            loading.fadeOut("slow", function(){
                amigo.html( 'Tu amigo no fue encontrado');              
            }); 
        })        
    });
})

$("#delete").click(function(){
    //Su  amigo X fue borrado con éxito
    let loading = $("#loadingDelete");
    let input = $("#inputDelete");
    let success = $("#success");
    success.html('');
    loading.fadeIn("slow", function(){
        $.get('http://localhost:5000/amigos/' + input.val(),function(data){
            $.ajax({
                url: 'http://localhost:5000/amigos/' + input.val(),
                type: 'DELETE',
                success: function(data){
                    let amigo = $("#"+ input.val());
                    let amigoBorrado = $("#"+ input.val()).html();
                    loading.fadeOut("slow", function(){
                            amigo.fadeOut("slow", function(){
                                amigo.remove();
                            });
                            success.html('Su  amigo ' + amigoBorrado + ' fue borrado con éxito');              
                        })
                }
            });             
        }).fail(function(){
            loading.fadeOut("slow", function(){
                success.html('Su  amigo NO existe');              
            }); 
        });                          
    });
})

$("#add").click(function(){
    //Su  amigo X fue borrado con éxito
    let loading = $("#loadingAdd");
    let input = $("#inputAdd");
    let edadAdd = $("#edadAdd");
    let emailAdd = $("#emailAdd");  
    let success = $("#successAdd");
    loading.fadeIn("slow", function(){
        $.ajax({
            url: 'http://localhost:5000/amigos/', 
            type: "POST",
            data: JSON.stringify({
                name: input.val(),
                age: edadAdd.val(),
                email: emailAdd.val()
                }),
            success: function(data){  
                    console.log(data);
                    let ul = $("#lista");
                    let li = $('<li></li>');
                    li.attr("id", data.id);
                    li.css("list-style-type", "circle");
                    li.html(data.id + " - " + data.name);    

                    loading.fadeOut("slow", function(){
                            success.fadeIn("slow", function(){
                                ul.append(li);
                                success.html('Su  amigo '+ data.name + ' fue agregado con éxito');
                            });            
                        })
                        clear();  
            },
            contentType: "application/json; charset=utf-8"
        }).fail(function(){
            loading.fadeOut("slow", function(){
                success.html('Su  amigo NO existe');              
            }); 
        });                      
    });
})