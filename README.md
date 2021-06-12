# QUATO

This is a mobile app I am building for fun. More on what it does later when it does something.

## Progress and Roadmap
I've started keeping a [development journal](./docs/dev-journal.md) to keep track of my thoughts, reasoning and progress on Quato. Head over there if you are interested.

## Local Development

### Explore GraphQL Schema

```
gq http://localhost:8084/graphql -i -H "Authorization: Bearer $EXPO_GQL_TOKEN"
```
### Requirements
* Docker
* Node
* Expo-Cli
* fauna-shell
* [graphqurl](https://github.com/hasura/graphqurl)
