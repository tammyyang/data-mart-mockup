# data-mart-mockup

Mockup repository for the data marketplace

## Project Description

This repository is a mockup for a data marketplace platform called CaptureMart. The platform allows users to browse and access high-quality AI-ready content from trusted providers. The purpose of this repository is to provide a demonstration of the platform's functionality and structure.

## Setup Instructions

To set up the project and its dependencies, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/tammyyang/data-mart-mockup.git
   cd data-mart-mockup
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Running the Project

To run the project and its scripts, follow these steps:

1. Ensure that you have completed the setup instructions above.

2. Open your web browser and navigate to `http://localhost:3000` to view the project.

## Repository Structure

The repository is structured as follows:

```
data-mart-mockup/
├── collections.json          # JSON file containing the dataset collections
├── index.html                # Main HTML file for the project
├── LICENSE                   # License file for the project
├── modules/                  # Directory containing JavaScript modules
│   ├── createDatasetCard.js  # Module for creating dataset cards
│   ├── fetchData.js          # Module for fetching data
│   ├── getLocalImagePath.js  # Module for getting local image paths
│   ├── renderDatasets.js     # Module for rendering datasets
│   ├── renderStars.js        # Module for rendering star ratings
│   └── setupSearch.js        # Module for setting up search functionality
├── README.md                 # This README file
└── styles.css                # CSS file for styling the project
```

## Contributing

We welcome contributions to the project! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b my-feature-branch
   ```
3. Make your changes and commit them with a descriptive commit message.
4. Push your changes to your forked repository:
   ```bash
   git push origin my-feature-branch
   ```
5. Open a pull request on the main repository.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for more details.

## Update mock up data

To update the mockup data in `collections.json`, follow these steps:

1. Open the `collections.json` file in a text editor.
2. Modify the existing dataset entries or add new ones as needed. Each dataset entry should follow the same structure as the existing ones.
3. Save the changes to the `collections.json` file.
4. Refresh the project in your web browser to see the updated data.
