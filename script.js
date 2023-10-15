const filmes = [{
     "titulo": "Dawn of the Planet of the Apes",
     "lancamento": 2014,
      imagem: "imagem/daw.jpg"
 },
 {
     "titulo": "District 9",
     "lancamento": 2009,
     imagem: "imagem/distric.jpg"
 },
 {
     "titulo": "Transformers: Age of Extinction",
     "lancamento": 2014,
     imagem: "imagem/transformes.jpg"
 },
 {
     "titulo": "X-Men: Days of Future Past",
     "lancamento": 2014,
     imagem: "imagem/x-men.jpg"
 },
 {
     "titulo": "The Machinist",
     "lancamento": 2004,
     imagem: "imagem/machinist.jpg"
 },
 {
     "titulo": "The Last Samurai",
     "lancamento": 2003,
     imagem: "imagem/the last.jpg"
 },
 {
     "titulo": "The Amazing Spider-Man 2",
     "lancamento": 2014,
     imagem: "imagem/spider.jpg"
 },
 {
     "titulo": "Tangled",
     "lancamento": 2010,
     imagem: "imagem/tangled.jpg"
 },
 {
     "titulo": "Rush",
     "lancamento": 2013,
     imagem: "imagem/rush.jpg"
 },
 {
     "titulo": "Drag Me to Hell",
     "lancamento": 2009,
     imagem: "imagem/drag.jpg"
 },
 {
     "titulo": "Despicable Me 2",
     "lancamento": 2013,
     imagem: "imagem/minios.jpg"
 },
 {
     "titulo": "Kill Bill: Vol. 1",
     "lancamento": 2003,
     imagem: "imagem/kill.jpg"
 },
 {
     "titulo": "A Bug's Life",
     "lancamento": 1998,
     imagem: "imagem/bug.jpg"
 },
 {
     "titulo": "Life of Brian",
     "lancamento": 1972,
     imagem: "imagem/life.jpg"
 },
 {
     "titulo": "How to Train Your Dragon",
     "lancamento": 2010,
     imagem: "imagem/dragon.jpg"
 }];
       
//  Crie uma cópia desse exemplo no seu Codesandbox e crie uma página que
// exiba todos os filmes contidos na constante filmes. A página também tem que
// ter 1 campo de texto que ao passo que o usuário digita (evento keyup), ele
// deve "filtrar" (com o método filter) os filmes exibidos de acordo com o texto.
// Para comparar os textos, utilize a função "includes''. Desconsidere maiúsculas e
// minúsculas

const lista = document.querySelector('#lista-filmes')
const pesquisaInput = document.querySelector('#pesquisar')
function exibir(filmes){
     lista.innerHTML = ''
     filmes.forEach((filme)=>{
          const div= document.createElement('div')
          const img = document.createElement('img')
          const h3 = document.createElement('h3')
          img.src = filme.imagem
          h3.textContent = `${filme.titulo}`;
          div.appendChild(h3)
          lista.appendChild(div)
          div.appendChild(img)
     })
}


pesquisaInput.addEventListener('keyup',(e) => {
     let busca = e.target.value;
     const filmesFiltrados = filmes.filter((filme) => filme.titulo.toLocaleLowerCase().includes(busca))

     exibir(filmesFiltrados)
})
exibir(filmes)


