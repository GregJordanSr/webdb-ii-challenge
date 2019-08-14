
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars_dealer').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars_dealer').insert([
        {
          id: 1, 
          vin: 784788514,
         make: "Mercedes-Benz",
          model: "C300",
          mileage: 14500,
          transmissionType: "automatic",
          titleStatus: "clean" 
        }
        
      ]);
    });
};
