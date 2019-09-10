const axios = require('axios');

const baseURL = 'https://api.typeform.com';

const api = axios.create({
  baseURL,
  headers: {
    'Authorization': 'Bearer 2SQRyrhFxPxkLQB2ZLjDXfuC1NCK5FLdGQX1sGcM4BDs'
  }
})

function makeForm () {
  return {
    title: 'Help translate Toggl',
    theme: {
      href: 'https://api.typeform.com/themes/6lPNE6'
    },
    settings: {
      language: 'en',
      is_public: false,
      progress_bar: 'percentage'
    },
    welcome_screens: [
      {
        ref: 'welcome',
        title: 'Help us translate Toggl to your language',
        properties: {
          show_button: true,
          button_text: "Start"
        },
        attachment: {
          type: 'image',
          href: 'https://images.typeform.com/images/HZxF9E4VmxDv'
        }
      }
    ],
    thankyou_screens: [
      {
        ref: 'thank-you',
        title: '🙌 Thanks for the help!',
        properties: {
          redirect_url: 'https://www.typeform.com',
          share_icons: true
        },
        attachment: {
          type: 'image',
          href: 'https://images.typeform.com/images/HZxF9E4VmxDv'
        }
      }
    ],
    fields: [
      {
        ref: 'choose-platform',
        title: 'Choose Platform',
        type: 'multiple_choice',
        properties: {
          allow_multiple_selection: false,
          allow_other_choice: false,
          choices: [
            {
              label: 'Mobile',
              ref: 'mobile'
            },
            {
              label: 'Web',
              ref: 'web'
            }
          ]
        }
      }
    ]
  }
}

async function getResponses (id) {
  const response = await api.get(`/forms/${id}/responses`);
  return response.data;
}

async function getImages () {
  const response = await api.get('/images');
  return response.data;
}

async function getImage (name) {
  const images = await getImages();
  return images.find(i => i.file_name === name);
}

async function updateForm (id) {
  try {
    const response = await api.put(`/forms/${id}`, makeForm());
    return response.data;
  } catch (error) {
    console.log('Got an error boi', error);
  }
  return null;
}

updateForm('CSPEKO')
  .then(console.log)
  .catch(console.error);
