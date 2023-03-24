<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Inversion de matrice</title>
<!--
Classic Template
http://www.templatemo.com/tm-488-classic
-->
    <!-- load stylesheets -->
    <link rel="stylesheet" href="css/bootstrap.min.css">                                      <!-- Bootstrap style -->
    <link rel="stylesheet" href="css/templatemo-style.css">                                  <!-- Templatemo style -->
    <link rel="stylesheet" href="style.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
          <![endif]-->
</head>

    <body>
       
        <div class="tm-header">
            <div class="container-fluid">
                <div class="tm-header-inner">
                    <a href="#" class="navbar-brand tm-site-name">Matrice</a>
                    
                    <!-- navbar -->
                    <nav class="navbar tm-main-nav">

                        <button class="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                            &#9776;
                        </button>
                        
                        <div class="collapse navbar-toggleable-sm" id="tmNavbar">
                            <ul class="nav navbar-nav">
                                <li class="nav-item active">
                                    <a href="index.php" class="nav-link">Inversion</a>
                                </li>
                                <li class="nav-item">
                                    <a href="somProd.php" class="nav-link">Somme et Produit</a>
                                </li>
                                <li class="nav-item">
                                    <a href="help.php" class="nav-link">Help</a>
                                </li>
                            </ul>                        
                        </div>
                        
                    </nav>  

                </div>                                  
            </div>            
        </div>
        <hr>

        <section class="tm-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 text-center">
                        <form name="principal" onsubmit="creerMatrice('matrice'); return false;">
                            <div id="formMetadata" class="form-group">
                                <div>
                                    <label for="nInput">Entrer la taille de la matrice</span></label>
                                    <input type="text" id="nInput" placeholder="entier strictement positif" class="form-control" required>
                                </div>    
                            </div>
                            <div class="form-group">
                                    <button type="submit" id="nInputButton" class="btn btn-success">Valider</button>
                                    <button onclick="initialize();" class="btn btn-danger" id="clearButton" disabled>Effacer</button>
                            </div>
                            <br>
                            <hr>
                            <br>
                            <div class="form-group">
                                <div onchange="vocale();">
                                    <label for="speech">Vocal</span></label><br>
                                    <input type="radio" name="speech" value="on"> On <br>
                                    <input type="radio" name="speech" value="off" checked> Off
                                </div> 
                            </div>
                        </form>                            
                    </div>                          
                    <div class="col-xs-12 col-sm-12 col-md-offset-2 col-md-5 col-lg-offset-2 col-lg-5 text-center">
                        <form name="result" action="" onsubmit="if(checkInput('matrice')){inversionManager();} return false;">
                            <div id="matrice" class="form-group" hidden>
                                <label>Matrice de départ</label>
                            </div>
                            
                            <div class="form-group" hidden id="inverseButtonContainer">
                                    <label id="error"></label><br>
                                    <hr>
                                    <button id="inverseButton" type="submit" class="btn btn-primary form-control">Inverser</button>
                                    <br>
                                    <hr>
                            </div>
                            <div id="matriceInverse" class="form-group" hidden>
                                    <label>Matrice Inverse</label>
                            </div>
                        </form>
                    </div>
                </div>
                

            </div>
        </section>
        <hr>
        <footer>
           <p class="cent"><span class="lead">Copyright 2018, by All Might!</span></p>
        </footer>

       <!-- lien cdn de annyang et du script-->
        <script src="script.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
        <!-- lien cdn vers jquery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>