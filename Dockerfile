FROM node

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
COPY --chown=node:node . .
USER node


# install app dependencies
RUN npm install
RUN npm install react-scripts -g --silent
RUN npm install -g --unsafe-perm=true --allow-root
RUN chown -Rh $user:$user /app

# add app
# start app
CMD ["npm", "start"]