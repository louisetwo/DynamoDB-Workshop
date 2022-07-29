// Insert four MovieRole records into yout DynamoDB table using BatchWriteItem

const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB({ region: "sa-east-1" });

const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.join(__dirname, "../items.json"));
const movieRoles = JSON.parse(data);

const requests = movieRoles.map((role) => {
  return {
    PutRequest: {
      // create a object that says put requests (can be delete)
      Item: role,
    },
  };
});

DynamoDB.batchWriteItem(
  {
    RequestItems: {
      MovieRoles: requests,
    },
  },
  function (err, data) {
    if (err) console.log(`Error creating items: ${err}`);
    else if (data.UnprocessedItems.MovieRoles)
      console.log(
        `Unprocessed items. Run again. ${JSON.stringify(data.UnprocessedItems)}`
      );
    else console.log(`Movie role items created successfully!`);
  }
);
