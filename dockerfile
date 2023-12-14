# File Name: dockerfile
# Author: Parth Patel <parth05211@gmai.com>
# Date Created: Wednesday, December 13, 2023
# Date Updated: Wednesday, December 13, 2023

FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci
EXPOSE 4000
CMD ["npm", "run", "dev"]