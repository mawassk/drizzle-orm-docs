import { ICards } from '../@types/SVGTypes';

export const pgDrivers: ICards = {
  postgresjs: {
    title: 'Postgres.JS',
    image: 'postgres-js',
    lightIcon: {
      width: 24,
    },
    darkIcon: {
      width: 24,
      fill: '#f0f0f0',
    },
    description: 'Fastest full featured PostgreSQL client for Node.js and Deno',
    href: './installation-and-db-connection/postgresql/postgresjs',
  },
  'node-postgres': {
    title: 'node-postgres',
    image: 'server',
    lightIcon: {
      width: 24,
    },
    darkIcon: {
      width: 24,
    },
    description: 'Collection of nodejs modules to interact with PostgreSQL',
    href: './installation-and-db-connection/postgresql/node-postgres',
  },
};

export const pgDatabases: ICards = {
  neon: {
    title: 'Neon',
    image: 'neon-serverless',
    lightIcon: {
      width: 24,
      src: '/svg/neon-light.svg',
    },
    darkIcon: {
      width: 24,
      src: '/svg/neon-dark.svg',
    },
    description: 'Serverless multi-cloud fully managed Postgres',
    href: './installation-and-db-connection/postgresql/neon',
  },
  'aws-data-api': {
    title: 'AWS Data API',
    image: 'database',
    lightIcon: {
      width: 24,
    },
    darkIcon: {
      width: 24,
    },
    description: 'Data API for AWS Aurora Serverless',
    href: './installation-and-db-connection/postgresql/aws-data-api',
  },
};

export const mysql: ICards = {
  planetscale: {
    title: 'PlanetScale',
    image: 'planetscale',
    lightIcon: {
      width: 24,
    },
    darkIcon: {
      width: 24,
      fill: '#f0f0f0',
    },
    description: 'World\'s most advanced serverless MySQL platform',
    href: './installation-and-db-connection/mysql/planetscale',
  },
  mysql2: {
    title: 'MySQL 2',
    image: 'server',
    lightIcon: {
      width: 24,
    },
    darkIcon: {
      width: 24,
    },
    description: 'MySQL client for Node.js with focus on performance',
    href: './installation-and-db-connection/mysql/mysql2',
  },
};

export const sqlite: ICards = {
  cloudflared1: {
    title: 'Cloudflare D1',
    image: 'database',
    lightIcon: {
      width: 24,
    },
    darkIcon: {
      width: 24,
    },
    description: 'D1 is Cloudflare\'s first queryable relational database',
    href: './installation-and-db-connection/sqlite/d1',
  },
  bun: {
    title: 'Bun SQLite',
    image: 'bun',
    lightIcon: {
      width: 32,
    },
    darkIcon: {
      width: 32,
    },
    description: 'Fast all-in-one JavaScript runtime',
    href: './installation-and-db-connection/sqlite/bun',
  },
  better: {
    title: 'better-sqlite3',
    image: 'server',
    lightIcon: {
      width: 24,
    },
    darkIcon: {
      width: 24,
    },
    description: 'Library for SQLite3 in Node.js',
    href: './installation-and-db-connection/sqlite/better-sqlite3',
  },
  http: {
    title: 'SQLite HTTP proxy',
    image: 'server',
    lightIcon: {
      width: 24,
    },
    darkIcon: {
      width: 24,
    },
    description: 'SQLite3 HTTP proxy implementation',
    href: './installation-and-db-connection/sqlite/http-proxy',
  },
};