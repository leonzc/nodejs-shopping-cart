
DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `book_id` int(20) NOT NULL AUTO_INCREMENT,
  `book_image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `publish_date` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `short_description` varchar(255),
  `description` text,
  PRIMARY KEY (`book_id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `book` (`book_image`, `title`, `author`, `publish_date`, `price`, `short_description`, `description`) VALUES
('effectivejava.jpg', 'EFFECTIVE JAVA', 'Joshua Bloch', 'December 27, 2017', '66.05', 'The Definitive Guide to Java Platform Best Practices—Updated for Java 7, 8, and 9', 'The Definitive Guide to Java Platform Best Practices—Updated for Java 7, 8, and 9
Java has changed dramatically since the previous edition of Effective Java was published shortly after the release of Java 6. This Jolt award-winning classic has now been thoroughly updated to take full advantage of the latest language and library features. The support in modern Java for multiple paradigms increases the need for specific best-practices advice, and this book delivers.
As in previous editions, each chapter of Effective Java, Third Edition, consists of several “items,” each presented in the form of a short, stand-alone essay that provides specific advice, insight into Java platform subtleties, and updated code examples. The comprehensive descriptions and explanations for each item illuminate what to do, what not to do, and why.
The third edition covers language and library features added in Java 7, 8, and 9, including the functional programming constructs that were added to its object-oriented roots. Many new items have been added, including a chapter devoted to lambdas and streams.
New coverage includes
Functional interfaces, lambda expressions, method references, and streams
Default and static methods in interfaces
Type inference, including the diamond operator for generic types
The @SafeVarargs annotation
The try-with-resources statement
New library features such as the Optional interface, java.time, and the convenience factory methods for collection
Register your product at informit.com/register for convenient access to the web edition eBook, updates, and/or corrections as they become available.');

INSERT INTO `book` (`book_image`, `title`, `author`, `publish_date`, `price`, `short_description`, `description`) VALUES
('designpatterns.jpg', 'DESIGN PATTERNS', 'Erich Gamma, Richard Helm, Ralph Johnson', 'October 31, 1994', '45.3', 'Design Patterns: Elements of Reusable Object-Oriented Software', 'This book isn''t an introduction to object-oriented technology or design. Many books already do a good job of that. This book assumes you are reasonably proficient in at least one object-oriented programming language, and you should have some experience in object-oriented design as well. You definitely shouldn''t to the nearest dictionary the moment we mention "types" and"polymorphism," or "interface" as opposed to "implementation" inheritance.
On the other hand, this isn''t an advanced technical treatise either. It''s a book of design patterns that describes simple and elegant solutions to specific problems in object-oriented software design. Design patterns capture solutions that have developed and evolved over time. Hence they aren''t the designs people They reflect untold redesign and recoding as developers have struggled for greater reuse and flexibility in their software.Design patterns capture these solutions in a succinct and easily applied form.
The design patterns require neither unusual language features nor amazing programming tricks with which to astound your friends and managers. All can be implemented in standard object-oriented languages, though they might take a little more work than ad hoc solutions. But the extra effort invariably pays dividends in increased flexibility and reusability.Once you understand the design patterns and have had an "Aha!" and not just a "Huh?" experience with them, you won''t ever think about object-oriented design in the same way. You''ll have insights that can make your own designs more flexible, modular, reusable, and understandable - which is why you''re interested in object-oriented technology in the first place, right?
A word of warning and encouragement: Don''t worry if you don''t understand this book completely on the first reading. We didn''t understand it all on the first writing! Remember that this isn''t a book to read once and put on a shelf. We hope you''ll find yourself referring to it again and again for design insights and for inspiration.This book has had a long gestation. It has seen four countries, three of its authors'' marriages, and the birth of two unrelated offspring.Many people have had a part in its development. Special thanks are due Bruce Andersen, Kent Beck, and Andre Weinand for their inspiration and advice. We also thank those who reviewed drafts of the manuscript: Roger Bielefeld, Grady Booch, Tom Cargill, Marshall Cline, Ralph Hyre, Brian Kernighan, Thomas Laliberty, Mark Lorenz, Arthur Riel, Doug Schmidt, Clovis Tondo, Steve Vinoski, and Rebecca Wirfs-Brock. We are also grateful to the team at Addison-Wesley for their help and patience: Kate Habib, Tiffany Moore, Lisa Raffaele, Pradeepa Siva, and John Wait. Special thanks to Carl Kessler, Danny Sabbah, and Mark Wegman at IBM Research for their unflagging support of this work.Last but certainly not least, we thank everyone on the Internet and points beyond who commented on versions of the patterns, offered encouraging words, and told us that what we were doing was worthwhile. 
These people include but are not limited to Ran Alexander, Jon Avotins, Steve Berczuk, Julian Berdych, Matthias Bohlen, John Brant, Allan Clarke, Paul Chisholm, Jens Coldewey, Dave Collins, Jim Coplien, Don Dwiggins, Gabriele Elia, Doug Felt, Brian Foote, Denis Fortin, Ward Harold, Hermann Hueni, Nayeem Islam, Bikramjit Kalra, Paul Keefer, Thomas Kofler, Doug Lea, Dan LaLiberte, James Long, Ann Louise Luu, Pundi Madhavan, Brian Marick, Robert Martin, Dave McComb, Carl McConnell, Christine Mingins, Hanspeter Mossenbock, Eric Newton, Marianne Ozcan, Roxsan Payette, Larry Podmolik, George Radin, Sita Ramakrishnan, Russ Ramirez, Dirk Riehle, Bryan Rosenburg, Aamod Sane, Duri Schmidt, Robert Seidl, Xin Shu, and Bill Walker.We don''t consider this collection of design patterns complete and static; it''s more a recording of our current thoughts on design. We welcome comments on it, whether criticisms of our examples, references and known uses we''ve missed, or design patterns we should have included. You can write us care of Addison-Wesley, or send electronic mail to design-patterns@cs.uiuc.edu . You can also obtain softcopy for the code in the Sample Code sections by sending the message "send design pattern source" to design-patterns-source@cs.uiuc.edu .Mountain View, California - E.G.Montreal, Quebec - R.H.Urbana, Illinois - R.J.Hawthorne, New York - J.V.August 1994 0201633612P04062001');

INSERT INTO `book` (`book_image`, `title`, `author`, `publish_date`, `price`, `short_description`, `description`) VALUES
('microservicearchitecture.jpg', 'MICROSERVICE ARCHITECTURE', 'Irakli Nadareishvili, Ronnie Mitra, Matt Mclarty', 'August 5, 2016', '42.95', 'Microservice Architecture: Aligning principles, practices, and culture', 'Microservices can have a positive impact on your enterprise—just ask Amazon and Netflix—but you can fall into many traps if you don’t approach them in the right way. This practical guide covers the entire microservices landscape, including the principles, technologies, and methodologies of this unique, modular style of system building. You’ll learn about the experiences of organizations around the globe that have successfully adopted microservices.
In three parts, this book explains how these services work and what it means to build an application the Microservices Way. You’ll explore a design-based approach to microservice architecture with guidance for implementing various elements. And you’ll get a set of recipes and practices for meeting practical, organizational, and cultural challenges to microservice adoption.
Learn how microservices can help you drive business objectives
Examine the principles, practices, and culture that define microservice architectures
Explore a model for creating complex systems and a design process for building a microservice architecture
Learn the fundamental design concepts for individual microservices
Delve into the operational elements of a microservices architecture, including containers and service discovery
Discover how to handle the challenges of introducing microservice architecture in your organization');

INSERT INTO `book` (`book_image`, `title`, `author`, `publish_date`, `price`, `short_description`, `description`) VALUES
('python.jpg', 'PROGRAMMING PYTHON', 'Lutz, Mark', 'January 10, 2011', '54.55', 'Programming Python: Powerful Object-Oriented Programming', 'If you''ve mastered Python''s fundamentals, you''re ready to start using it to get real work done.Programming Pythonwill show you how, with in-depth tutorials on the language''s primary application domains: system administration, GUIs, and the Web. You''ll also explore how Python is used in databases, networking, front-end scripting layers, text processing, and more. This book focuses on commonly used tools and libraries to give you a comprehensive understanding of Python’s many roles in practical, real-world programming.
You''ll learn language syntax and programming techniques in a clear and concise manner, with lots of examples that illustrate both correct usage and common idioms. Completely updated for version 3.x,Programming Pythonalso delves into the language as a software development tool, with many code examples scaled specifically for that purpose.
Topics include:
Quick Python tour:Build a simple demo that includes data representation, object-oriented programming, object persistence, GUIs, and website basics
System programming:Explore system interface tools and techniques for command-line scripting, processing files and folders, running programs in parallel, and more
GUI programming:Learn to use Python’s tkinter widget library
Internet programming:Access client-side network protocols and email tools, use CGI scripts, and learn website implementation techniques
More ways to apply Python:Implement data structures, parse text-based information, interface with databases, and extend and embed Python');


INSERT INTO `book` (`book_image`, `title`, `author`, `publish_date`, `price`, `short_description`, `description`) VALUES
('machinelearning.jpg', 'INTRODUCTION TO MACHINE LEARNING WITH PYTHON', 'Andreas C. Müller', 'October 21, 2016', '52.45', 'You’ll learn the steps necessary to create a successful machine-learning application with Python and the scikit-learn library. ', 'Machine learning has become an integral part of many commercial applications and research projects, but this field is not exclusive to large companies with extensive research teams. If you use Python, even as a beginner, this book will teach you practical ways to build your own machine learning solutions. With all the data available today, machine learning applications are limited only by your imagination.
You’ll learn the steps necessary to create a successful machine-learning application with Python and the scikit-learn library. Authors Andreas Müller and Sarah Guido focus on the practical aspects of using machine learning algorithms, rather than the math behind them. Familiarity with the NumPy and matplotlib libraries will help you get even more from this book.
With this book, you’ll learn:
Fundamental concepts and applications of machine learning
Advantages and shortcomings of widely used machine learning algorithms
How to represent data processed by machine learning, including which data aspects to focus on
Advanced methods for model evaluation and parameter tuning
The concept of pipelines for chaining models and encapsulating your workflow
Methods for working with text data, including text-specific processing techniques
Suggestions for improving your machine learning and data science skills');

INSERT INTO `book` (`book_image`, `title`, `author`, `publish_date`, `price`, `short_description`, `description`) VALUES
('kubernetes.jpg', 'KUBERNETES IN ACTION', 'Marko Luksa', 'January 20, 2018', '62.95', 'Kubernetes in Action is a comprehensive guide to effectively developing and running applications in a Kubernetes environment.', 'Summary
Kubernetes in Action is a comprehensive guide to effectively developing and running applications in a Kubernetes environment. Before diving into Kubernetes, the book gives an overview of container technologies like Docker, including how to build containers, so that even readers who haven''t used these technologies before can get up and running.Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications.
About the Technology
Kubernetes is Greek for "helmsman," your guide through unknown waters. The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs.
About the Book
Kubernetes in Action teaches you to use Kubernetes to deploy container-based distributed applications. You''ll start with an overview of Docker and Kubernetes before building your first Kubernetes cluster. You''ll gradually expand your initial application, adding features and deepening your knowledge of Kubernetes architecture and operation. As you navigate this comprehensive guide, you''ll explore high-value topics like monitoring, tuning, and scaling.');


INSERT INTO `book` (`book_image`, `title`, `author`, `publish_date`, `price`, `short_description`, `description`) VALUES
('enterprisecloud.jpg', 'ENTERPRISE CLOUD COMPUTING', 'Gautam Shroff', 'November 22, 2010', '63.05', 'Enterprise Cloud Computing: Technology, Architecture, Applications', 'Cloud computing promises to revolutionize IT and business by making computing available as a utility over the internet. This book is intended primarily for practising software architects who need to assess the impact of such a transformation. It explains the evolution of the internet into a cloud computing platform, describes emerging development paradigms and technologies, and discusses how these will change the way enterprise applications should be architected for cloud deployment. Gautam Shroff provides a technical description of cloud computing technologies, covering cloud infrastructure and platform services, programming paradigms such as MapReduce, as well as ''do-it-yourself'' hosted development tools. He also describes emerging technologies critical to cloud computing. The book also covers the fundamentals of enterprise computing, including a technical introduction to enterprise architecture, so it will interest programmers aspiring to become software architects and serve as a reference for a graduate-level course in software architecture or software engineering.');


INSERT INTO `book` (`book_image`, `title`, `author`, `publish_date`, `price`, `short_description`, `description`) VALUES
('fullstack.jpg', 'FULL STACK JAVASCRIPT DEVELOPMENT WITH MEAN', 'Colin J Ihrig, Adam Bretz', 'January 3, 2015', '33.70', 'This book explores the MEAN stack in detail: MongoDB, Express, AngularJS, and Node.js ', 'With modern tools. it is possible to create a production grade, full-stack application using HTML, CSS, and JavaScript alone. The combination of MongoDB, Express, AngularJS, and Node.js has become so popular that it has earned the title MEAN stack -- the subject of this book.
This book explores the MEAN stack in detail. We will begin by covering Node.js, as it will lay the groundwork for all of our server-side work. You will learn how to get Node running on your local machine as well as download modules using npm. The key aspects of the Node.js programming model will also be covered.
From there, we will move on to MongoDB, where you''ll learn how to interact with Mongo from a Node application. You will also learn how to create, retrieve, update, and delete data from a Mongo store.
After you have a solid grasp on Node and Mongo, the book will move on to the Express web server. We''ll cover the basics of Express applications via topics like routes and middleware. Building on previous chapters, we will cover the integration of Node, Mongo, and Express.
Our coverage of the MEAN stack will wrap up with several chapters on AngularJS. These chapters will cover Angular fundamentals like data binding, directives, controllers, routing, and services. In an effort to explore competing technologies, a slight introduction to Ember.js will also be provided.
Full stack JavaScriptis not fully encompassed by the MEAN stack. There is an entire ecosystem of JavaScript tools to learn about, and this book will introduce a few of them. We will cover task runners Gulp.js and Grunt.js which are extremely useful for automating mundane, repetitive tasks. We''ll also cover JSHint, a linting tool used to improve code quality. Linting tools analyze source code and report potentials issues - a feature that is especially useful in non-compiled languages like JavaScript.');

INSERT INTO `book` (`book_image`, `title`, `author`, `publish_date`, `price`, `short_description`, `description`) VALUES
('blockchain.jpg', 'BLOCKCHAIN: BLUEPRINT FOR A NEW ECONOMY', 'Melanie Swan', 'February 8, 2015', '27.50', 'Author Melanie Swan, Founder of the Institute for Blockchain Studies, explains that the blockchain is essentially a public ledger with potential as a worldwide, decentralized record for the registration, inventory, and transfer of all assets', 
'Bitcoin is starting to come into its own as a digital currency, but the blockchain technology behind it could prove to be much more significant. This book takes you beyond the currency ("Blockchain 1.0") and smart contracts ("Blockchain 2.0") to demonstrate how the blockchain is in position to become the fifth disruptive computing paradigm after mainframes, PCs, the Internet, and mobile/social networking.
Author Melanie Swan, Founder of the Institute for Blockchain Studies, explains that the blockchain is essentially a public ledger with potential as a worldwide, decentralized record for the registration, inventory, and transfer of all assets—not just finances, but property and intangible assets such as votes, software, health data, and ideas.
Topics include:
Concepts, features, and functionality of Bitcoin and the blockchain
Using the blockchain for automated tracking of all digital endeavors
Enabling censorship?resistant organizational models
Creating a decentralized digital repository to verify identity
Possibility of cheaper, more efficient services traditionally provided by nations
Blockchain for science: making better use of the data-mining network
Personal health record storage, including access to one’s own genomic data
Open access academic publishing on the blockchain
This book is part of an ongoing O’Reilly series.Mastering Bitcoin: Unlocking Digital Crypto-Currenciesintroduces Bitcoin and describes the technology behind Bitcoin and the blockchain.Blockchain: Blueprint for a New Economyconsiders theoretical, philosophical, and societal impact of cryptocurrencies and blockchain technologies.');


DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `customer_id` int(20) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255),
  `street` varchar(255),
  `city` varchar(255),
  `province` varchar(255),
  `country` varchar(255),
  `zipcode` varchar(255),
  PRIMARY KEY (`customer_id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `customer` (`first_name`, `last_name`, `email`, `password`, `phone_number`, `street`, `city`, `province`, `country`, `zipcode`) VALUES
('John', 'Smith', 'test1@test.com', 'password', '647-334-0900', '20 King Street', 'Toronto', 'ON', 'Canada', 'P3P 0R5');

INSERT INTO `customer` (`first_name`, `last_name`, `email`, `password`, `phone_number`, `street`, `city`, `province`, `country`, `zipcode`) VALUES
('Jack', 'Woo', 'test2@test.com', 'password', '647-334-0940', '25 King Street', 'Toronto', 'ON', 'Canada', 'P3P 0R7');

DROP TABLE IF EXISTS `sellsorder`;

CREATE TABLE `sellsorder` (
  `order_id` int(20) NOT NULL AUTO_INCREMENT,
  `order_datetime` varchar(255),
  `totalPrice` double NOT NULL,
  `customer_id` int(20) NOT NULL,
  PRIMARY KEY (`order_id`)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `orderitem`;

CREATE TABLE `orderitem` (
  `orderitem_id` int(20) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `order_id` int(20) NOT NULL,
  `book_id` int(20) NOT NULL,
  `item_total` double NOT NULL,
  PRIMARY KEY (`orderitem_id`)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



