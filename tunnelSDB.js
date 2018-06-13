window.tunnelSDB = [
   {
        "question": "Votre logement est-il en copropriété ?",
        "details": "",
        "answers": [
            {
                "label": "Oui",
                "next": "1",
            }, {
                "label": "Non",
                "next": "1",
            }
        ],
        "relatedQuestion" : "Pourquoi c'est important ?"
    }, {
        "question": "Envisagez-vous de réorganiser l'espace de votre salle de bain ?",
        "details": "Redistribution de l'espace, modification de cloisons, de fenêtres ou portes…",
        "answers": [
            {
                "label": "Oui et j'ai les plans en tête",
                "next": "2",
            }, {
                "label": "Oui, mais pas d'idées",
                "next": "2",
            }, {
                "label": "Non",
                "next": "3",
            }
        ],
        "relatedQuestion" : ""
    }, {
         "question": "Comptez-vous refaire les installations ou les revêtements dans votre salle de bain ?",
        "details": "Plomberie, éléctricité, maçonnerie, menuiserie, parquets,…",
        "answers": [
            {
                "label": "Oui, je sais ce que je veux faire",
                "next": "",
            }, {
                "label": "Oui, mais je ne sais pas quoi refaire",
                "next": "",
            }, {
                "label": "Non",
                "next": "",
            }
        ],
        "relatedQuestion" : "Comment savoir ?"
    }
]
