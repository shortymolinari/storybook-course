## STORYBOOK

```shell
# Add Storybook:
npx storybook init --type html|react|vue|...
```

```shell
npm run storybook
```

**Fix** 

```bash
ERR_OSSL_EVP_UNSUPPORTED
```

+ **Windows**

`set NODE_OPTIONS=--openssl-legacy-provider`

+ **MAC**

`export NODE_OPTIONS=--openssl-legacy-provider`



**View on browser**

+ Local:  http://localhost:6006/ 

+ On your network:  http://192.168.64.100:6006/ 

---



### ADDONS

## Test-runner

```bash
npm install @storybook/test-runner
```

Add a `test-storybook` script to your package.json

```json
{
  "scripts": {
    "test-storybook": "test-storybook"
  }
}
```

```bash
npm run test-storybook
```


