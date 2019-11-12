require('dotenv').config({ path: '../../.env' });

const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
});

const image =
  'http://recettescookeo.com/wp-content/uploads/2015/03/recettes-plats-cookeo.jpg';

module.exports = {
  clarifai: async ctx => {
    const response = await app.models.predict(Clarifai.FOOD_MODEL, image);

    ctx.send(response.outputs[0].data.concepts);
  }
};
