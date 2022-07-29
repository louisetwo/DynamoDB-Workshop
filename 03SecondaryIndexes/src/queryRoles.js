// Read all the MovieRoles for a particular genre using the Query operation on your secondary index

const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB({ region: "sa-east-1" });

DynamoDB.query(
  {
    TableName: "MovieRoles",
    IndexName: "GenreYearIndex",
    KeyConditionExpression: "#genre= :genre",
    ExpressionAttributeNames: {
      "#genre": "Genre",
    },
    ExpressionAttributeValues: {
      ":genre": { S: "Drama" },
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
