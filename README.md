# demoblaze-cypress-page

Development of an automation project for technical assessment for the company Metadata Inc.

## Run tests

### Install npm
```
npm install
```

### Run tests
Run by npm
```
npm test
```

or 

Run by Cypress UI
```
npx cypress open
```

### Test cases

| Test 1 |
| - |
| Go to https://www.demoblaze.com/ |
| Sign Up as a new user |
| Validate if you try signup with same user modal will appear  |
| Log in |
| Log out |
| Try logging in with invalid user | 

| Test 2 |
| - |
| Log in |
| Go to Phones |
| Click on Any phone |
| Add to cart |
| Go to another phone and add it to cart |
| Go to cart and remove one item |
| Place order and populate modal |

| Test 3 |
| - |
| Log in |
| Go to Phones |
| Click on Any phone |
| Add to cart |
| Go to another phone and add it to cart |
| Go to cart and remove one item |
| Place order and populate modal |
| Validate charged information is correct as well as other info in confirmation popup |

| Test 4 |
| - |
| Log in |
| Go to main categories level page (category tab on left) |
| Now go to each sub-category level |
| Validate that main category level page contains all items from subcategories |