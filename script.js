const task =  [
 {
    id: 1,
    nombre: "hacer la tarea",
    completada: false,
 },
 {
    id: 2,
    nombre: "sacar al perro",
    completada: false,
 },
 {
    id: 3,
    nombre: "bañar al gato",
    completada: false,
 },
 {
    id: 4,
    nombre: "pintar uñas",
    completada: false,
 },
 {
    id: 5,
    nombre: "lavar el baño",
    completada: false,
 },
];

const returnTrueTask = (task) =>  {
    let object =  [
        {
            id: "",
            nombre: "",
            completada: false,
         },
        ];
    task.forEach(element => {
        if (element.id == false) {
            element.id = true;
            object.push(element);
        }
    });
    return object;
};

console.log(returnTrueTask(2));
