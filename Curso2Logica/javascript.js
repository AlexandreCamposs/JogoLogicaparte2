  let imagemDaEstrada;
  let imagemDoAtor;

  function preload() {
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
  }

  function setup() {
    createCanvas(500, 400);
  }
  
  function draw() {
    background(imagemDaEstrada);
    image(imagemDoAtor, 100, 366 );
    
  }