const ciudadesPoblacion =   [
     {
        ciudad: "Viena",
        poblacion: 4100,
     },
     {
        ciudad: "Cali",
        poblacion: 5200,
     },
     {
        ciudad: "Popayan",
        poblacion: 3400,
     },
     {
        ciudad: "Austria",
        poblacion: 500,
     },
     {
        ciudad: "New York",
        poblacion: 10100,
     },
];

const returnMaximaPoblacion = (array) =>  {
    let maxPoblacion = 0;
    let ciudadPoblacion =  {
        ciudad: "",
        poblacion: 0,
    }

    array.forEach(element => {
        if (maxPoblacion.poblacion > element.poblacion) {
            maxPoblacion = element;
            ciudadPoblacion.push(maxPoblacion);
        };
    });

    return ciudadPoblacion;
};

console.log(returnMaximaPoblacion(ciudadesPoblacion));
