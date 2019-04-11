<?php
$dest = "frazaomarcos1@gmail.com";
$nome = $_POS['nome'];
$email = $_POS['email'];
$assunto = $_POS['assunto'];
$mensagem = $_POS['mensagem'];


   $headers = "MIMI Version 1.1\n";
   $headers = "Form:Contato -site <", . $dest . ">\r\n" . "X-Mailer:PHP/" . phpversion() . "\r\n";
   $headers = "content-type: text/html; charset=utf-8 \n";
   $headers = "Retunr-path: ". $nome ." <". $email .">" \n";
   
   $subject= "contato-site ";

      $conteudo .="
             nome: " . $nome . " <br/>
             e-mial: " . $email . " <br/>
             assunto: " . $assunto . " <br/>
             mensagem: " . $mensagem . " <br/>
            
      ";
      
   $envio = emial($to, $subject, $conteudo, $readeres);

   if (envio){
     ?>
          <script>
             alert("enviado com sucesso");
             history.go(-1);
          </script>
     <?php
   }else{
    ?>
        <script>
          alert("Ocorreu um erro, entre em contato com o administrador");
          history.go(-1);
        </script>
    <?php
   }




?>
      
      

   

