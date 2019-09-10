function makeForm(config) {
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
    fields: config.map()
     strings.map(makeQuestion(platform))
  }
}

function makeQuestion (platform) {
  return ({ id, value }) => ({
    ref: `translate-${platform}-${id}`,
    title: `Translate "${value}"`,
    type: 'long_string',
  });
}
