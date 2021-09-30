  /*
  //carro 1
  let xCarro = 600;
  let yCarro = 40;
  let velocidadeCarro = 2;
  
  //carro 2
  let xCarro2 = 600;
  let yCarro2 = 96;
  let velocidadeCarro2 =2.5

  //carro 3
  let xCarro3 = 600;
  let yCarro3 = 150;
  let velocidadeCarro3 = 3  
*/

  let yCarros = [40, 96, 150];
  let xCarros = [600, 600, 600];
  let velocidadeCarros = [2, 2.5, 3.2];

  function mostraCarro () {
    /*image(imagemCarro, xCarros[0], yCarros[0], 50, 40); // posição x 420, posição y 40
    image(imagemCarro2, xCarros[1], yCarros[1], 50, 40);
    image(imagemCarro3, xCarros[2], yCarros[2], 50, 40);*/
        for (let i = 0; i < imagemCarros.length; i = i + 1){
            image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
        }
  }
  function movimentaCarro () {
    xCarros[0] -= velocidadeCarros[0];        // xCarro = xCarro -2 pode ser escrito  xCarro -= 2 "REFATURAÇÂO DE CÓDIGO"
    xCarros[1] -= velocidadeCarros[1];
    xCarros[2] -= velocidadeCarros[2];
  }
function voltaPosicaoInicialDoCarro(){
    if (xCarros[0] < -30){
        xCarros[0]= 600
    }
    if (xCarros[1] < -30){
        xCarros[1]= 600
    }
    if (xCarros[2] < -30){
        xCarros[2]= 600
    }
}