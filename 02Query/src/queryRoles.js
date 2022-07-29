//Task: Read all MovieRoles for a particular Actor using the Query operation

const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB({ region: "sa-east-1" });

DynamoDB.query(
  {
    TableName: "MovieRoles",
    KeyConditionExpression: "Actor = :actor", // specify an exact match on that partition key, or specifysort key conditions
    ExpressionAttributeValues: {
      ":actor": { S: "Tom Hanks" },
    },
  },
  function (err, data) {
    if (err) console.log(`Error performing query": ${err}`);
    else
      console.log(
        `Found ${data.Items.length} roles!\n${JSON.stringify(data.Items)}`
      );
  }
);
