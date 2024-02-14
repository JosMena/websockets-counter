import axios from "axios";

let counter = 0;

export default (io, apiKey, URL) => {
  io.on("connection", (socket) => {
    console.log("Socket conected:", socket.id);

    socket.emit("server:loadCounter", counter);

    socket.on("client:generateGuide", async () => {
      try {
        const response = await axios.post(
          URL,
          { data: "GUIDE_DATA" },
          {
            headers: { Authorization: `Bearer ${apiKey}` },
          }
        );

        if (response.status === 200) {
          counter++;
          io.emit("server:updateCounter", counter);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log(socket.id, "disconected");
    });
  });
};
