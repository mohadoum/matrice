<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Operations sur les matrices</title>
<!--
Classic Template
http://www.templatemo.com/tm-488-classic
-->
    <!-- load stylesheets -->
    <link rel="stylesheet" href="css/bootstrap.min.css">                                      <!-- Bootstrap style -->
    <link rel="stylesheet" href="css/templatemo-style.css"> 
    <link rel="stylesheet" href="somProd.css">                                  <!-- Templatemo style -->

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
                                <li class="nav-item">
                                    <a href="index.php" class="nav-link">Inversion</a>
                                </li>
                                <li class="nav-item active">
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
        <section>
            <div class="container-fluid">
                <form>
                    <div class="row">
                            <div id="formMetadata" class="jumbotron col-md-6 col-md-offset-3">
                                <div class="form-group">
                                        <label for="nInput">Entrer la taille de la matrice :</label>
                                        <input type="text" id="nInput" placeholder="entiers" class="form-control">
                                </div>
                                <div class="text-right">
                                        <button onclick="creatingMatriceManager();" type="button" id="nInputButton" class="btn btn-success">Valider</button>
                                        <button onclick="initialize();" class="btn btn-danger">Effacer</button>
                                </div>   
                                    
                            </div>
                    </div>
                    <div class="row form-group">
                            <div id="matriceA" hidden onchange="isGoodMatrice('matriceA');" class="col-md-offset-3 col-md-6">
                                    
                            </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-md-2 col-md-offset-1" id="operateur" hidden>
                                <select class="form-control" id="ope">
                                        <option value="somme" selected>
                                             somme
                                        </option>
                                        <option value="produit">
                                             produit
                                        </option>
                                </select>
                        </div>             
                    </div>
                    <div class="row form-group">
                            <div id="matriceB" hidden onchange="isGoodMatrice('matriceB');" class="col-md-offset-3 col-md-6">
                            </div>
                    </div> 
                    <div class="row form-group">
                        <div class="col-md-2 col-md-offset-1" id="calculButton" hidden>
                                <button type="button" onclick="calculManager();" class="btn btn-primary">Calculer</button>
                        </div>
                            
                    </div>  
                    <div class="row form-group">
                        <div class="col-md-offset-3 col-md-6">
                                <div id="matriceResult">
                                        
                                </div>
                        </div>        
                    </div>                                     
                </form>
            </div>
        </section>
        <hr>
        <footer>
           <p class="cent"><span class="lead">Copyright 2018, by All Might!</span></p>
        </footer>

       <!-- lien cdn du script-->
        <script src="somProd.js"></script>
        <!-- lien cdn vers jquery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </body>
</html>