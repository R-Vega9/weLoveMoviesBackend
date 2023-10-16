const knex = require("../db/connection");
const addCritic = require("../utils/addCritic");

//Knex function to update reviews 
function update(newReview) {
  return knex("reviews")
    .where({ review_id: newReview.review_id })
    .update(newReview, ["*"])
    .then((data) => data[0]);
}
//Knex function to return a review based on reviewId
function read(reviewId) {
  return knex("reviews")
  .select("*")
  .where({ review_id: reviewId })
  .first();
}

//Knex function to retrieve Critic based on criticId
function getCriticById(criticId) {
  return knex("critics")
  .select("*")
  .where({ critic_id: criticId })
  .first();
}

//Knex function to remove review
function destroy(reviewId) {
  return knex("reviews").where({ review_id: reviewId }).del();
}

module.exports = {
  update,
  read,
  getCriticById,
  destroy,
};