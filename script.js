var servidorDasImagens = 'http://fegemo.github.io/cefet-web/images/',
    todasAsImagens = ['philae-parts.jpg',
        'philae-rosetta.jpg',
        'philae-separation.jpg',
        'philae-67-picture.jpg',
        'philae-collecting.jpg'];
var anterior = document.getElementById("anterior");
anterior.addEventListener('click',function(e){
                                    var slide = document.getElementById("slide");
                                    for( i=0; i<todasAsImagens.length; i++)
                                    {
                                        if((slide.getAttribute("src").indexOf(todasAsImagens[i]) >= 0)&&(i-1>=0)){
                                            slide.setAttribute("src",servidorDasImagens + todasAsImagens[i-1]);
                                            i = todasAsImagens.length;
                                        }

                                    }                            
                                },
                         false);

var proximo = document.getElementById("proximo");
proximo.addEventListener('click',function(e){
                                    var slide = document.getElementById("slide");
                                    for( i=0; i<todasAsImagens.length; i++)
                                    {
                                        if((slide.getAttribute("src").indexOf(todasAsImagens[i]) >= 0)&&(i+1<todasAsImagens.length)){
                                            slide.setAttribute("src",servidorDasImagens + todasAsImagens[i+1]);
                                            i = todasAsImagens.length;
                                        }

                                    }                            
                                },
                         false);