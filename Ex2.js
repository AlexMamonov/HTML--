  window.addEventListener("load",function(){

        document.getElementById("b").addEventListener("click",function(){
            var b="kuk";
        var inp1 = document.getElementById("inp1"),
         inp2 = document.getElementById("inp2"),
          inp3=document.getElementById("inp3"),
          ema=document.getElementById("ema");
          var text = ema.value;
          
        document.getElementById("res1").innerHTML = "<p> </p>"; 
        document.getElementById("res").innerHTML = "<p> </p>"; 
        document.getElementById("der").innerHTML = "<p> </p>"; 
        document.getElementById("der1").innerHTML = "<p> </p>"; 
        document.getElementById("ema1").innerHTML = "<p> </p>"; 
     
        if (ema.value.includes('@')!=true)
         { // не email
            
            document.getElementById("ema1").innerHTML = "<p> Нет в адресе  @  </p>";
            ema.focus();
          }
       
        if(ema.value.length==0){
            document.getElementById("ema1").innerHTML = "<p>Электронный адрес пустой</p>";
            document.getElementById("ema").focus()
            }
            if(inp1.value.length==0){
        
                document.getElementById("res1").innerHTML = "<p>Пароль пустой</p>";
                document.getElementById("inp1").focus()
                }
        if(inp1.value.length<4 && inp1.value.length>0 )
        {
    
            inp1.value="";
            inp2.value="";
            document.getElementById("res1").innerHTML = "<p> пароль меньше 4 символов</p>";
            document.getElementById("inp1").focus()
            
        }
        
        if(inp1.value.length>4)
        {
                if(inp1.value != inp2.value)
                {
        
                    inp1.value="";
                    
                    inp2.value="";
                    
                    document.getElementById("res").innerHTML = "<p>Пароли не совпадают!</p>";
                    
                    
                    }
            }
        if(inp3.value.length==0){
        
        inp3.value=""; 
        document.getElementById("der").innerHTML = "<p>Сообщение пустое</p>";
        document.getElementById("inp3").focus()
        }
        if(inp3.value.length<10 && inp3.value.length>0)
        {
    
            inp3.value="";
            document.getElementById("der").innerHTML = "<p> сообщение меньше 10 символов</p>";
            document.getElementById("inp3").focus()
            
        }
        if(inp0.value.length<1){
        
            inp0.value=""; document.getElementById("der1").innerHTML = "<p>не заполнено поле Имя</p>";
            document.getElementById("inp0").focus()
            
            }
        });
                 
        })
        