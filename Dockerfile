FROM node:20-alpine
WORKDIR /app
COPY backend ./backend
COPY frontend ./frontend
RUN cd backend && npm install && cd ../frontend && npm install
EXPOSE 3000 9000
CMD ["sh", "-c", "cd backend && npm run start & cd ../frontend && npm run start"]
