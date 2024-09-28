<img width="847" alt="Screenshot 2024-09-28 at 12 22 29 PM" src="https://github.com/user-attachments/assets/25d185d8-d65a-423a-920c-8648c7b2a4c0">

This is a React-based visualization system used in a GPS-Denied-Localization Project to visualize the differences between different localization systems. This visualization is done using
the Google Map API.

### Ensure that NodeJS and other React dependencies are installed.
https://dev.to/code_jedi/how-to-install-reactjs-on-macos-4hio

### After cloning run 'npm install' to install the needed packages.

### Then run 'npm start' to start the app.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Common Fixes

To resolve an issue relating to the expected package name not matching the install package name navigate the path and modify the name accordingly.

1) rename: WebsocketClient.js to WebSocketClient.js in node_modules/webpack-dev-server/client/clients
2) rename: createSocketUrl.js to createSocketURL.js in node_modules/webpack-dev-server/client/utils
