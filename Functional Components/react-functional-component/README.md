

As we can see above we added a reset counter button and passed a resetHandler function to onClick function. The job of resetHandler function is very simple, it just alters the value of state variable resetCounter i.e true or false.

We passed resetCounter variable as a dependency of useEffect which means whenever resetCounter value changes or updates then it executes the code present inside it i.e it updates the value of the current counter as 0.
And we will see the counter value as 0 on the screen or UI.