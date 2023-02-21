

const ClientsController = {};

ClientsController.getAllClients = async (req,res) => {

    let clientes = {
        cliente1 : {
            nombre : "Corina"
        },
        cliente2 : {
            nombre: "Marcos"
        },
        cliente3 : {
            nombre: "Adrian"
        }
    }

    res.send(clientes);


}

ClientsController.getClientByName = async (req,res) => {

    let nombre = req.params.name;
    let encontrado = false;

    console.log(nombre);

    let clientes = ["fernando", "felipe", "alvaro", "jose andres"];

    clientes.map(cliente => {
        if(cliente === nombre){
            res.send(`Te pillé!!!!! ${nombre}`);
            encontrado = true;
        }
    })

    if(!encontrado){

        res.send("No te he encontrado por ninguna parte....");
    }


}

ClientsController.addClient = async (req, res) => {

    res.json({
        message: "Bienvenido a la base de datos",
        user: {
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            email : req.body.email
        }
    })

}


module.exports = ClientsController;