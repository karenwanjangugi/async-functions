//PROMISES

//You are building a reminder feature for a task management app. Write an async function that sends a reminder 
//(simulated with console.log) after a delay using setTimeout. The function should return a Promise that resolves 
//after 3 seconds with the message "Reminder sent to user!", and you should await it to log the message.


const reminder = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Reminder sent to user!");
    }, 3000);
  });
  
  async function remind() {
    try {
      const reminder_message = await reminder;
      console.log({reminder_message});
      
    } catch (error) {
      console.log("No message received");
      throw new Error("Error!!");
      
    }
    
  }
  remind()
  
  // In a startup's DevOps dashboard, implement a setInterval function that checks server status every 5 seconds by calling an async function 
  // checkServer() that returns a Promise resolving to "Server is running" or rejecting with "Server down". Use .then() and .catch() to handle the 
  // result and stop the interval after 30 seconds using clearInterval.
  
  async function checkServer() {
  
    return new Promise((resolve, reject) => {
      
        let runningServer = Math.random() > 0.5;
        if(runningServer){
          resolve("Server is running")
        }else{
          reject("Server down")
        } 
  }
    )}
  
    let interval;
    function startServerMonitoring() {
      interval = setInterval(() => {
        checkServer()
        .then(resolve =>{
          console.log(resolve);
          
        })
        .catch(error =>{
          console.log(error);
          
        });
      }, 5000);
  
      setTimeout(()=> {
        clearInterval(interval);
        console.log("Stop check");
      }, 30000);
      
    }
  
    startServerMonitoring();
  
    // You're building a system to show multiple notifications to a user. Create an async function showNotifications
    // that takes an array of messages and shows each message 1 second apart using await and setTimeout wrapped in a 
    // Promise. After all messages are shown, log "All notifications sent".
    
    const show = (message) =>{  
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
          console.log(`Notification sent: ${message}`);
          resolve(message);
       
      },1000 )
    });
  
  };
  
    
    async function showNotifications(messages) {
     try {
      for(const message of messages){ 
      const send = await show(message)
      console.log({send});
      }
      console.log("All notifications sent");
      
     } catch (error) {
      console.log(error);
      
      
     }
    
    }
    showNotifications(["Received successfully","Okay"])
  
   /*In your startup’s API integration, write an async function fetchDataWithRetry() that tries to fetch data from a mock API 
   (use Promise.reject() for failure), retries up to 3 times with a 2-second delay between attempts using setTimeout, and resolves 
   with "Data fetched" or logs "Failed after 3 attempts" if all fail.
   */ 
  
  //  const fetchData = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if(retries = 0){
  //         resolve("Data fetched")
  //       }else{
  //         reject("failed after 3 attempts")
  
  //       }
  //         }, 2000)
  //   })
  //  }
  //  promise
  //  .catch(() =>{
  // console.log("error");
  
  //  } )
  
   
  
  
  //  async function fetchDataWithRetry(retries = 3){
   
  //   try {
  //     while (retries > 0) {
  //          console.log({fetchData});
           
  //     }
  //   } catch (error) {
  //     console.log(error);
      
      
  //   }
  
  //  }
  //  fetchData()
   