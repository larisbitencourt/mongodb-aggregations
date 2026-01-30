db.trips.aggregate([
  {
    $group: {
      _id: "$bikeid",
      duracaoMedia: {
        $avg: {
          $subtract: ["$stopTime", "$startTime"],
        },
      },
      total: { $sum: 1}
    },
  },
  {
    $project: {
      _id: 0,
      bikeId: "$_id",
      duracaoMediaEmMinutos: {
        $ceil: { $divide: ["$duracaoMedia", 60000] },
      },
    },
  },
  { $sort: { duracaoMedia: -1 } },
  { $limit: 5 },
]);
