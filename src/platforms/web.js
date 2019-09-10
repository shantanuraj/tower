const axios = require('axios');

const URL = 'https://web-assets.toggl.space/app/assets/locale/en-US.json';

async function getStrings () {
  const { data } = await axios.get(URL);
  const result = parseData(data);
  return result;
}

function parseData (data) {
  return data.map(
    e => ({ id: e.id, value: e.defaultMessage })
  );
}

exports.getStrings = getStrings;
