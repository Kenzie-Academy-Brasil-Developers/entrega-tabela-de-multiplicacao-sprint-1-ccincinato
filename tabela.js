function tabelaDeMultiplicacao(){
    let tabela = []
    for (let i=0; i<=10; i++){
        tabela[i] = []
    
    }for (let x = 0; x<=10; x++){
        for (let y=0; y<=10; y++){
            tabela[x] [y] = x * y
        }
    }
    
    console.table(tabela)

}


//Bônus

function tabelaDeMultiplicacao(n){
    let tabela = []
    for (let i=0; i<=n; i++){
        tabela[i] = []
    
    }for (let x = 0; x<=n; x++){
        for (let y=0; y<=n; y++){
            tabela[x] [y] = x * y
        }
    }
    
    console.table(tabela)

}