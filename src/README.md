  Table with sorting and filtering features in React JS.

![image](https://github.com/user-attachments/assets/df294f55-4670-4915-a2c6-d730b9e835cf)

I used Redux Toolkit to menage global state. Data from API (https://jsonplaceholder.typicode.com/users) are loaded to state. To choose columns to see we can create an Array with field names <br />
![image](https://github.com/user-attachments/assets/c5e938c2-9f34-44dc-9879-fa58277883dd)<br/>
(__lp__ is field added automatically when fetching data)<br />
where key is field from API and name is visible column name.
The filtering is handled with array of objects {key,phrase} where key is field name from API and phrase is filter phrase. Then script adding __filtered__ field to the object checking every key of it and sets it to 1 to hide it when filter phrase doesn't match its data.
We can filter many columns at once
<br />
![image](https://github.com/user-attachments/assets/d8fc2b48-d656-4c34-9fab-dee444107b94)
