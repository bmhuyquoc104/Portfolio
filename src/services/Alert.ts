class Alert {
  channel: string;
  message: string;

  constructor(channel: string) {
    this.channel = channel;
  }

  send(message: Object) {
 
    fetch(this.channel, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Error sending message to Discord:", error);
        console.log(error);
      });
  }
}

export default Alert;