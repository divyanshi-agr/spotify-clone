// clicking on login with spotify button takes me to this link down here, where im
//thrown to spotify i.e i login to spotify and i come back to my localhost webpg
// 1. Click LOGIN button
// 2. Redirect to SPOTIFY login page
// 3. Redirect to home page once logged in

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "a56e3c8d73534c999985a8c2f851c46d";

//defining scope of what we can do in our clone, eg we cant delete any song but
//we can just play it on spotify etc
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id={clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
