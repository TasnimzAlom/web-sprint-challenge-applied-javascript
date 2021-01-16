import axios from "axios"



const Tabs = (topics) => {
  const div1 = document.createElement("div")
  div1.setAttribute("class", "topics")
  
  topics.forEach(newTopic => {
    const newTab = document.createElement("div")
    newTab.setAttribute("class", "tab")
    newTab.textContent = newTopic
    div1.appendChild(newTab)
  })
 
  



 return div1
}






const tabsAppender = (selector) => {
  axios.get("https://lambda-times-api.herokuapp.com/topics")

    .then(response => {
      console.log(response.data.topics)
     document.querySelector(selector).appendChild(Tabs(response.data.topics))
  
  }) 
  .catch(error => {
    console.log(error.message)
  })
}

export { Tabs, tabsAppender }




// TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
// 
 // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //