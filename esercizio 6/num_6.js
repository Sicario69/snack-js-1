const studenti = [
    {nome: "Anna", età: "17"},
    {nome: "Marco", età: "22"},
    {nome: "Laura", età: "19"},
    {nome: "Giorgio", età: "16"}
]

const maggiorenni = studenti.filter ((persona) => {
    return persona.età >= 18;
})

maggiorenni.forEach ((persona)=>{
    console.log (`Lo studente ${persona.nome} è maggiorenne`)
})
