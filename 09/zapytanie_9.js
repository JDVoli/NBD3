db.people.updateMany({first_name:"Antonio"},{$set:{hobby: "pingpong"}})
printjson(db.people.findOne({first_name: "Antonio"}))