window.tunnelAppartement = [
    {
        "question": "Envisagez-vous de réorganiser l'espace de votre appartement ?",
        "details": "Redistribution de l'espace, modification de cloisons, de fenêtres ou portes…",
        "answers": [
            {
                "label": "Oui, j’ai les plans en tête",
                "next": "1",
            }, {
                "label": "Oui, mais je n’ai pas d’idées précises de ce que je veux faire",
                "next": "1",
            }, {
                "label": "Non",
                "next": "2",
            }
        ],
        "relatedQuestion" : "Pourquoi c'est important ?"
    }, {
        "question": "Un expert a-t-il bien vérifié que votre projet ne concerne aucune structure porteuse ?",
        "details": "",
        "answers": [
            {
                "label": "Oui",
                "next": "2",
            }, {
                "label": "Non",
                "next": "2",
            }
        ],
        "relatedQuestion" : "Qui est habilité à expertiser une structure ?"
    }, {
        "question": "Comptez-vous refaire les installations ou les revêtements dans votre logement ?",
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