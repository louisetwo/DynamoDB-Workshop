/* Create a DynamoDB table with:
- a table name of `MovieRoles`
- A composite primary key with the hash key of `Actor` and a range key of `movie`
Prosivioned throughtput with ReadCapacityUnits and WriteCapacityUnits of 
 */

const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB({ region: "sa-east-1" });

DynamoDB.createTable(
  {
    TableName: "MovieRoles",
    AttributeDefinitions: [
      {
        AttributeName: "Actor", // composite primary key - hash key: actor
        AttributeType: "S",
      },
      {
        AttributeName: "Movie", // range key is movie
        AttributeType: "S",
      },
    ],
    KeySchema: [
      { AttributeName: "Actor", KeyType: "HASH" },
      { AttributeName: "Movie", KeyType: "RANGE" },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  },
  function (err) {
    if (err) console.log(`Error creating table: ${err}`);
    else console.log("Table created succesfully! 🚀");
  }
);
