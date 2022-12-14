// Delete the `MovieRoles` table

const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB({ region: "sa-east-1" });

DynamoDB.deleteTable(
  {
    TableName: "MovieRoles",
  },
  function (err) {
    if (err) console.log(`Error deleting table: ${err}`);
    else console.log("Table deleted successfully! 🙌");
  }
);
