
  function setup() {
    //somDaTrilha.loop();
    console.log(somDaTrilha);
    createCanvas(500, 400);
    
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    incluiPontos();
    marcaPonto();
  }


