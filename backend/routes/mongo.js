import { MongoClient } from 'mongodb';

export const MongoConnect = async () => {
  const mongoClient = new MongoClient(
    'mongodb+srv://mgstankov30:4fwKgWf6THy9ooW5@cluster0.sxwm0zd.mongodb.net/Groups?retryWrites=true&w=majority'
  );

  let data = await mongoClient.db().collection('Groups').find({}).toArray();

  console.log('Data: ', data);
};
