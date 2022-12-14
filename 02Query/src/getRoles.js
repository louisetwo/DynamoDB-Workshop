//Read the MovieRole items in your table using BatchGetItem

const AWS = require("aws-sdk");
const DynamoDB = new AWS.DynamoDB({ region: "sa-east-1" });

DynamoDB.batchGetItem(
  {
    RequestItems: {
      MovieRoles: {
        // which table you want to(movierole is the table)
        Keys: [
          { Actor: { S: "Tom Hanks" }, Movie: { S: "Cast Away" } },
          { Actor: { S: "Tom Hanks" }, Movie: { S: "Toy Story" } },
          { Actor: { S: "Tim Allen" }, Movie: { S: "Toy Story" } },
          { Actor: { S: "Natalie Portman" }, Movie: { S: "Black Swan" } },
        ],
      },
    },
  },
  function (err, data) {
    if (err) console.log(`Error fetching roles": ${err}`);
    else if (!data.Responses) console.log("Roles do not exist");
    else console.log(`Found roles: ${JSON.stringify(data.Responses, null, 2)}`);
  }
);
