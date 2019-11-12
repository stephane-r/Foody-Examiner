require('dotenv').config({ path: '../../.env' });

const fetch = require('node-fetch');

module.exports = {
  recipes: async ctx => {
    const request = await fetch(
      `${process.env.RECIPE_PUPPY_API_URL}?i=onions,garlic&q=omelet&p=3`
    );
    const { results } = await request.json();

    ctx.send(results);
  }
};
