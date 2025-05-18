document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
                {
  "question": "Explain the concept of pointers in C (or C++).",
  "description": "This fundamental question tests your understanding of memory management and how pointers work in these languages.",
  "hint": "Define what a pointer is, how it relates to memory addresses, and its uses (e.g., dynamic memory allocation, passing by reference).",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition:</strong> A pointer is a variable that stores the memory address of another variable. Instead of directly holding a value, it 'points' to the location where that value is stored.</li>
          <li><strong>Memory Addresses:</strong> Every variable in a program is stored at a specific location in the computer's memory, and this location has a unique address. Pointers hold these addresses.</li>
          <li><strong>Declaration:</strong> In C/C++, a pointer is declared using an asterisk (*) before the variable name (e.g., <code>int *ptr;</code> declares a pointer to an integer).</li>
          <li><strong>Address-of Operator (&):</strong> The <code>&</code> operator is used to get the memory address of a variable (e.g., <code>ptr = &variable;</code>).</li>
          <li><strong>Dereference Operator (*):</strong> The <code>*</code> operator is also used to access the value stored at the memory address held by the pointer (e.g., <code>value = *ptr;</code>).</li>
          <li><strong>Uses of Pointers:</strong>
            <ul>
              <li><strong>Dynamic Memory Allocation:</strong> Pointers are essential for allocating memory during runtime using functions like <code>malloc()</code> (in C) or <code>new</code> (in C++).</li>
              <li><strong>Passing by Reference:</strong> Pointers allow functions to modify the original variables passed to them.</li>
              <li><strong>Data Structures:</strong> Pointers are crucial for implementing dynamic data structures like linked lists, trees, and graphs.</li>
              <li><strong>Accessing Array Elements:</strong> Pointers can be used to efficiently traverse and access elements of an array.</li>
            </ul>
          </li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition, Memory addresses, Declaration, Address-of and dereference operators, Key use cases with brief explanations.</p>
      `
},
{
  "question": "What are the differences between `==` and `===` in JavaScript?",
  "description": "This question tests your understanding of equality comparison operators in JavaScript, particularly the distinction between loose and strict equality.",
  "hint": "Focus on the type of comparison each operator performs, including type coercion.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>`==` (Loose Equality):</strong>
            <ul>
              <li>Compares values for equality <strong>after</strong> attempting to convert the operands to a common type (type coercion).</li>
              <li>May lead to unexpected results due to implicit type conversions.</li>
              <li>Examples where `==` returns <code>true</code>:
                <ul>
                  <li><code>1 == "1"</code> (string "1" is converted to a number)</li>
                  <li><code>true == 1</code> (boolean <code>true</code> is converted to a number 1)</li>
                  <li><code>null == undefined</code></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>`===` (Strict Equality):</strong>
            <ul>
              <li>Compares values for equality <strong>without</strong> any type coercion.</li>
              <li>Returns <code>true</code> only if both operands have the same value and the same type.</li>
              <li>Generally preferred for more predictable and bug-free code.</li>
              <li>Examples where `===` returns <code>false</code> (for the same cases as above):
                <ul>
                  <li><code>1 === "1"</code> (different types: number and string)</li>
                  <li><code>true === 1</code> (different types: boolean and number)</li>
                  <li><code>null === undefined</code> (different types: object and undefined)</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Key Difference:</strong> The fundamental difference is the type coercion performed by `==` but not by `===`.</li>
          <li><strong>Best Practice:</strong> It is generally recommended to use the strict equality operator (`===`) in most cases to avoid unexpected behavior due to implicit type conversions.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Type coercion (or lack thereof), Behavior with different types, Predictability, Best practices.</p>
      `
},
{
  "question": "Explain the concept of recursion in programming. Provide an example.",
  "description": "This question tests your understanding of a fundamental programming technique where a function calls itself to solve a problem.",
  "hint": "Define recursion, explain the need for a base case, and provide a simple example like calculating factorial or Fibonacci numbers.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of Recursion:</strong> Recursion is a programming technique where a function calls itself directly or indirectly to solve a smaller instance of the same problem. The solution to the larger problem is built upon the solutions of these smaller subproblems.</li>
          <li><strong>Base Case:</strong> A recursive function must have one or more base cases, which are conditions under which the function stops calling itself. Without a base case, the function would call itself infinitely, leading to a stack overflow error.</li>
          <li><strong>Recursive Step:</strong> The part of the function where it calls itself with a modified input that moves closer to the base case.</li>
          <li><strong>Example (Factorial):</strong>
            <p>Calculating the factorial of a non-negative integer <code>n</code> (n!) can be defined recursively:</p>
            <ul>
              <li>Base case: If <code>n</code> is 0, <code>n!</code> is 1.</li>
              <li>Recursive step: If <code>n</code> is greater than 0, <code>n! = n * (n-1)!</code>.</li>
            </ul>
            <pre><code class="language-javascript">function factorialRecursive(n) {
              if (n === 0) {
                return 1; // Base case
              } else {
                return n * factorialRecursive(n - 1); // Recursive step
              }
            }</code></pre>
          </li>
          <li><strong>Advantages and Disadvantages:</strong> Briefly mention that recursion can lead to elegant and concise solutions for certain problems, but it can also be less efficient than iterative solutions due to the overhead of function calls and potential stack overflow issues.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition, Base case (importance), Recursive step, Clear example with code, Awareness of advantages and disadvantages.</p>
      `
},
{
  "question": "Explain the concept of a deadlock in operating systems. What are the necessary conditions for a deadlock to occur?",
  "description": "This question tests your understanding of a critical issue in concurrent systems where processes can become blocked indefinitely.",
  "hint": "Define deadlock and then list and explain the four necessary conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of Deadlock:</strong> A deadlock is a situation in a multi-programming operating system where two or more processes are blocked indefinitely because each is holding a resource that the other needs. This results in a standstill where no process can proceed.</li>
          <li><strong>Necessary Conditions for Deadlock:</strong> For a deadlock to occur, all four of the following conditions must be simultaneously true:
            <ul>
              <li><strong>Mutual Exclusion:</strong> At least one resource must be held in a non-sharable mode. Only one process at a time can use the resource. If another process requests that resource, it must wait until the resource is released.</li>
              <li><strong>Hold and Wait:</strong> A process must be holding at least one resource and waiting to acquire additional resources that are currently being held by other processes.</li>
              <li><strong>No Preemption:</strong> Resources cannot be forcibly taken away from a process holding them. A resource can only be released voluntarily by the process holding it after it has completed its task.</li>
              <li><strong>Circular Wait:</strong> A set of two or more processes must exist such that each process in the set is waiting for a resource that is held by the next process in the chain (circular dependency). For example, process A is waiting for a resource held by process B, process B is waiting for a resource held by process C, and process C is waiting for a resource held by process A.</li>
            </ul>
          </li>
          <li><strong>Deadlock Prevention/Avoidance:</strong> Briefly mention that operating systems employ various techniques to prevent or avoid deadlocks by trying to negate one or more of these necessary conditions.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Clear definition of deadlock, Explanation of each of the four necessary conditions with examples if helpful, Awareness of deadlock handling mechanisms.</p>
      `
},
{
  "question": "What is the difference between a primary key and a foreign key in a relational database?",
  "description": "This question tests your understanding of fundamental concepts in relational database design and how tables are related to each other.",
  "hint": "Define each key and explain their purpose and constraints.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Primary Key:</strong>
            <ul>
              <li>A primary key is a column or a set of columns in a table that uniquely identifies each row in that table.</li>
              <li>Its main purpose is to ensure data integrity and to provide a way to reference individual records.</li>
              <li>Constraints on a primary key:
                <ul>
                  <li><strong>Uniqueness:</strong> All values in the primary key column(s) must be unique.</li>
                  <li><strong>Non-nullability:</strong> Primary key columns cannot contain NULL values.</li>
                  <li>A table can have only one primary key.</li>
                </ul>
              </li>
              <li>Example: In a <code>Customers</code> table, <code>CustomerID</code> might be the primary key.</li>
            </ul>
          </li>
          <li><strong>Foreign Key:</strong>
            <ul>
              <li>A foreign key is a column or a set of columns in one table that refers to the primary key of another table.</li>
              <li>Its main purpose is to establish and enforce a link between two tables, ensuring referential integrity.</li>
              <li>Constraints on a foreign key:
                <ul>
                  <li>The values in the foreign key column(s) must either match the primary key values in the referenced table or be NULL.</li>
                  <li>A table can have multiple foreign keys, each referencing a different primary key in another (or even the same) table.</li>
                </ul>
              </li>
              <li>Example: In an <code>Orders</code> table, <code>CustomerID</code> would be a foreign key referencing the <code>CustomerID</code> (primary key) in the <code>Customers</code> table.</li>
            </ul>
          </li>
          <li><strong>Key Difference Summarized:</strong> The primary key uniquely identifies records within a table, while the foreign key establishes and enforces a link between records in different tables (or within the same table).</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition and purpose of each key, Constraints associated with each key (uniqueness, non-nullability, referencing), Role in relational database design and data integrity, Clear examples.</p>
      `
},
{
  "question": "Explain the concept of indexing in databases. How does it improve query performance?",
  "description": "This question tests your understanding of how databases optimize query execution for faster data retrieval.",
  "hint": "Define indexing and explain how it allows the database to locate data without scanning the entire table.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of Indexing:</strong> Indexing is a data structure technique used in databases to speed up the retrieval of data. An index is essentially a separate, on-disk structure that contains a subset of the data from one or more columns in a table, along with a pointer to the full row in the original table.</li>
          <li><strong>Analogy:</strong> Think of it like the index in the back of a book. Instead of reading the entire book to find information on a specific topic, you can look it up in the index, which tells you the page numbers where that topic is discussed. Similarly, a database index helps the database management system (DBMS) quickly locate specific rows without scanning the entire table.</li>
          <li><strong>How it Improves Query Performance:</strong>
            <ul>
              <li><strong>Faster Lookups:</strong> When a query includes a condition on a column that is indexed (e.g., in the <code>WHERE</code> clause), the DBMS can use the index to directly locate the rows that satisfy the condition. This is much faster than a full table scan, where the DBMS has to examine every row in the table.</li>
              <li><strong>Reduced I/O Operations:</strong> By using an index, the DBMS needs to read fewer data blocks from disk, which significantly reduces the input/output (I/O) operations, a major bottleneck in database performance.</li>
              <li><strong>Faster Sorting and Grouping:</strong> Indexes can also help speed up sorting (<code>ORDER BY</code>) and grouping (<code>GROUP BY</code>) operations if the index is on the columns being sorted or grouped.</li>
            </ul>
          </li>
          <li><strong>Types of Indexes (Briefly Mention):</strong> Briefly mention common types of indexes like B-trees, Hash indexes, etc., without going into excessive detail unless asked.</li>
          <li><strong>Trade-offs:</strong> Acknowledge that while indexes improve query performance for read operations, they can slightly slow down write operations (<code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>) because the index also needs to be updated. Also, indexes consume storage space.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition of indexing, Analogy for better understanding, Explanation of how it speeds up queries (faster lookups, reduced I/O), Awareness of different index types and the trade-offs involved.</p>
      `
},
{
  "question": "Explain the concept of RESTful APIs. What are some of the key principles of REST?",
  "description": "This question tests your understanding of a widely used architectural style for designing networked applications.",
  "hint": "Define REST and then elaborate on its key principles like Statelessness, Client-Server, Cacheability, Layered System, Uniform Interface, and Code on Demand (optional).",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of RESTful APIs:</strong> REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs are designed to be stateless, meaning that the server does not store any client state between requests. Each request from a client to a server contains all the information needed to understand the request.</li>
          <li><strong>Key Principles of REST:</strong>
            <ul>
              <li><strong>Statelessness:</strong> Each request from the client to the server must contain all the information needed to understand the request. The server does not store any session state about the client between requests. Session state is entirely kept on the client.</li>
              <li><strong>Client-Server:</strong> The client and server operate independently. The client is responsible for the user interface and user experience, while the server is responsible for data storage and management. This separation of concerns allows each to evolve independently.</li>
              <li><strong>Cacheability:</strong> Responses from the server should be cacheable by the client to improve performance and reduce server load. Responses should indicate whether they are cacheable and for how long.</li>
              <li><strong>Layered System:</strong> The architecture can be composed of multiple layers (e.g., client, load balancer, server, database). Each layer should not need to know about layers beyond the immediate next layer. This promotes modularity and flexibility.</li>
              <li><strong>Uniform Interface:</strong> This is the core of REST and consists of several constraints:
                <ul>
                  <li><strong>Resource Identification:</strong> Resources are identified using URIs (Uniform Resource Identifiers).</li>
                  <li><strong>Resource Manipulation Through Representations:</strong> Clients manipulate resources by exchanging representations (e.g., JSON, XML) of these resources.</li>
                  <li><strong>Self-Descriptive Messages:</strong> Each message contains enough information to describe how to process the message (e.g., using media types).</li>
                  <li><strong>Hypermedia As The Engine Of Application State (HATEOAS):</strong> Clients should be able to navigate the API by following hypermedia links within the responses. (This is an optional but important constraint).</li>
                </ul>
              </li>
              <li><strong>Code on Demand (Optional):</strong> Servers can optionally provide executable code to the client, extending client functionality. (This is less commonly implemented).</li>
            </ul>
          </li>
          <li><strong>Benefits of REST:</strong> Briefly mention advantages like scalability, flexibility, platform independence, and ease of understanding.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition of REST, Clear explanation of each of the key principles with their benefits, Understanding of the Uniform Interface constraints.</p>
      `
},
{
  "question": "Explain the concept of multithreading. How is it different from multiprocessing?",
  "description": "This question tests your understanding of concurrency and parallelism in operating systems or programming environments.",
  "hint": "Define multithreading and multiprocessing, and then highlight the key differences in terms of memory space, context switching, and use cases.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Multithreading:</strong>
            <ul>
              <li>Multithreading is a concurrency mechanism that allows multiple parts of a single process (called threads) to run concurrently.</li>
              <li>Threads within the same process share the same memory space, which allows them to communicate and share data more easily.</li>
              <li>Context switching between threads is generally faster than between processes because they share the same memory space and fewer resources need to be saved and restored.</li>
              <li>Often used for improving the responsiveness of applications (e.g., keeping the UI responsive while performing background tasks) and for utilizing the cores of a single processor more effectively.</li>
            </ul>
          </li>
          <li><strong>Multiprocessing:</strong>
            <ul>
              <li>Multiprocessing is a parallelism mechanism that involves running multiple independent processes concurrently.</li>
              <li>Each process has its own separate memory space, which means that communication between processes typically requires inter-process communication (IPC) mechanisms (e.g., pipes, sockets, shared memory).</li>
              <li>Context switching between processes is generally slower due to the need to save and restore the entire memory space and other resources for each process.</li>
              <li>Often used for achieving true parallelism on multi-core processors and for isolating tasks to improve robustness (if one process crashes, it's less likely to affect others).</li>
            </ul>
          </li>
          <li><strong>Key Differences Summarized:</strong>
            <ul>
              <li><strong>Memory Space:</strong> Threads share the same memory space within a process; processes have separate memory spaces.</li>
              <li><strong>Communication:</strong> Threads communicate directly through shared memory; processes require IPC mechanisms.</li>
              <li><strong>Context Switching:</strong> Thread context switching is generally faster than process context switching.</li>
              <li><strong>Resource Overhead:</strong> Creating and managing threads typically has lower overhead than creating and managing processes.</li>
              <li><strong>Parallelism:</strong> Multiprocessing can achieve true parallelism on multi-core systems more effectively for CPU-bound tasks.</li>
              <li><strong>Robustness:</strong> Processes are more isolated; a crash in one process is less likely to affect others compared to threads within the same process.</li>
            </ul>
          </li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition of both concepts, Clear comparison based on memory, communication, context switching, overhead, parallelism, and robustness, Understanding of typical use cases for each.</p>
      `
},
{
  "question": "Explain the concept of a 'JOIN' operation in SQL. What are the different types of JOINs?",
  "description": "This question tests your understanding of how to combine data from multiple tables in a relational database.",
  "hint": "Define the purpose of a JOIN and then list and briefly explain the common types: INNER JOIN, LEFT JOIN (or LEFT OUTER JOIN), RIGHT JOIN (or RIGHT OUTER JOIN), and FULL OUTER JOIN.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of JOIN:</strong> A JOIN operation in SQL is used to combine rows from two or more tables based on a related column between them. It allows you to retrieve data from multiple tables in a single result set.</li>
          <li><strong>Different Types of JOINs:</strong>
            <ul>
              <li><strong>INNER JOIN:</strong> Returns rows only when there is a match in both tables based on the join condition. Rows with unmatched values in either table are excluded from the result.</li>
              <li><strong>LEFT JOIN (or LEFT OUTER JOIN):</strong> Returns all rows from the left table and the matching rows from the right table. If there is no match in the right table, NULL values are returned for the columns of the right table.</li>
              <li><strong>RIGHT JOIN (or RIGHT OUTER JOIN):</strong> Returns all rows from the right table and the matching rows from the left table. If there is no match in the left table, NULL values are returned for the columns of the left table.</li>
              <li><strong>FULL OUTER JOIN:</strong> Returns all rows from both the left and right tables. If there is no match between the tables, NULL values are returned for the columns of the table that lacks a matching row.</li>
              <li><strong>(Optional) CROSS JOIN (or CARTESIAN JOIN):</strong> Returns the Cartesian product of the two tables, meaning every row from the first table is combined with every row from the second table. It doesn't typically use a join condition.</li>
            </ul>
          </li>
          <li><strong>ON Clause:</strong> Explain that the <code>ON</code> clause specifies the condition for joining the tables (i.e., which columns should be compared).</li>
          <li><strong>Use Cases:</strong> Briefly mention scenarios where each type of JOIN might be used (e.g., INNER JOIN for related data, LEFT JOIN to get all records from one table and matching info from another).</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition and purpose of JOINs, Clear explanation of each of the main JOIN types (INNER, LEFT, RIGHT, FULL) and their behavior with matching and non-matching rows, Understanding of the <code>ON</code> clause, Awareness of common use cases.</p>
      `
},
{
  "question": "Explain the concept of a 'view' in SQL. How is it different from a table?",
  "description": "This question tests your understanding of virtual tables in SQL and their purpose in database management.",
  "hint": "Define what a view is and then highlight the key differences in terms of data storage and modifiability.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of a View:</strong> In SQL, a view is a virtual table based on the result-set of an SQL statement. It is a stored query that can be treated as if it were a real table. Views do not store data themselves; instead, they provide a way to look at data that is stored in one or more underlying base tables.</li>
          <li><strong>Key Differences from a Table:</strong>
            <ul>
              <li><strong>Data Storage:</strong>
                <ul>
                  <li><strong>Table:</strong> A table is a physical storage structure that contains actual data organized in rows and columns.</li>
                  <li><strong>View:</strong> A view is a logical structure that does not store data physically. It's essentially a saved SQL query. When you query a view, the database executes the underlying query on the base tables to produce the result.</li>
                </ul>
              </li>
              <li><strong>Modifiability:</strong>
                <ul>
                  <li><strong>Table:</strong> Tables can generally be directly modified using <code>INSERT</code>, <code>UPDATE</code>, and <code>DELETE</code> statements (subject to constraints and permissions).</li>
                  <li><strong>View:</strong> The modifiability of a view depends on the complexity of its underlying query. Simple views based on a single table can often be modified, and the changes are reflected in the base table. However, views involving joins, aggregations (e.g., <code>COUNT</code>, <code>SUM</code>), or <code>GROUP BY</code> clauses are generally not modifiable.</li>
                </ul>
              </li>
              <li><strong>Structure:</strong>
                <ul>
                  <li><strong>Table:</strong> Has a fixed and persistent structure defined by its columns and data types.</li>
                  <li><strong>View:</strong> Its structure is dynamic and determined by the SQL query used to define it. The columns and the data they contain are derived from the base tables.</li>
                </ul>
              </li>
              <li><strong>Purpose:</strong>
                <ul>
                  <li><strong>Table:</strong> Used for storing and managing the actual data in the database.</li>
                  <li><strong>View:</strong> Used for various purposes like simplifying complex queries, providing a level of data abstraction and security by hiding underlying table structures, and presenting data in a specific format for users or applications.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Benefits of Using Views:</strong> Briefly mention advantages like data abstraction, security, simplified queries, and data consistency.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition of a view, Clear comparison with a table focusing on data storage, modifiability, and structure, Understanding of the purpose and benefits of using views in database management.</p>
      `
},
{
  "question": "Explain the concept of a 'trigger' in SQL. What are some common use cases for triggers?",
  "description": "This question tests your understanding of database automation and how to execute specific actions in response to certain events.",
  "hint": "Define what a trigger is and then provide examples of common scenarios where triggers are useful, such as auditing, enforcing business rules, and maintaining data integrity.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of a Trigger:</strong> In SQL, a trigger is a stored database object that is automatically executed (or "fired") in response to certain events that occur on a table or a view. These events can be data manipulation language (DML) statements like <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>.</li>
          <li><strong>Components of a Trigger:</strong> Briefly mention the key components:
            <ul>
              <li><strong>Event:</strong> The database operation that causes the trigger to fire (e.g., <code>BEFORE INSERT</code>, <code>AFTER UPDATE</code>).</li>
              <li><strong>Timing:</strong> When the trigger should execute relative to the event (<code>BEFORE</code> or <code>AFTER</code>).</li>
              <li><strong>Table/View:</strong> The database object on which the trigger is defined.</li>
              <li><strong>Action:</strong> The SQL code or stored procedure that is executed when the trigger fires.</li>
            </ul>
          </li>
          <li><strong>Common Use Cases for Triggers:</strong>
            <ul>
              <li><strong>Auditing:</strong> Tracking changes made to data in a table, such as who made the change and when. For example, logging all <code>UPDATE</code> operations on a sensitive table into an audit log table.</li>
              <li><strong>Enforcing Business Rules:</strong> Implementing complex business logic that cannot be easily enforced through standard constraints. For example, automatically updating a customer's status based on their order history.</li>
              <li><strong>Maintaining Data Integrity:</strong> Ensuring consistency across related tables. For example, automatically updating a summary table when details in another table are modified.</li>
              <li><strong>Generating Derived Values:</strong> Automatically calculating and populating the value of a column based on other columns. For example, automatically setting a 'last modified' timestamp.</li>
              <li><strong>Security:</strong> Implementing security measures, such as preventing certain types of modifications based on user roles.</li>
            </ul>
          </li>
          <li><strong>Considerations when Using Triggers:</strong> Briefly mention that triggers can sometimes make database behavior less transparent and can impact performance if not designed carefully.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition of a trigger, Understanding of the components (event, timing, table, action), Providing several relevant and common use cases with explanations, Awareness of potential drawbacks or considerations.</p>
      `
},
{
  "question": "Explain the concept of 'Big O' notation. How is it used to analyze algorithm efficiency?",
  "description": "This question tests your understanding of how to analyze the performance of algorithms in terms of time and space complexity.",
  "hint": "Define Big O notation and explain how it describes the upper bound of the growth rate of an algorithm's resource usage as the input size increases.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of Big O Notation:</strong> Big O notation is a mathematical notation used in computer science to describe the upper bound of the growth rate of the time or space complexity of an algorithm as the input size (n) approaches infinity. It provides a way to classify algorithms according to how their runtime or memory usage grows in relation to the input size, ignoring constant factors and lower-order terms.</li>
          <li><strong>Purpose of Big O Notation:</strong>
            <ul>
              <li><strong>Comparing Algorithms:</strong> It allows developers to compare the efficiency of different algorithms for solving the same problem.</li>
              <li><strong>Predicting Performance:</strong> It helps predict how an algorithm's performance will scale as the input size grows.</li>
              <li><strong>Identifying Bottlenecks:</strong> It can help identify potential performance bottlenecks in code.</li>
            </ul>
          </li>
          <li><strong>Common Big O Notations (with brief explanations):</strong>
            <ul>
              <li><strong>O(1) (Constant Time):</strong> The execution time (or space used) remains constant regardless of the input size. Example: Accessing an element in an array by its index.</li>
              <li><strong>O(log n) (Logarithmic Time):</strong> The execution time increases logarithmically with the input size. Typically seen in efficient search algorithms like binary search.</li>
              <li><strong>O(n) (Linear Time):</strong> The execution time increases linearly with the input size. Example: Traversing through all elements in an array.</li>
              <li><strong>O(n log n) (Linearithmic Time):</strong> The execution time grows slightly faster than linear. Common in efficient sorting algorithms like merge sort and quicksort (average case).</li>
              <li><strong>O(n^2) (Quadratic Time):</strong> The execution time increases quadratically with the input size. Often seen in simple nested loops.</li>
              <li><strong>O(2^n) (Exponential Time):</strong> The execution time grows exponentially with the input size. Typically found in algorithms that explore all possible solutions.</li>
              <li><strong>O(n!) (Factorial Time):</strong> The execution time grows extremely rapidly with the input size. Often seen in algorithms that involve permutations.</li>
            </ul>
          </li>
          <li><strong>Analyzing Algorithm Efficiency:</strong> When analyzing an algorithm, we focus on the dominant operations that contribute most to the runtime or space usage as the input size grows large. We then express this growth rate using Big O notation, ignoring constants and lower-order terms. For example, an algorithm with a runtime of <code>2n^2 + 3n + 1</code> is considered O(n^2).</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition of Big O notation, Its purpose in algorithm analysis, Explanation of common Big O notations with examples, Understanding of how to determine the Big O complexity of an algorithm.</p>
      `
},
{
  "question": "Explain the concept of 'normalization' in machine learning. Why is it important?",
  "description": "This question tests your understanding of a crucial preprocessing step in machine learning to ensure fair and efficient model training.",
  "hint": "Define normalization and explain how it scales numerical features to a similar range, addressing issues caused by features with vastly different scales.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of Normalization:</strong> Normalization is a data preprocessing technique used in machine learning to rescale numerical features to a standard range, typically between 0 and 1 or -1 and 1. The goal is to bring all features onto a similar scale without distorting the differences in the range of values.</li>
          <li><strong>Why Normalization is Important:</strong>
            <ul>
              <li><strong>Prevents Feature Dominance:</strong> Features with larger values might dominate the distance calculations used in many machine learning algorithms (e.g., k-Nearest Neighbors, support vector machines, neural networks). Normalization ensures that all features contribute more equally to the model.</li>
              <li><strong>Accelerates Convergence:</strong> Gradient descent-based optimization algorithms (used in training neural networks and other models) often converge faster when features are on a similar scale. Large differences in feature scales can lead to elongated gradients and slow down the learning process.</li>
              <li><strong>Improves Model Stability:</strong> Models can become unstable or produce unreliable results if they are sensitive to the scale of the input features. Normalization can help in making the training process more stable.</li>
              <li><strong>Regularization Effectiveness:</strong> Regularization techniques (like L1 and L2 regularization) are more effective when features are normalized. Without normalization, features with larger values might be penalized more heavily.</li>
              <li><strong>Algorithm Requirements:</strong> Some algorithms, like those based on distance measures, are particularly sensitive to feature scaling. Normalization is often a requirement for these algorithms to perform well.</li>
            </ul>
          </li>
          <li><strong>Common Normalization Techniques:</strong>
            <ul>
              <li><strong>Min-Max Scaling:</strong> Scales features to a range between 0 and 1 using the formula: <code>(x - min) / (max - min)</code>.</li>
              <li><strong>Z-score Standardization:</strong> Scales features to have a mean of 0 and a standard deviation of 1 using the formula: <code>(x - mean) / standard deviation</code>. This is less sensitive to outliers than min-max scaling.</li>
            </ul>
          </li>
          <li><strong>When to Use Normalization:</strong> Briefly mention that normalization is generally recommended for algorithms sensitive to feature scales and when features have significantly different ranges. However, it might not always be necessary for tree-based algorithms.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition of normalization, Clear explanation of its importance in preventing dominance, accelerating convergence, improving stability, and enhancing regularization, Mentioning common techniques like Min-Max scaling and Z-score standardization, Understanding when normalization is typically applied.</p>
      `
},
{
  "question": "Explain the concept of 'garbage collection' in Java (or another language with automatic memory management).",
  "description": "This question tests your understanding of how memory is automatically managed in certain programming languages.",
  "hint": "Define garbage collection and explain its purpose in reclaiming memory occupied by objects that are no longer in use by the application.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of Garbage Collection:</strong> Garbage collection is a form of automatic memory management. It is a process where the runtime environment (like the Java Virtual Machine - JVM) automatically reclaims memory that is no longer being used by the program. This frees up memory for new object allocations.</li>
          <li><strong>Purpose of Garbage Collection:</strong>
            <ul>
              <li><strong>Automatic Memory Management:</strong> Relieves the programmer from the responsibility of explicitly allocating and deallocating memory (as in languages like C and C++ using <code>malloc</code>/<code>free</code> or <code>new</code>/<code>delete</code>).</li>
              <li><strong>Prevents Memory Leaks:</strong> Helps in preventing memory leaks, which occur when memory that is no longer needed is not released, leading to increased memory consumption and potential application crashes.</li>
              <li><strong>Simplifies Development:</strong> Allows developers to focus more on the application logic rather than manual memory management.</li>
            </ul>
          </li>
          <li><strong>How Garbage Collection Works (General Overview):</strong>
            <ul>
              <li>The garbage collector periodically identifies objects that are no longer reachable by the application (i.e., there are no active references to them).</li>
              <li>Once these unreachable objects are identified, the memory they occupy is reclaimed and made available for future object allocations.</li>
              <li>Different garbage collection algorithms exist (e.g., Mark and Sweep, Generational Garbage Collection) with varying approaches to identify and reclaim memory.</li>
            </ul>
          </li>
          <li><strong>Garbage Collection in Java (Example):</strong> In Java, the JVM's garbage collector runs in the background. Developers can suggest to the JVM that it might be a good time to run the garbage collector using <code>System.gc()</code>, but the JVM ultimately decides when and how to perform garbage collection.</li>
          <li><strong>Trade-offs:</strong> Briefly mention that while garbage collection simplifies development and prevents many memory-related issues, it can introduce some performance overhead and unpredictability (garbage collection pauses).</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition of garbage collection, Its purpose and benefits, General understanding of how it works, Example in a specific language (like Java), Awareness of potential trade-offs.</p>
      `
},
{
  "question": "Explain the concept of 'RESTful APIs'. What are some of the key principles of REST?",
  "description": "This question tests your understanding of a widely used architectural style for designing networked applications.",
  "hint": "Define REST and then elaborate on its key principles like Statelessness, Client-Server, Cacheability, Layered System, Uniform Interface, and Code on Demand (optional).",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of RESTful APIs:</strong> REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs are designed to be stateless, meaning that the server does not store any client state between requests. Each request from a client to a server contains all the information needed to understand the request.</li>
          <li><strong>Key Principles of REST:</strong>
            <ul>
              <li><strong>Statelessness:</strong> Each request from the client to the server must contain all the information needed to understand the request. The server does not store any session state about the client between requests. Session state is entirely kept on the client.</li>
              <li><strong>Client-Server:</strong> The client and server operate independently. The client is responsible for the user interface and user experience, while the server is responsible for data storage and management. This separation of concerns allows each to evolve independently.</li>
              <li><strong>Cacheability:</strong> Responses from the server should be cacheable by the client to improve performance and reduce server load. Responses should indicate whether they are cacheable and for how long.</li>
              <li><strong>Layered System:</strong> The architecture can be composed of multiple layers (e.g., client, load balancer, server, database). Each layer should not need to know about layers beyond the immediate next layer. This promotes modularity and flexibility.</li>
              <li><strong>Uniform Interface:</strong> This is the core of REST and consists of several constraints:
                <ul>
                  <li><strong>Resource Identification:</strong> Resources are identified using URIs (Uniform Resource Identifiers).</li>
                  <li><strong>Resource Manipulation Through Representations:</strong> Clients manipulate resources by exchanging representations (e.g., JSON, XML) of these resources.</li>
                  <li><strong>Self-Descriptive Messages:</strong> Each message contains enough information to describe how to process the message (e.g., using media types).</li>
                  <li><strong>Hypermedia As The Engine Of Application State (HATEOAS):</strong> Clients should be able to navigate the API by following hypermedia links within the responses. (This is an optional but important constraint).</li>
                </ul>
              </li>
              <li><strong>Code on Demand (Optional):</strong> Servers can optionally provide executable code to the client, extending client functionality. (This is less commonly implemented).</li>
            </ul>
          </li>
          <li><strong>Benefits of REST:</strong> Briefly mention advantages like scalability, flexibility, platform independence, and ease of understanding.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition of REST, Clear explanation of each of the key principles with their benefits, Understanding of the Uniform Interface constraints.</p>
      `
},
{
  "question": "Explain the concept of 'virtual functions' in C++.",
  "description": "This question tests your understanding of polymorphism at runtime in C++.",
  "hint": "Define virtual functions and explain how they enable dynamic method dispatch through a vtable.",
  "answer": `
        <p><strong>Sample Answer Structure:</strong></p>
        <ol>
          <li><strong>Definition of Virtual Functions:</strong> In C++, a virtual function is a member function declared within a base class using the keyword <code>virtual</code>. When a virtual function is called through a pointer or reference of the base class type that actually refers to an object of a derived class, the version of the function that is executed is the one defined in the derived class. This is known as runtime polymorphism or dynamic dispatch.</li>
          <li><strong>Purpose of Virtual Functions:</strong>
            <ul>
              <li><strong>Achieving Runtime Polymorphism:</strong> Allows objects of different classes to be treated uniformly through a base class interface, while still executing the behavior specific to their actual type.</li>
              <li><strong>Enabling Method Overriding:</strong> Derived classes can override (redefine) virtual functions inherited from the base class to provide their own specific implementation.</li>
              <li><strong>Supporting Inheritance Hierarchies:</strong> Crucial for building flexible and extensible class hierarchies where base classes define a common interface, and derived classes implement it in their own way.</li>
            </ul>
          </li>
          <li><strong>How Virtual Functions Work (Vtable and Vpointer):</strong>
            <ul>
              <li>When a class contains one or more virtual functions, the compiler creates a <strong>virtual table (vtable)</strong> for that class. The vtable is a static array that contains the addresses of the virtual functions defined in that class.</li>
              <li>Each object of a class with virtual functions contains a hidden pointer called the <strong>virtual pointer (vpointer)</strong>. The vpointer points to the vtable of its class.</li>
              <li>When a virtual function is called through a base class pointer or reference, the program uses the vpointer of the actual object to find the correct vtable and then calls the function address stored in the vtable. This lookup happens at runtime.</li>
            </ul>
          </li>
          <li><strong>Example (C++):</strong>
            <pre><code class="language-cpp">#include <iostream>

            class Base {
            public:
                virtual void display() {
                    std::cout << "Base class display" << std::endl;
                }
            };

            class Derived : public Base {
            public:
                void display() override {
                    std::cout << "Derived class display" << std::endl;
                }
            };

            int main() {
                Base* ptr;
                Derived d;
                ptr = &d;
                ptr->display(); // Calls Derived::display() due to 'virtual'
                return 0;
            }
            </code></pre>
          </li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Definition of virtual functions, Their purpose in achieving runtime polymorphism, Explanation of vtable and vpointer mechanism, A clear code example demonstrating virtual function behavior.</p>
      `
},
{
  "question": "Tell me about a time you faced a challenging situation at work (or in a project/academics) and how you handled it.",
  "description": "This behavioral question assesses your problem-solving skills, resilience, and ability to learn from difficult experiences.",
  "hint": "Use the STAR method (Situation, Task, Action, Result) to structure your answer. Focus on your role, the specific actions you took, and the outcome.",
  "answer": `
        <p><strong>Sample Answer Structure (Using the STAR Method):</strong></p>
        <ol>
          <li><strong>Situation:</strong> Briefly describe the context of the challenging situation. What was the project, team, or academic setting? What was the specific problem or obstacle you faced?</li>
          <li><strong>Task:</strong> Clearly outline your responsibility and what you needed to achieve in that situation. What was your goal?</li>
          <li><strong>Action:</strong> Detail the specific steps you took to address the challenge. What did you do? How did you approach the problem? Mention any specific skills or strategies you employed (e.g., problem-solving, communication, collaboration, research).</li>
          <li><strong>Result:</strong> Explain the outcome of your actions. What was the result? What did you learn from the experience? Even if the outcome wasn't entirely successful, focus on what you learned and how you would approach a similar situation differently in the future.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Clear articulation of the situation, Your specific role and actions, Problem-solving approach, Skills demonstrated, The outcome and lessons learned. Be honest and focus on your learning and growth.</p>
      `
},
{
    "question": "Tell me about a time you failed.",
    "description": "This behavioral question assesses your self-awareness, honesty, and ability to learn from mistakes.",
    "hint": "Choose a situation where the failure wasn't catastrophic and focus on what you learned and how you grew from the experience. Avoid blaming others.",
    "answer": `
      <p><strong>Sample Answer Structure (Focus on Learning and Growth):</strong></p>
      <ol>
        <li><strong>Situation:</strong> Briefly describe the situation and your role. What was the goal you were trying to achieve?</li>
        <li><strong>Task:</strong> What were your specific responsibilities in that situation?</li>
        <li><strong>Action:</strong> What specific actions did you take that led to the failure? Be honest about your part in it.</li>
        <li><strong>Result and Learning:</strong> What was the outcome of the situation? More importantly, what did you learn from this failure? How has this experience influenced your approach to similar situations in the future? Emphasize the positive lessons learned and your commitment to improvement.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Honesty, Taking responsibility, Focus on learning, Demonstrating growth mindset, Avoiding blame.</p>
    `
  },
  {
    "question": "Why are you leaving your current (or previous) job?",
    "description": "This question helps the interviewer understand your motivations for seeking new employment. Be professional and focus on positive reasons.",
    "hint": "Frame your answer positively, focusing on seeking new opportunities for growth, learning, or alignment with your career goals. Avoid negative comments about your previous employer or colleagues.",
    "answer": `
      <p><strong>Sample Answer Structure (Focus on Positive Reasons):</strong></p>
      <ol>
        <li><strong>Focus on Growth:</strong> Express your desire to seek new challenges, expand your skill set, and take on more responsibility.</li>
        <li><strong>Career Alignment:</strong> Mention how this new opportunity aligns better with your long-term career goals and interests.</li>
        <li><strong>Company/Role Specifics:</strong> If applicable, you can mention your interest in this specific company, its reputation, or the unique aspects of the role that attracted you.</li>
        <li><strong>Professionalism:</strong> Keep your answer professional and avoid any negative remarks about your previous employer, colleagues, or the reasons for leaving.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Positive framing, Focus on growth and opportunity, Alignment with career goals, Professionalism.</p>
    `
  },
  {
    "question": "Describe your ideal work environment.",
    "description": "This question helps the interviewer understand your preferences and whether you would be a good fit for the company's culture.",
    "hint": "Think about the aspects of a work environment that help you be most productive and engaged. Consider factors like teamwork, communication, learning opportunities, and work-life balance.",
    "answer": `
      <p><strong>Sample Answer Structure (Focus on Productivity and Engagement):</strong></p>
      <ol>
        <li><strong>Collaboration and Teamwork:</strong> Highlight the importance of a collaborative environment where team members support each other and work towards common goals.</li>
        <li><strong>Open Communication:</strong> Emphasize the value of clear and open communication channels where feedback is encouraged.</li>
        <li><strong>Learning and Growth:</strong> Mention opportunities for continuous learning, skill development, and professional growth.</li>
        <li><strong>Positive and Supportive Culture:</strong> Describe an environment where there is mutual respect, recognition, and a positive attitude.</li>
        <li><strong>(Optional) Work-Life Balance:</strong> If important to you, you can briefly mention the importance of a healthy work-life balance.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Focus on positive attributes, Alignment with potential company culture (if known), Emphasis on productivity and engagement.</p>
    `
  },
  {
    "question": "How do you handle stress and pressure?",
    "description": "This behavioral question assesses your coping mechanisms and ability to perform effectively under challenging circumstances.",
    "hint": "Describe specific strategies you use to manage stress, such as time management, prioritization, breaking down tasks, seeking support, or taking breaks.",
    "answer": `
      <p><strong>Sample Answer Structure (Focus on Strategies and Effectiveness):</strong></p>
      <ol>
        <li><strong>Acknowledge and Identify:</strong> Briefly mention that you recognize that stress and pressure are normal in a work environment.</li>
        <li><strong>Specific Strategies:</strong> Describe the specific techniques you use to manage stress, such as:
          <ul>
            <li>Prioritization and time management.</li>
            <li>Breaking down large tasks into smaller, manageable steps.</li>
            <li>Seeking clarification and support when needed.</li>
            <li>Taking short breaks to recharge.</li>
            <li>Maintaining a healthy work-life balance (if applicable).</li>
          </ul>
        </li>
        <li><strong>Stay Calm and Focused:</strong> Emphasize your ability to remain calm and focused on finding solutions even under pressure.</li>
        <li><strong>Learn from Stressful Situations:</strong> Mention that you view challenging situations as opportunities for growth and learning.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Proactive strategies, Calmness under pressure, Problem-solving focus, Learning from experience.</p>
    `
  },
  {
    "question": "What are your salary expectations?",
    "description": "This question assesses your understanding of your market value. Be prepared to give a reasonable range.",
    "hint": "Research salary ranges for similar roles in your location and with your experience. Provide a range rather than a specific number, and express flexibility.",
    "answer": `
      <p><strong>Sample Answer Structure (Focus on Research and Flexibility):</strong></p>
      <ol>
        <li><strong>Acknowledge Research:</strong> Mention that you have researched salary ranges for similar roles with your experience in [your location].</li>
        <li><strong>Provide a Range:</strong> State a salary range that is competitive and reflects your skills and experience. For example, "Based on my research and experience, I'm looking for a salary in the range of [Lower Range] to [Upper Range] per annum."</li>
        <li><strong>Consider Total Compensation:</strong> You can also briefly mention that you are open to discussing the total compensation package, including benefits and other perks.</li>
        <li><strong>Express Flexibility:</strong> Show that you are open to further discussion and understanding the full scope of the role and responsibilities.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Research-based range, Flexibility, Consideration of total compensation, Professionalism.</p>
    `
  },
  {
    "question": "Describe a time you worked effectively as part of a team.",
    "description": "This behavioral question assesses your teamwork and collaboration skills.",
    "hint": "Use the STAR method to describe a situation where you contributed to a team's success, highlighting your specific role and actions.",
    "answer": `
      <p><strong>Sample Answer Structure (Using the STAR Method):</strong></p>
      <ol>
        <li><strong>Situation:</strong> Briefly describe the team, its goal, and the context of the situation.</li>
        <li><strong>Task:</strong> What was your specific role and responsibilities within the team?</li>
        <li><strong>Action:</strong> Describe the specific actions you took to contribute to the team's effectiveness. Did you communicate proactively? Offer support? Share your expertise? Help resolve conflicts?</li>
        <li><strong>Result:</strong> What was the outcome of the team's efforts? What was your contribution to that success? What did you learn about teamwork from this experience?</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Your specific role, Actions demonstrating teamwork, Communication skills, Collaboration, Positive contribution to the team's success.</p>
    `
  },
  {
    "question": "Tell me about a time you had to deal with a difficult client or customer.",
    "description": "This behavioral question assesses your customer service and conflict resolution skills.",
    "hint": "Focus on your approach to understanding the client's perspective, remaining professional, and finding a resolution.",
    "answer": `
      <p><strong>Sample Answer Structure (Focus on Understanding and Resolution):</strong></p>
      <ol>
        <li><strong>Situation:</strong> Briefly describe the situation and the nature of the difficult client or customer. What was the issue?</li>
        <li><strong>Task:</strong> What was your responsibility in addressing the client's concerns?</li>
        <li><strong>Action:</strong> Describe the steps you took to handle the situation. Did you actively listen? Empathize with their frustration? Ask clarifying questions? What solutions did you propose or implement? How did you maintain professionalism?</li>
        <li><strong>Result:</strong> What was the outcome of your efforts? Were you able to resolve the issue to the client's satisfaction (or reach a reasonable compromise)? What did you learn from this experience about handling difficult interactions?</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Active listening, Empathy, Professionalism, Problem-solving, Conflict resolution skills, Focus on a positive outcome or learning experience.</p>
    `
  },
  {
    "question": "Where do you see yourself in 1-2 years?",
    "description": "This question assesses your short-term career goals and your understanding of the immediate opportunities within the role.",
    "hint": "Show that you are focused on learning and contributing in the short term and that your immediate goals align with the position.",
    "answer": `
      <p><strong>Sample Answer Structure (Focus on Immediate Contribution and Learning):</strong></p>
      <ol>
        <li><strong>Initial Focus:</strong> Emphasize your desire to quickly learn the role, understand the team dynamics, and become a productive member.</li>
        <li><strong>Skill Development:</strong> Mention specific skills you hope to develop or enhance within the first 1-2 years in this position.</li>
        <li><strong>Contribution to the Team/Company:</strong> Express your goal of making a meaningful contribution to the team's objectives and the company's success in the near term.</li>
        <li><strong>Growth within the Role:</strong> Indicate your interest in taking on increasing responsibility and potentially contributing to specific projects or initiatives as you gain experience.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Focus on immediate learning and contribution, Realistic short-term goals, Alignment with the role's potential, Enthusiasm to become a valuable team member.</p>
    `
  },
  {
    "question": "What motivates you?",
    "description": "This question helps the interviewer understand your drivers and what makes you passionate about your work.",
    "hint": "Think about what genuinely excites you about your profession and what keeps you engaged and productive.",
    "answer": `
      <p><strong>Sample Answer Structure (Focus on Intrinsic Motivation):</strong></p>
      <ol>
        <li><strong>Focus on Meaningful Work:</strong> Highlight the importance of work that you find engaging, challenging, and that allows you to make a positive impact.</li>
        <li><strong>Learning and Growth:</strong> Mention your motivation to continuously learn new skills, expand your knowledge, and take on new challenges.</li>
        <li><strong>Problem-Solving and Achievement:</strong> Express your drive to solve complex problems and achieve tangible results.</li>
        <li><strong>Collaboration and Team Success:</strong> If applicable, mention your motivation from working effectively with a team and contributing to shared success.</li>
        <li><strong>(Optional) Specific Industry/Role Aspects:</strong> You can also mention aspects specific to the industry or the role that you find particularly motivating.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Intrinsic motivators, Alignment with professional values, Examples of what drives you, Enthusiasm for your field.</p>
    `
  },
  {
    "question": "How do you stay organized?",
    "description": "This question assesses your ability to manage your workload and maintain efficiency.",
    "hint": "Describe the specific tools, techniques, or systems you use to stay organized, such as to-do lists, calendars, project management software, or prioritization methods.",
    "answer": `
      <p><strong>Sample Answer Structure (Focus on Tools and Techniques):</strong></p>
      <ol>
        <li><strong>Tools and Systems:</strong> Describe the specific tools or systems you use to stay organized (e.g., digital calendars, to-do list apps, project management software like Trello or Asana, notebooks).</li>
        <li><strong>Prioritization Methods:</strong> Explain how you prioritize tasks (e.g., using the Eisenhower Matrix, focusing on deadlines, identifying high-impact tasks).</li>
        <li><strong>Time Management Techniques:</strong> Mention any time management techniques you employ (e.g., time blocking, setting realistic deadlines).</li>
        <li><strong>Regular Review and Adjustment:</strong> Highlight the importance of regularly reviewing your tasks and adjusting your plan as needed.</li>
        <li><strong>Clear Communication and Documentation:</strong> Explain how clear communication and thorough documentation help you stay organized, especially in team settings.</li>
      </ol>
      <p><strong>Key Aspects to Highlight:</strong> Specific tools and techniques, Structured approach to organization, Proactive planning, Adaptability.</p>
    `
  },
  {
    "question": "Write a program to find the first non-repeating character in a string.",
    "description": "Tests your ability to use hash maps and string traversal.",
    "hint": "Use a frequency map to count occurrences, then find the first with count 1.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">def first_non_repeating_char(s):
    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1
    for ch in s:
        if freq[ch] == 1:
            return ch
    return None
      </code></pre>
    `
  },
  {
    "question": "Check if a given linked list has a cycle.",
    "description": "Evaluates knowledge of linked list and Floyd’s cycle detection.",
    "hint": "Use two pointers moving at different speeds.",
    "answer": `
      <p><strong>Sample Answer (Java):</strong></p>
      <pre><code class="language-java">class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public boolean hasCycle(ListNode head) {
    if (head == null) return false;
    ListNode slow = head, fast = head.next;
    while (fast != null && fast.next != null) {
        if (slow == fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
}
      </code></pre>
    `
  },
  {
    "question": "Find the kth largest element in an unsorted array.",
    "description": "Tests sorting or heap data structure understanding.",
    "hint": "Use a min-heap of size k or sort the array.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">import heapq

def kth_largest(nums, k):
    return heapq.nlargest(k, nums)[-1]
      </code></pre>
    `
  },
  {
    "question": "Reverse a string without using extra space.",
    "description": "Evaluates in-place array/string manipulation skills.",
    "hint": "Use two-pointer approach to swap characters.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}
      </code></pre>
    `
  },
  {
    "question": "Implement binary search on a sorted array.",
    "description": "Tests searching algorithms knowledge.",
    "hint": "Use iterative or recursive approach dividing the search space.",
    "answer": `
      <p><strong>Sample Answer (Python):</strong></p>
      <pre><code class="language-python">def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
      </code></pre>
    `
  }
    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});