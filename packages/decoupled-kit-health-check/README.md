# Pantheon Systems Health Check

## What does it do?

The Decoupled Drupal health check will:

1. Check for a BACKEND_URL and/or PANTHEON_CMS_ENDPOINT environment variable
1. If both are set, use the BACKEND_URL for checks, otherwise use whatever is
   set. Throw an error if none are set.
1. Fetch the language settings to determine subsequent calls.
1. Fetch the decoupled router on an article based on 3. Throw an error if the
   decoupled router can not be reached.
1. Fetch the decoupled footer menu. Throw an error if it can not be fetched.
1. Use the set CLIENT_ID and CLIENT_SECRET to fetch an oauth token. Warnings are
   logged if these are not set.
1. Check that the PREVIEW_SECRET is set
1. Use the access_token if available to fetch preview content. Logs a warning if
   preview is not accessible.

The Decoupled WordPress health check will:

1. check for a WPGRAPHQL_URL and/or PANTHEON_CMS_ENDPOINT environment variable
1. If both are set, use the WPGRAPHQL_URL for checks, otherwise use whatever is
   set. Throw an error if none are set.
1. Try to fetch the Example Menu, throw an error if it can not be reached.
1. Use the set WP_APPLICATION_USERNAME and WP_APPLICATION_PASSWORD to fetch
   private posts. Warnings are logged if these are not set or are not valid.
1. Check that the PREVIEW_SECRET is set.
1. Use the credentials if available to fetch preview content. Logs a warning if
   preview is not accessible..

## Usage

### Next + Drupal

In the directory of your `next-drupal` project:

```bash
npx @pantheon-systems/decoupled-kit-health-check drupal
```

### Next + WordPress

In the directory of your `next-wordpress` project:

```bash
npx @pantheon-systems/decoupled-kit-health-check wordpress
```
