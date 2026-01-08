# Maps

A small TypeScript project that generates random users and companies and displays them on an interactive map using the Google Maps JavaScript API.

The goal of this project is to practice TypeScript fundamentals, object-oriented design, and frontend tooling while working with a real third-party API and realistic data.

---

## Project Overview

This project randomly generates users and companies using mock data and plots them on a map. Each entity owns its own location data and defines how it should be represented on the map.

The architecture emphasizes clarity and separation of concerns, allowing multiple entity types to share common map behavior while keeping their individual data models clean and type-safe.

---

## Key Concepts Practiced

- TypeScript classes, interfaces, and strict typing
- Object-oriented design and responsibility separation
- Safe integration with third-party JavaScript APIs
- Shared UI state management (single InfoWindow)
- Mock data generation for realistic scenarios
- Modern frontend tooling and module bundling
- ES modules in the browser

---

## Tech Stack

- **TypeScript**
- **Google Maps JavaScript API**
- **@faker-js/faker**
- **Parcel**
- **HTML / Browser ES Modules**

---

## Current Functionality

- Randomly generates users and companies
- Assigns each entity a latitude and longitude
- Displays entities as markers on a Google Map
- Automatically fits the map view to all markers
- Differentiates marker types visually (User vs Company)
- Displays styled InfoWindows with shared state
- Includes a legend for marker types
- Shares common map behavior across different data models using interfaces

---

## Why This Project Exists

This project is intentionally small and focused. It’s designed to demonstrate:

- Comfort with TypeScript fundamentals
- Understanding of frontend architecture and data modeling
- Ability to integrate and control third-party APIs
- Attention to UI behavior and interaction details
- Clean, readable code over unnecessary complexity

---

## Running the Project Locally

### Install dependencies

npm install

### Start the development server

npx parcel index.html

## Google Maps API Notes

This project uses the Google Maps JavaScript API.

To run it locally, you’ll need to:

1. Create a Google Cloud project
2. Enable the Maps JavaScript API
3. Generate an API key
4. Add the key to the Google Maps script tag in `index.html`
