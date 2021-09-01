# PROJECT 4 README <!-- omit in toc -->

# Customization Shop

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Customization Shop** is a website where the user can log in and input a car and customize it with items that the user can think of and it would calculate the total for that built. The options can range from any car model that the user wants and they can add interior parts and exteriors parts._

<br>

## MVP

_The **Customization Shop** MVP will cover the user access and their own builts. There needs to be a table for cars and associated with that is a table for interior upgrades and another table for exterior upgrades. they user will be able to input all of these upgrades from their names, description, price and an image._

<br>

### Goals

- _create backend with the correct tables._
- _add the logic to generate a built._
- _render the corresponding data to the correct screens._
- _style the screens to give a good user experience._
- _etc._

<br>

### Libraries and Dependencies

|   Library    | Description                                                          |
| :----------: | :------------------------------------------------------------------- |
|     Ruby     | _create the backend of the project._                                 |
|    React     | _this is used to create the frontend of the project._                |
| React Router | _this will be used to display the different screens of the project._ |

<br>

### Client (Front End)

#### Wireframes

[Login](https://wireframe.cc/pro/pp/8bee06419466803#1)

-

[Register](https://wireframe.cc/pro/pp/8bee06419466803#q1ggjura)

-

[Cars](https://wireframe.cc/pro/pp/8bee06419466803#7efpai65)

-

[Car Create](https://wireframe.cc/pro/pp/8bee06419466803#ufjk35eh)

-

[Car Details](https://wireframe.cc/pro/pp/8bee06419466803#n8yzn8x5)

-

[Car Edit](https://wireframe.cc/pro/pp/8bee06419466803#isz0cs26)

-

[Upgrades](https://wireframe.cc/pro/pp/8bee06419466803#myekbmxx)

#### Component Tree

[Customization Component Tree ](https://lucid.app/lucidchart/invitations/accept/inv_76b9b9b4-d063-4a23-835a-22e530e3fd74?viewport_loc=56%2C-131%2C2447%2C1517%2C0_0)

#### Component Architecture

```structure

src
|__ layout/
      |__ Layout.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ Login.jsx
      |__ Register.jsx
      |__ Cars.jsx
      |__ CarCreate.jsx
      |__ Cardetails.jsx
      |__ CarEdit.jsx
      |__ Upgrades.jsx
|__ services/
      |__ api_config.js
      |__ auth.js
      |__ upgrades.js
      |__ cars.js

```

#### Time Estimates

| Task                         | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------- | :------: | :------------: | :-----------: | :---------: |
| create wireframes            |    L     |     3 hrs      |     4 hrs     |    3 hrs    |
| update readme                |    L     |     3 hrs      |     1 hrs     |     TBD     |
| create tables model          |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| create CRUD backend          |    H     |     4 hrs      |     2 hrs     |     TBD     |
| create services frontend     |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions frontend |    H     |     5 hrs      |     8 hrs     |     TBD     |
| Create components frontend   |    H     |     3 hrs      |     4 hrs     |     TBD     |
| create screens frontend      |    L     |     3 hrs      |     4 hrs     |    3 hrs    |
| sign in Form                 |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| sign up                      |    L     |     3 hrs      |     1 hrs     |     TBD     |
| render images on screen      |    M     |     4 hrs      |     4 hrs     |    3 hrs    |
| style screens                |    H     |     3 hrs      |     3 hrs     |     TBD     |
| TOTAL                        |          |     40 hrs     |    37 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

[ERD](https://lucid.app/lucidchart/invitations/accept/inv_227d002f-6735-45c0-aed8-92ddef276808)
<br>

---

## Post-MVP

> have a page where you can see your builts and compare them
> have the options built into the website
> style it to make it look more user friendly
> have other modes of transportation aside from cars

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

````{carItem?.upgrades.map((upgrade) => (
        <div className='upgrade-div' key={upgrade.id}>
          <div className='upgrade-image-div'>
            <img className='upgrade-image' src={upgrade.image_url} alt={upgrade.upgrade_type} />
          </div>
          <div className='upgrade-info'>
          <p>{upgrade.name}</p>
          <p>{upgrade.description}</p>
          <p> Cost: {upgrade.price}</p>
            <p>{upgrade.upgrade_type}</p>
          </div>
          <button className='delete-upgrade' onClick={() => handleDeleteUpgrade(upgrade?.id)}>Delete</button>
        </div>
      ))}
      ```
## Code Issues & Resolutions
rendering certain data from my backend to frontend

> Use this section to list of all major issues encountered and their resolution.
````
