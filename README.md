# CODE CHALLENGE

 Create a NodeJs API server using Typescript
 Server should have a scheduler that checks certain folder each 5 minutes
 If there is a file present it should be parsed, and data stored in DB (In this case it's perfectly fine that "database" is actually JSON file)
 This file is in CSV format, and it should contain columns like Make,Model,Year,Cars sold
 This data is considered as new data, so results should be appended to our database (JSON file)
 Server should have a controller that returns the number of sold vehicles. Users can pass in make, model, year, or any other combination to get the sum of sold vehicles.