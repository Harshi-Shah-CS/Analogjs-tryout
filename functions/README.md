# Edge Functions

## Environment Variables (KV Store)

To configure the rewrite destination for `/products*` routes, set the following environment variable:

### PRODUCTS_REWRITE_PATH

- **Description**: The destination path to rewrite `/products*` requests to
- **Default**: `/test`
- **Example values**: `/test`, `/about`, `/ssg`, etc.

### How to Set Environment Variables

According to [Contentstack Launch Edge Functions documentation](https://www.contentstack.com/docs/developers/launch/edge-functions):

1. Go to your Launch project dashboard
2. Navigate to the environment's **Settings** page
3. Add the environment variable:
   - **Key**: `PRODUCTS_REWRITE_PATH`
   - **Value**: Your desired rewrite destination (e.g., `/test`)

### Notes

- Edge Functions can have up to **64** environment variables
- Each environment variable cannot exceed **5KB** in size
- Changes to environment variables require redeployment to take effect

## How It Works

The edge function reads the `PRODUCTS_REWRITE_PATH` value from the context:

```javascript
const rewriteDestination = context.env.PRODUCTS_REWRITE_PATH || '/test';
```

This allows you to dynamically change where `/products*` routes are rewritten to without modifying the code!

