## URL of Website

https://kailinc.github.io/airkicks-front-end/

## Technologies Used

-   Ruby on Rails
-   Bootstrap
-   Handlebars.js
-   JavaScript
-   HTML
-   SCSS

## Wireframes

I had to change the layout of the page because the original wireframes are too
complicated and time consuming to create in 5 days. I still used the original
wireframes as a guide line to design the layout and create a user friendly
website.

![Wire Frame Part 1](https://raw.githubusercontent.com/kailinc/airkicks-front-end/basic/docAssets/wireframes/wireframe1.jpg)

![Wire Frame Part 2](https://raw.githubusercontent.com/kailinc/airkicks-front-end/basic/docAssets/wireframes/wireframe2.jpg)

![Wire Frame Part 3](https://raw.githubusercontent.com/kailinc/airkicks-front-end/basic/docAssets/devProcess/devProcess5.jpg)

## User Stories

-   As a user, I want to update my shoe so that I can correct my mistakes.
-   As a user, I want group my shoes into different collections so that it is organzied.
-   As a user, I want add shoes so that I can see it online.
-   As a user, I want delete shoes so that it represents reality.
-   As a user, I want to see other shoes, so I can connect with others.
-   As a user, I want to see other collections, so I can connect with others.
-   As a user, I want to use a user friendly site, so I have a good experience

## Development Process

The first thing I worked on is thinking about the file and folder structure of
my code. This would make it easy for me to follow through the code, debug, and
easily find functions. Basically, I had a folder for each user related actions,
shoe related actions, and collection related actions. Each folder would have its
own api.js, events.js, and ui.js. One of the unexpected benefit of this is that
it made me want to keep working on the code because everything is neatly
organized and easy on the eyes.

Before I start coding, I would always go to the whiteboard to draw out the feature
I was trying to add to the site. The first time I whiteboarded it would be a brief
idea of the feature. The second time would be more intense. I would write code
and functions I would need. Then I would look at the whiteboard and think of
steps or events I did not take into account of. I would also thing about the
possible errors (file structure, file relationships, function relationships)
I would get. I would think of how to handle such errors. This made coding very
easy because the whiteboard would serve as a blue-print/check-list/answer-key
for me.

Below are pictures of how I whiteboarded features on the website.

White Board Round 1: User Actions

![Round 1 White Board](https://raw.githubusercontent.com/kailinc/airkicks-front-end/basic/docAssets/devProcess/devProcess1.jpg)


White Board Round 1: After Login
![Round 2 White Board](https://raw.githubusercontent.com/kailinc/airkicks-front-end/basic/docAssets/devProcess/devProcess6.jpg)


White Board Round 2,3: Getting User's Shoes

![Round 2,3 White Board](https://raw.githubusercontent.com/kailinc/airkicks-front-end/basic/docAssets/devProcess/devProcess3.jpg)

White Board Round 2,3: Getting User's Collections

![Round 2,3 White Board](https://raw.githubusercontent.com/kailinc/airkicks-front-end/basic/docAssets/devProcess/devProcess4.jpg)


At the start of each day or coding session, I would have a plan of action. This
made me focused and know what to do. After completing the tasks on the plan of
action, I would make a new plan of action to tackle for my next coding session.

Below is a picture of a plan of actions.

![Plan of Action](https://raw.githubusercontent.com/kailinc/airkicks-front-end/basic/docAssets/devProcess/devProcess2.jpg)

## Problem Solving Strategy

I would usually know the potential problems I would face when I start
coding because of my development process. I would then solve it on the whiteboard.
One of the biggest problem I faced is designing the tables and relationships
for shoes, users, and collections.

Original Data Structure

![Original Data Structure](https://raw.githubusercontent.com/kailinc/airkicks-front-end/basic/docAssets/problemSolving/ps1.jpg)

The issue here is that. User's don't own shoes. I would have to create a collection
called 'All' for each user. User would see this collection 'All' when they want
to see all of their shoes. When a user creates a shoe, I would also have to send
a request to add this shoe to this 'all' collection. This structure seems easy
on paper but is actually complicated in practice. I needed a new structure.


Improved, Implemented Data Structure

![Actual Data Structure](https://raw.githubusercontent.com/kailinc/airkicks-front-end/basic/docAssets/problemSolving/ps2.jpg)

This data structure is beautiful and makes life easy for me. I don't need a to
create a collection called 'All' for all of the user's shoe. I tested this data
structure and it supports what I was trying to accomplish. Then I listed data
and features each table needed.

![Actual Data Structure](https://raw.githubusercontent.com/kailinc/airkicks-front-end/basic/docAssets/problemSolving/ps4.jpg)

When I code and faced an issue, I would use console.log and inspect element to
figure out my problem. If that didn't work, I would follow the flow of the code
that is being used. If that didn't work, I would search the error on Stack Overflow.
If that didn't work, I would ask other coders for help. If that didn't worked,
I would go to the whiteboard and figure it out. By this stage, I would usually
figure out my problem. If I can't figure it out, I would open an issue on GA
Full Stack Project for help.

## Unsolved Problems

Due to time constraint, I was not able to have a feature for people to add or
remove shoes to a collection. My back end is set up to support this action, but
it would require some modifications.

## Solution/Approach to Unsolved Problems

  In my backend, I would add a column for user id to the join table for shoes and
collections (Connect Shoe Collection). Then I would make
ConnectShoeCollectionController inherit from OpenReadController so that it
ensures only the owner of the collection and shoes can add, remove shoes to a
collection. I would also have to modify create and destroy functions of ConnectShoeCollectionController in the back end.

  Then on the front end, I would have to have a button (edit content) on each
collection to add shoes or remove shoes. I would need an event listner. When a
button is clicked, it would bring up a modal with 2 sections. One section is
shoes to add to the collection, and the other is shoes to remove from the
collection. I would have to filter the modal to only show shoes that can be added
or deleted. Each shoe will have buttons to remove or add. Then there would be
event listners to handle each event. Then there would be notifcation messages
for error or success.

## Takeways

-   Neat and organized File, folder, function structure brings lots of benefits
-   BootStrap and Handelbars are powerful and easy to implement
-   User Experience requires a lot of forethought in front end and backend
-   Planning ahead is very helpful

## Future Tasks

-   refactor code for UI
-   add comments to each function, so people understand the code better
-   upload img for shoes, collections
-   comment section for each shoe, collection
-   feature to like a shoe/collection
-   update home feed
-   feature to follow a peron
-   chat messaging feature
-   feature to see friends online
-   feature to sell/buy shoes on the website
-   redesign interface of website
-   have email confirmation
