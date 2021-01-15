

const Header = (title, date, temp) => {
    
    const div = document.createElement("div")
    div.setAttribute("class", "header")
  
    const span1 = document.createElement("span")
    span1.setAttribute("class", "date")
    span1.textContent = date
    div.appendChild(span1)

    const h1s = document.createElement("h1")
    h1s.textContent = title
    div.appendChild(h1s)

    const span2 = document.createElement("span")
    span2.setAttribute("class", "temp")
    span2.textContent = temp
    div.appendChild(span2)
    
    return div
}

const headerAppender = (selector) => {
 
  document.querySelector(selector)
    .appendChild(Header("LAMBDA TIMES", "JANUARY 15 2021", "43°"))
  
}

export { Header, headerAppender }

 // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  
 // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //







