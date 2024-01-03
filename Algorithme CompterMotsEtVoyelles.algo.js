Algorithme CompterMotsEtVoyelles
    Variables
        phrase: Chaîne de caractères
        longueurPhrase, nombreMots, nombreVoyelles: Entiers

    Début
        // Demander à l'utilisateur d'entrer une phrase
        Afficher "Entrez une phrase se terminant par un point : "
        Lire phrase

        // Initialiser les compteurs
        longueurPhrase ← Longueur(phrase)
        nombreMots ← 0
        nombreVoyelles ← 0

        // Parcourir chaque caractère de la phrase
        Pour chaque caractère à l'indice i de 0 à longueurPhrase - 1 Faire
            // Vérifier si le caractère est une lettre
            Si EstLettre(phrase[i]) Alors
                // Incrémenter le nombre de voyelles si le caractère est une voyelle
                Si EstVoyelle(phrase[i]) Alors
                    nombreVoyelles ← nombreVoyelles + 1
                Fin Si

                // Vérifier si le caractère suivant est un espace ou si c'est le dernier caractère de la phrase
                Si (i = longueurPhrase - 1) ou (phrase[i+1] = ' ') Alors
                    // Incrémenter le nombre de mots
                    nombreMots ← nombreMots + 1
                Fin Si
            Fin Si
        Fin Pour

        // Afficher les résultats
        Afficher "Nombre de mots dans la phrase : ", nombreMots
        Afficher "Nombre de voyelles dans la phrase : ", nombreVoyelles

    Fin
    Algorithme SommeElementsDistincts
    Variables
        ensemble1, ensemble2: Tableaux d'entiers
        tailleEnsemble1, tailleEnsemble2: Entiers
        somme: Entier

    Début
        // Initialiser les ensembles
        ensemble1 ← [3, 1, 7, 9]
        ensemble2 ← [2, 4, 1, 9, 3]

        // Initialiser la somme à zéro
        somme ← 0

        // Parcourir chaque élément de l'ensemble1
        Pour chaque élément dans ensemble1 Faire
            // Si l'élément n'est pas présent dans ensemble2, l'ajouter à la somme
            Si NonEstPresent(élément, ensemble2) Alors
                somme ← somme + élément
            Fin Si
        Fin Pour

        // Parcourir chaque élément de l'ensemble2
        Pour chaque élément dans ensemble2 Faire
            // Si l'élément n'est pas présent dans ensemble1, l'ajouter à la somme
            Si NonEstPresent(élément, ensemble1) Alors
                somme ← somme + élément
            Fin Si
        Fin Pour

        // Afficher le résultat
        Afficher "La somme des éléments distincts est : ", somme

    Fin