<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>matrice</title>
<!--
Classic Template
http://www.templatemo.com/tm-488-classic
-->
    <!-- load stylesheets -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">                                      <!-- Bootstrap style -->
    <link rel="stylesheet" href="css/templatemo-style.css">                                  <!-- Templatemo style -->
    <style>
        .cent{
            text-align: center;
        }
    </style>
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
                                <li class="nav-item">
                                    <a href="somProd.php" class="nav-link">Somme et Produit</a>
                                </li>
                                <li class="nav-item active">
                                    <a href="#" class="nav-link">Help</a>
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
                <div class="panel panel-default">
                    <div class="panel-heading"> <span class="lead">Inversion</span></div>
                    <div class="panel-body">
                        <p>
                            <h3>Comment ça marche?</h3>
                            <span class="badge">1</span> Vous renseignez d'abord la taille de la matrice qui doit être obligatoirement un entier strictement positif.
                           <br> <span class="badge">2</span> Vous remplissez votre nouvelle matrice avec des réels obligatoirement.
                           <br> <span class="badge">3</span> Appuyez sur le bouton inverser et abracadabra vous avez votre matrice inversée si cette dernière est inversible :).
                        </p>
                        <p>
                                <h3>Mode d'utilisation</h3>
                                Il existe deux modes d'utilisation. <br>
                                <u><em>Vocal</em></u>: Vous l'aurez compris vous n'avez qu'à utiliser votre voix pour tout faire. NB: vérifier que le lien utilise le protocole <b>https</b> pour que le vocal marche.( <a href="https://matrice.herokuapp.com">https://matrice.herokuapp.com</a> )<br>
                                Cette fonctionnalité intègre des commandes prédéfinies que pourrez utiliser pour communiquer vocalement telles que: <br>
                                <span class="badge">1</span> <em>'taille votre nombre'</em>: par exemple 'taille 2' ordonne à l'application de remplir le champs d'indication de la taille de la matrice avec la valeur 2.
                                <br>
                                <span class="badge">2</span> <em>'valider'</em>: ordonne à l'application de créer une nouvelle matrice avec la taille qui est préalablement définie.
                                <br>
                                <span class="badge">3</span> <em>'effacer'</em>: ordonne à l'application de réinitialiser la page.
                                <br>
                                <span class="badge">4</span> <em>'ligne votre nombre'</em>: par exemple 'ligne 2' ordonne à l'application de se placer sur la ligne 2 de votre matrice si elle existe.
                                <br>
                                <span class="badge">5</span> <em>'colonne votre nombre'</em>: par exemple 'colonne 3' ordonne à l'application de placer le curseur sur la colonne 3 de votre matrice si elle existe.
                                <br>
                                <span class="badge">6</span> <em>'suivant'</em>: ordonne à l'application de placer le curseur sur la cellule suivante si elle existe.
                                <br>
                                <span class="badge">7</span> <em>'précédent'</em>: ordonne à l'application de placer le curseur sur la cellule précédente si elle existe.
                                <br>
                                <span class="badge">8</span> <em>'valeur nombre'</em>: par exemple 'valeur 3' ordonne à l'application de remplir la cellule courante avec la valeur 3. NB:la valeur peut être un réel.
                                <br>
                                <span class="badge">9</span> <em>'inverser'</em>: ordonne à l'application de fournir l'inverse de la matrice.
                                <br>
                                <span class="badge">autres (besoins non fonctionnels) ...</span> <br>
                                <span class="badge">10</span> <em>'salut'</em> <br>
                                <span class="badge">11</span> <em>'votre nom'</em> <br>
                                <span class="badge">12</span> <em>'tu m'écoutes'</em>.
                                <br> <br>
                                <u><em>Souris + clavier (Standard)</em></u>: Vous êtes assez grand pour ça!                     
                        </p>
                        <p>
                            <h3>Conseils</h3>
                            <span class="badge">1</span>: Parler clairement et biensûr du français :)
                             <br>
                             <span class="badge">2</span>: Prenez 2 secondes de pause entre deux commandes vocales différentes. 
                            <br>
                            <span class="badge">3</span>: Si vous sentez que la fonctionnalité vocale n'ecoute pas trés bien. Réallumez-la avec le bouton OFF suivi du ON.

                        </p>
                    </div>
                </div>
                <div class="panel panel-default">
                        <div class="panel-heading"> <span class="lead">Somme et produit</span></div>
                        <div class="panel-body">
                            <p>
                                <h3>Comment ça marche?</h3>
                                <span class="badge">1</span> Vous renseignez d'abord la taille de la matrice qui doit être obligatoirement un entier strictement positif.
                               <br> <span class="badge">2</span> Vous remplissez vos deux nouvelles matrices avec des réels obligatoirement.
                               <br> <span class="badge">3</span> Appuyez sur le bouton calculer et abracadabra vous avez votre matrice résultat en fonction de l'opération choisie :).
                            </p>
                            <p>
                                    <h3>Mode d'utilisation</h3>
                                    Il existe un seul mode d'utilisation. <br>
                                    <u><em>Souris + clavier (Standard)</em></u>: Vous êtes assez grand pour ça!                     
                            </p>
                            <p>
                                    <h3>Déplacement</h3>
                                    Cette fonctionnalité vous permet de déplacer la matrice résultat avec les touches fléches de votre clavier et la placer là où vous voulez.                  
                            </p>
                            <p>
                                <h3>Conseils</h3>
                                Si vous voyez une cellule en rouge veuillez faire en sorte que ça soit en vert: il ya probablement une erreur.
    
                            </p>
                        </div>
                    </div>

            </div>
        </section>
        <hr>
        <footer>
           <p class="cent"><span class="lead">Copyright 2018, by All Might!</span></p>
        </footer>
        <!-- lien cdn vers jquery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>