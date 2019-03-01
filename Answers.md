1.  Explain the differences between `client-side routing` and
    `server-side routing`.

    Server side routing happens when information gets requested from the server, which results in an automatic refresh and a new page getting rendered. Client side routing, on the other hand, happens when the route is handled internally by using JavaScript to maintain State or memory within an application and use it to request that the Browser display specific data without needing to refresh the page. With server side routing, every request results in a full page refresh, whereas with client side routing, the application needs to be loaded only once. As a result, with server side routing, loading pages can take longer to be rendered, whereas with client side routing, the application may take longer to load the first time, but subsequent requests are pretty fast because less data is processed at one time.

2.  What does HTTP stand for?

    HTTP stands for Hyper Text Transfer Protocol.

3.  What does CRUD stand for?

    CRUD stands for Create, Read, Update, Delete.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use
    when interfacing with APIs/Servers.

    The HTTP methods that can be mapped to the CRUD acronym are GET, POST, PUT, and DELETE. The GET method requests a representation of the desired resource, generally in the form of data. The POST method is used to add new resources and causes a change in state. The PUT method updates the specified resource with the request payload. The DELETE method deletes a specified resource.


5.  Mention three tools we can use to make AJAX requests.

    Three tools that can be used to make AJAX requests are fetch, jQuery and Axios.