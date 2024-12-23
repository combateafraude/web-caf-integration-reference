# Caf SDK Integration: Document Detector

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Overview

This repository provides an example of integrating **Caf's** proprietary SDK for **Document Detection** into an JavaScript application. It serves as a reference for developers looking to implement identity verification functionalities using the advanced technologies offered by Caf.

## Features

- **Document Detection**: Captures and analyzes identification documents, for identity validation.

## Technologies Used

- **JavaScript**: Primary programming language used in the project.
- **DocumentDetector**: Caf's proprietary SDK for document detection and analysis.

## Prerequisites

Before getting started, ensure you have the following:

- **API Keys**: Tokens and identifiers provided by Caf for using the SDKs.
- **Local web server**: To run and test the application. You can use a tool like [serve](https://github.com/vercel/serve) to create a local server.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/combateafraude/web-caf-integration-reference
   ```

2. **Open the Project in Visual Studio Code or your desired IDE;**

3. **Run the project on a local web server**

   A local web server is necessary to run a type module html file that is using a JavaScript code. For example using the `serve` package:

   ```bash
    npx serve
   ```

## Configuration

1. **Add SDK Credentials**

   - In the `index.js` file, locate the `options` object:

     ```javascript
     const options = {
        token: "YOUR_MOBILE_TOKEN",
        language: "pt_BR",
        blockExecutionOnDesktops: false,
        enableVisibilityChangeSecurity: false,
        ...
     }
     ```

   - Replace `"YOUR_MOBILE_TOKEN"` with the values provided by Caf.

2. **SDK Configuration**

   - **Caf Document Detection**: Configured when the `new DocumentDetector(options)` class is instantiated.
     Verify that all configurations present in the `options` object align with your project requirements and the specifications of Caf's SDK.

## Usage

1. **Run the Application**

2. **Allow camera access in the browser**

3. **View Logs and Results**

   The application will display log messages and Toast notifications indicating the status of operations performed by the SDKs.

## Project Structure

```
caf-sdk-integration-example/
├── src/
|   ├── sdks/
|   |   ├── caf-dd/
|   |   |   ├── document-detector-6.2.0.umd.js
|   |   |   ├── dd-validator.wasm
|   ├── demo.css
|   ├── index.html
|   ├── index.js
└── README.md
```

- **index.js**: Main file managing the integration of the SDK.
- **index.html**: User interface layout that will display the SDK.
- **demo.css**: User interface appearance configuration.
- **document-detector-6.2.0.umd.js**: Document Detector SDK JS file that will be imported in the index.html and used in the index.js.
- **dd-validator.wasm**: File used by the Document Detector SDK to analyze and validate documents inferred by the AI.

---

_This project is a reference integration of Caf's proprietary SDK for Document Detection. All rights to the SDKs belong to Caf._
