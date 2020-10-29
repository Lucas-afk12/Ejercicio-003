/*Filtra por estatus A y con cantida menor que 49*/
db.inventory.find({status:"A",qty:{$lt: 49}});
/*Filtra por estatus A o cantidad mayor que 26 */
db.inventory.find({$or:[{status:"A"},{qty:{$gt:26}}]});
/*Filtra por estatus A y cantidad menor o igual que 44 o el item que empieze por la letra p*/
db.inventory.find({status:"A",$or:[{qty:{$lte:44}},{item: /^p/ }]});
/*Filtra por estatus A y dentro de size en unidades de medida(uom) con una queri igual que($eq) a cm*/
db.inventory.find({status:"A",'size.uom':{$eq:"cm"}})
/*Filtra por estatus A y dentro de size en unidades de media(uom) a cm o dentro de size en altura(h) indicando que es menor que 13*/
db.inventory.find({status:"A",$or:[{'size.uom':{$eq:"cm"}},{"size.h":{$lt:13}}]})

