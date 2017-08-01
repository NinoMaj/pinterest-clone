const callbackPath = process.env.NODE_ENV === 'production' ?
  'https://chingu-showcase.herokuapp.com/' :
  'http://localhost:8000/'

module.exports = {
  twitterAuth: {
    consumerKey: '1OfRIUy70ChhM0zwhd59oDGsO',
    callbackURL: `${callbackPath}auth/twitter/callback`,
  },

  googleAuth: {
    clientID: '566331442205-7uip1rjq3kb12kcjd3r458qbjbv3tri4.apps.googleusercontent.com',
    callbackURL: `${callbackPath}auth/google/callback`,
  },

  githubAuth: {
    clientID: 'c44d960c8b1e4fa06dbf',
    callbackURL: `${callbackPath}auth/github/callback`,
  },
}
