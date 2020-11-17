db.people.updateMany({job:"Editor"},{$unset:{email: ""}})
printjson(db.people.findOne({job: "Editor"}))