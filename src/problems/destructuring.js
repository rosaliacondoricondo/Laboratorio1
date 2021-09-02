const person = {
    name: "Gregor",
    lastname: "Mandella",
    age: 34,

    roles: [
        { name: "Manager", method: "get" },
        { name: "Client", method: "post" },
        { name: "User", method: "get" },
      ],
      address: {
        address: {
          street: "3914 Woodruff Ave",
          location: "Oakland, CA 94602Glenview",
        },
        position: {
          lat: 123.221,
          lng: 124.544,
        },
      },
     };
     
     //const showPersonalInformation = (person) => {
      //var information = "";
      //information += "Nombres " + person.name + "\n";
      //information += "Apellidos" + person.lastname + "\n";
      //information += "Edad" + person.age;
      //return information;
     //};

     //const total = person.push("User", "age");
     //const addIdUser = (person, id) => {
      //return { ...person, id };
     //};
     
     person.roles.push({name: "Rosa", method: "Condori"});   
  
     const addIdUser = { ...person, id: 1 };

     const showRoles = (person) => {
      let information = "";
      let roles = person.roles;
      for (let i = 0; i < roles.length; i++) {
        information += "Nombre del rol " + roles[i].name + "\n";
        information += "Tipo del rol " + roles[i].method + "\n";
      }
      return information;
     };

     const getPosition = (person) => {
     return person.address.position;
     };
     const getFirstRol = (person) => {
      return person.roles[0];
     };
     const main = () => {
        console.log(" Nombre"+ person.name + "\n", "Apellido"+ person.lastname + "\n", "edad"+ person.age);
      //console.log(showPersonalInformation(person));
      //console.log(addIdUser(person, 123456));
      console.log(showRoles(person));
      console.log(getPosition(person));
      console.log(getFirstRol(person));
      console.log(addIdUser);
     };
     export default main;
     