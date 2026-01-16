// const mongoose = require('mongoose');
// const review = require('./review');
// const  Schema = mongoose.Schema;
// const listingSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     location: {
//         type: String,
//         required: true
//     },
//    image: {
//     type: String,
//     default:
//         "https://printawallpaper.com/wp-content/uploads/2020/07/Caribbean_Sea_Beach_D-768x512.jpg",
//     set: (v) =>
//         !v || v.trim() === ""
//             ? "https://printawallpaper.com/wp-content/uploads/2020/07/Caribbean_Sea_Beach_D-768x512.jpg"
//             : v
//     },
//     country:{
//         type: String,
//         required: true,
//     },
//     reviews: [
//         {
//             type: Schema.Types.ObjectId,
//             ref: 'Review'
//         }
//     ],
//     owner: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },

// });
// // Middleware to delete reviews when a listing is deleted

// listingSchema.post('findOneAndDelete', async (listings) => {
//     if(!listings){
//     await review.deleteMany({_id:{ $in: listings.reviews }});
//     }
        
// });
// const Listing = mongoose.model('listing', listingSchema);
// module.exports = Listing;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      default:
        "https://via.placeholder.com/600x400?text=Course+Thumbnail",
      set: (v) =>
        !v || v.trim() === ""
          ? "https://via.placeholder.com/600x400?text=Course+Thumbnail"
          : v,
    },

    url: {
      type: String,
    },

    fee: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    instructor: {
      type: String,
      default: "Unknown Instructor",
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
