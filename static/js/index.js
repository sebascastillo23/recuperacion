// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  var Historiales=" ";

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
    useSSL: false,
    userName: "javier230895@gmail.com",
    password: "audio123",
    onSuccess:onConnect,
    onFailure:doFail
  }
  
  // connect the client
  client.connect(options);  
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
    client.subscribe("javier230895@gmail.com/test");
  }

  function doFail(e){
    console.log(e);
  } 

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    Historiales=(message.payloadString).replace(/&/g,"<br>").split("/");
    
  }

  function mostrard(){
    
    document.getElementById("texto").innerHTML="";
    document.getElementById("texto").innerHTML=Historiales[0];
  }

  function mostrard2(){
    document.getElementById("texto").innerHTML="";
    document.getElementById("texto").innerHTML=Historiales[1];
  }

 
