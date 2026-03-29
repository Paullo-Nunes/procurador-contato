// Mapeando os elementos
let p = document.querySelector("p")
let input = document.querySelector("input")

const contacts = [
    {name: 'Paulo', number: '(11) 99387-5643' },
    {name: 'Rafaela', number: '(82) 99863-0989'},
    {name: 'Flávia', number: '(83) 97865-0032'},
    {name: 'Caroline', number: '(81) 96437-6545'}

]

function search() {
    for (let i = 0; i < contacts.length; i++) {
        if (input.value.toLocaleLowerCase() === contacts[i].name.toLocaleLowerCase()) {
            p.innerHTML = `Contato encontrado: ${contacts[i].name} Tel.: ${contacts[i].number}`
            break
            
        } else {
            p.innerHTML= `Contato não encontrado, tente novamente.`
        } 
        
    }
}
