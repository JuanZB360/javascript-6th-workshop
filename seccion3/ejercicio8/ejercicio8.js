//aplicar closures y entender el funcionamiento de las Web  APIs en JavaScript



    function incrementar(){
        let i = 0;
        return () => {
            return ++i;
        };
    };

    let contador = incrementar();

while(true){
    
    console.log(contador());

    let validar = confirm("deseas contar de nuevo.")
    if (!validar){break};
};