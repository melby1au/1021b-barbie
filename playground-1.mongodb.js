use("mypet");

db.createCollection("dono");

db.dono.insertOne(
  {_id:1,
  nome:"julio",
  idade:58,
  animal:
      [
        {id:11,nome:"kimberli", valor: 1450 , raca:"vira lata"},
        {id:12,nome:"joicimar", valor: 10 , raca:"vira lata"},
        {id:13,nome:"krisleide", valor: 450 , raca:"vira lata"}
      ]
    }
)

db.dono.insertOne(
  {_id:2,
  nome:"pedro",
  idade:87,
  animal:
      [
        {id:21,nome:"pedras", valor: 150 , raca:"vira lata"},
        {id:22,nome:"pedraz", valor: 100 , raca:"vira lata"},
        {id:23,nome:"pedraç", valor: 50 , raca:"vira lata"}
      ]
    }
)

db.dono.insertOne(
  {_id:3,
  nome:"josimar",
  idade:47,
  animal:
      [
        {id:31,nome:"monitor", valor: 1504 , raca:"singer"},
        {id:32,nome:"mouse", valor: 1000 , raca:"pitbull"},
        {id:33,nome:"teclado", valor: 508 , raca:"borzoi"}
      ]
    }
)

db.dono.insertOne(
  {_id:4,
  nome:"josimar",
  idade:57,
  animal:
      [
        {id:41,nome:"tecla shift", valor: 104 , raca:"pastor angolano"},
        {id:42,nome:"tecla spaço", valor: 80 , raca:"buldog"},
        {id:43,nome:"tecla enter", valor: 59 , raca:"chihuahua"}
      ]
    }
)

use("mypet");
db.dono.find({_id:2},{nome:true, animal:true});

use("mypet");
db.dono.deleteOne({_id:2});

use("mypet");
db.dono.find({});

use("mypet");
db.dono.deleteMany({});

use("mypet");
db.dono.drop();

use("mypet");
db.dropDatabase();

