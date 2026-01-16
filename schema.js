const Joi = require('joi');

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    thumbnail: Joi.string().allow('', null),
    url: Joi.string().uri().allow('', null),
    fee: Joi.number().min(0).required(),
    category: Joi.string().required(),
    duration: Joi.string().required(),
    instructor: Joi.string().allow('', null),
  }).required(),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required(),
  }).required(),
});

module.exports = { listingSchema, reviewSchema };