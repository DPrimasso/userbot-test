# Use the official Node.js image.
FROM node:14

# Create and change to the app directory.
WORKDIR /home/daniele17/Scrivania/Personal/Programmi_Pers/nodejs/userbot-test/app

# Install app dependencies.
COPY package*.json ./
RUN npm install

# Copy the app source code.
COPY . .

# Start the app.
CMD ["npm", "start"]
