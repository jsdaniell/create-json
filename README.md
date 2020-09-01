 ## create-json

<p align="center">
<img src="https://user-images.githubusercontent.com/44711197/91856090-74cce780-ec3c-11ea-86a4-2f0a23deabaf.png" />
    <p align="center"><b>Create a .json file dynamically on your workflow </b></p>
</p>

Example of the output on the .json file created:

```json
{
    "name":"jsdaniell",
    "password":"mypass"
}
```

### How to use

You can define a json structure on the secrets of your repository:

```json
{
    "name":"jsdaniell",
    "password":"mypass"
}
```
<sub><sup>MY_JSON (Secrets variables can be configured on repository settings > Secrets)</sup></sub>

and use in this way:

```yaml
    - name: create-json
      id: create-json
      uses: jsdaniell/create-json@1.1.2
      with:
        name: "credentials.json"
        json: ${{ secrets.MY_JSON }}
```

Or just declare a string of a json on the property `json` like:

```yaml
    - name: create-json
      id: create-json
      uses: jsdaniell/create-json@1.1.2
      with:
        name: "new-json-file.json"
        json: '{"name":"jsdaniell", "password":"mypass"}'
```
<sub><sup>The json have to be inside a string.</sup></sub>

You also can save the json on a subdirectory using the property `dir`:

```yaml
    - name: create-json
      id: create-json
      uses: jsdaniell/create-json@1.1.2
      with:
        name: "credentials.json"
        json: ${{ secrets.CREDENTIALS_JSON }}
        dir: 'src/'
```

Remember that when you create a .json file, the file was not commited, you have to commit the file if you will use the `HEAD` branch with the file to push the repository to other service, like deploy to heroku or other platforms.

If you want to create more than one json files, you have to specify different IDs for the action like:

```yaml
    - name: create-json
      id: create-json-1 # First ID
      uses: jsdaniell/create-json@1.1.2
      with:
        name: "credentials.json"
        json: ${{ secrets.CREDENTIALS_JSON }}
        dir: 'src/'
    - name: create-json
      id: create-json-2  # Second ID
      uses: jsdaniell/create-json@1.1.2
      with:
        name: "other.json"
        json: '{"name":"jsdaniell", "password":"mypass"}'
        dir: 'src/'
```

### Contribute

You can submit an issue or PR anytime for the improvement this action!
