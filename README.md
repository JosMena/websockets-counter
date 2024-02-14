# Socket.io COUNTER

This is a simple COUNTER web application in real-time using Socket.io and Nodejs

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/JosMena/websockets-counter
   ```

2. Navigate to the project directory:

   ```
   cd websockets-counter
   ```

3. Install dependencies:

   ```
   npm install
   ```

### Usage

To run the application in development:

```
npm run dev
```

To run the application in production:

```
npm start
```

### How it works

The application creates a WebSocket server using Socket.io.
Clients can connect to the server and interact with a counter.
Each time a client generates a guide, the counter increases by one and the new value is broadcasted to all connected clients in real-time.

### Postman Collection

This link should allow others to view and import the collection into their own Postman workspace

- https://blue-trinity-822401.postman.co/workspace/New-Team-Workspace~4d101ddd-43c7-4b86-b10d-5743d2e4aa81/collection/65cd126db3167cc92800fa60?action=share&creator=20269381
