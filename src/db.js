import mongoose from 'mongoose';

export default callback => {
   mongoose.Promise = global.Promise;

  let db = mongoose.connect('mongodb://localhost:27017/warung-api', {useMongoClient:true}); 
 
  callback(db);
}
