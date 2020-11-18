# YAML to CSV Converter

This is a NodeJS CLI to convert a YAML file into a CSV. This is done by converting the YAML file into a JSON then converting that JSON into CSV.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install YAML to CSV.

1. `cd` into cloned project folder

    ```bash
    cd Desktop/converter
    ```

2. Install globally to run the command from anyway
    ```bash
    npm install -g
    ```
3. call keyword `convert` with the directory of your YAML file and where you would like the CSV file.
    ```bash
    convert /Users/osj/Desktop/converter/key_types.yml /Users/osj/Desktop/converter
    ```
