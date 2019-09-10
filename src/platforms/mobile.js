const axios = require('axios');
const xml2js = require('xml2js');

const URL = 'https://raw.githubusercontent.com/toggl/mobileapp/develop/Toggl.Shared/Resources.resx';

async function getStrings () {
  const { data } = await axios({
    url: URL,
    responseType: 'text'
  })

  const parsedXML = await new Promise((resolve, reject) => {
    xml2js.parseString(data, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });

  const result = parseData(parsedXML);
  return result;
}

function parseData (parsedXML) {
  return parsedXML.root.data.map(
    e => ({ id: e.$.name, value: e.value[0] })
  );
}

exports.getStrings = getStrings;
