db.people.remove({height: { $gt: "190" }})
printjson(db.people.findOne({last_name:"Jablonski"}))