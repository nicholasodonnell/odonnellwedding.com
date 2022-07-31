<center>
  <img src="banner.png" />
</center>

[![Publish](https://github.com/nicholasodonnell/odonnellwedding.com/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/nicholasodonnell/odonnellwedding.com/actions/workflows/publish.yml)

## Getting Started

1. `cp -n docker-compose.override{.example,}.yml`
2. `docker-compose build --pull`

## Development

1. `docker-compose up`
2. Navigate to [localhost:3000](http://localhost:3000)

## Production

Commits to the `main` branch with be automatically deployed to the [`gh-pages`](https://github.com/nicholasodonnell/odonnellwedding.com/tree/gh-pages) branch.

Production image can be built manually by running: `docker-compose -f docker-compose.yml build`.
